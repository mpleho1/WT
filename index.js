const express = require('express');
const app = express();
const path = require('path');
const fs=require('fs');
const db=require('./database/db.js');
const bodyParser=require('body-parser');
const { sequelize, vjezba, zadatak, student,grupa } = require('./database/db.js');
const { DOUBLE } = require('mysql/lib/protocol/constants/types');
app.use(express.static('./public/html'));
app.use(express.static('./public/js'));
app.use(express.static('./public/slike'));
app.use(express.static('./public/css'));
app.use(express.static('./public/test'));

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));


//db.sequelize.sync({force:true});


app.get('/vjezbe', function(req, res) {
    db.vjezba.findAll({include:{all:true}}).then(vjezbe => {
        var zadaciVjezbe = [];
        var duzinaV=vjezbe.length;          
        for(var i = 0; i < vjezbe.length; i++){
          zadaciVjezbe.push(vjezbe[i].zadataks.length);
        }
    
        let objekatVjezbe = {
            brojVjezbi: vjezbe.length,
            brojZadataka:zadaciVjezbe
        };
        return res.json(objekatVjezbe);
    });
});

app.post('/vjezbe', function(req,res){
    let tijelo = req.body; 
    let brojVjezbi=tijelo['brojVjezbi'];
    let zadaci=tijelo['brojZadataka'];
    let pogresni=[];
    if(brojVjezbi<1 || brojVjezbi>15){
        pogresni.push("brojVjezbi");
        
    }
    

    for(var i=0; i<zadaci.length; i++){
        if(zadaci[i]<0 || zadaci[i]>10){
            pogresni.push("z"+(i+1));
        }
    }
   if(brojVjezbi!=zadaci.length || zadaci.length<0 || zadaci.length>15 ){
        pogresni.push("brojZadataka");
    }

    let objekat={
        status:'error',
        data:"Pogresan parametar "+ pogresni
    }
    if(pogresni.length>0) {
        res.status(404);
        res.send(JSON.stringify(objekat));
        return;
    }



    let vjezbe=[];
    let zad=[];
    let ids=[];
    for(var i=1; i<=brojVjezbi; i++){
        let objekat1={
            naziv: ''
        }
        objekat1.naziv='Vjezba'+i;
        vjezbe.push(objekat1);
    }

    zadatak.destroy({
        truncate:true,
        where:{}
    }).then(()=>{
        return vjezba.bulkCreate(vjezbe).then(()=>{
            return vjezba.findAll().then((rezultat)=>{
                for(let l=0; l<rezultat.length; l++){
                    ids.push(rezultat[l].id);
                }
            }).then(()=>{
                for(var i=1; i<=brojVjezbi; i++){
                    for(var j=1; j<=zadaci[i-1]; j++){
                        let objZ=new Object();
                        objZ.nazivZadatka="Zadatak"+j;
                        objZ.vjezbaId=ids[i-1];
                        zad.push(objZ);
                    }
                }
                return zadatak.bulkCreate(zad).then(()=>{
                    let objekat2={
                        brojVjezbi:brojVjezbi,
                        brojZadataka:zadaci
                    }
                    res.send(JSON.stringify(objekat2));
                }).catch(()=>{
                    res.json({message:"greska"});
                });
            })
        })

    })


});
    


app.post('/student',function(req,res){
   let tijelo=req.body;
   let index=parseInt(tijelo.index);
   let grupaStudenta=tijelo.grupa;
   db.student.findAll({where:{index:index}}).then((s)=>{
       if(s.length!=0){
              return res.status(400).json({ status: 'Student sa indexom '+index+' već postoji!' });
       }
  
       else{
           db.grupa.findOrCreate({where:{naziv:grupaStudenta}}).then((g)=>{
            db.student.create({
                ime:tijelo.ime,
                prezime:tijelo.prezime,
                index:tijelo.index,
                grupaId:g[0].id
            }).then((student)=>{
                res.status(200).json({status:"Kreiran student!"});
            }).catch((error)=>{
              res.json({status:"Greska",error:error});
          });

           }).catch(()=>{
            res.json({status:"GRESKA"});
        
        });
       }
   }).catch(()=>{
    res.json({status:"Nijedno polje ne smije biti prazno! Ponovite unos!"});

});
 
});




app.put('/student/:index',function(req,res){ 
    let tijelo=req.body;
    let indeks=parseInt(req.params['index']);
    let grupaStudenta=req.body.grupa; 
    console.log(grupaStudenta);
    db.student.findOne({where:{index:indeks}, include:{all:true}}).then((s)=>{ //ok
        if(s==undefined){
               return res.status(400).json({ status: 'Student sa indexom '+indeks+' ne postoji!' });
        }
         else {            
            db.grupa.findOrCreate({where:{naziv:grupaStudenta}}).then((g)=>{
                  s.update({grupaId:g[0].id}).then(()=>{
                    return res.json({status:'Promijenjena grupa '+ indeks});
                  });   
                 
            }).catch((ex)=>{
                return res.status(400).json({status:"Uneseni pogresni parametri!"+ ex.message}); 
             }); 
        } 
    });   
 });


app.post('/batch/student', async function (req, res) {
    let tijelo = req.body;

    let parsedTijelo = tijelo.split(/(?:\r\n|\n)+/);
    let postojeciStudenti = [];
    console.log(parsedTijelo)
    for(let i=0;i<parsedTijelo.length;i++) 
    {
 
        var splitElement = parsedTijelo[i].split(",");
        var studentIzBaze = await db.student.findOne({ where: { index: splitElement[2] } });
        if (studentIzBaze != null) {
            postojeciStudenti.push(studentIzBaze)
        }
        else {
            var student = {
                ime: splitElement[0],
                prezime: splitElement[1],
                index: splitElement[2]
            }
            var grupaDb = await db.grupa.findOne({ where: { naziv: splitElement[3] } });
 
            if (!grupaDb) {
                var novaGrupa =
                {
                    naziv: splitElement[3]
                };
 
                var gp = await db.grupa.create(novaGrupa);
                student.grupaId = gp.dataValues.id;
                var sp = await db.student.create(student);
            }
            else {
                student.grupaId = grupaDb['id'];
                var sp = await db.student.create(student);
            }
 
        }
    }
 
    if (postojeciStudenti == undefined || postojeciStudenti.length == 0) {
        res.status(200).json({ status: "Dodano " + parsedTijelo.length + " studenata!" });
    }
    else {
        var m = parsedTijelo.length - postojeciStudenti.length;
        var output = "";
        for (var i = 0; i < postojeciStudenti.length; i++) {
            if (i != postojeciStudenti.length - 1) {
                output = output + postojeciStudenti[i].index + ",";
            }
            else {
                output = output + postojeciStudenti[i].index;
            }
 
        }
        res.status(200).json({ status: "Dodano " + m + " studenata, a studenti " + output + " već postoje!" });
    }

 
});

app.listen(3000, () => {
    console.log("Uspjesno otvoren port 3000");
});