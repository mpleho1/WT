const Sequelize=require('Sequelize');

module.exports=function(sequelize, DataTypes){

const zadatak=sequelize.define('zadatak',{
    nazivZadatka:Sequelize.STRING
   

},{
    freezeTableName:true,
    timestamps:false
});
return zadatak;

}