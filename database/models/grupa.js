const Sequelize=require('Sequelize');

module.exports=function(sequelize, DataTypes){

const grupa=sequelize.define("grupa",{
    naziv: {
        type:Sequelize.STRING,
         allowNull:false,
         unique:true
        } 
},{
    freezeTableName:true,
    timestamps:false
});

return grupa;
}