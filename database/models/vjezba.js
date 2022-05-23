const Sequelize=require('Sequelize');

module.exports=function(sequelize, DataTypes){

const vjezba=sequelize.define("vjezba",{
    naziv:Sequelize.STRING
    

},{
    freezeTableName:true,
    timestamps:false

});
return vjezba;

}