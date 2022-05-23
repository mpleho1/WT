const Sequelize=require('Sequelize');

module.exports=function(sequelize, DataTypes){

const student=sequelize.define("student",{
    ime:Sequelize.STRING,
    prezime:Sequelize.STRING,
    index:{
        type:Sequelize.INTEGER, 
        allowNull:false, 
        unique:true}
},{
    freezeTableName:true,
    timestamps:false
});

return student;
}