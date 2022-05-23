const Sequelize=require('sequelize');

const sequelize=new Sequelize('wt2118542','root', 'password',{
host:'localhost',
dialect:'mysql',
pool:{
    max:5,
    acquire:30000,
    idle:10000
}
});

const db={};
db.sequelize=sequelize;
db.Sequelize=Sequelize;

db.grupa=require(__dirname+'/models/grupa.js')(sequelize,Sequelize.DataTypes);
db.student=require(__dirname+'/models/student.js')(sequelize,Sequelize.DataTypes);
db.vjezba=require(__dirname+'/models/vjezba.js')(sequelize,Sequelize.DataTypes);
db.zadatak=require(__dirname+'/models/zadatak.js')(sequelize,Sequelize.DataTypes);


db.vjezba.hasMany(db.zadatak,{
    foreignKey:{allowNull:false}
});
db.zadatak.belongsTo(db.vjezba);



db.grupa.hasMany(db.student,{
    foreignKey:{allowNull:false}
});
db.student.belongsTo(db.grupa);

module.exports=db;

