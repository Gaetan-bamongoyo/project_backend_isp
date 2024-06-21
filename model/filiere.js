module.exports = (sequelize, DataTypes)=>{
    const Filiere = sequelize.define("filiere",{
        designationfiliere: {
            type: DataTypes.STRING
        },
        initiale:{
            type: DataTypes.STRING
        },
        section: {
            type: DataTypes.STRING,
        },
    })

    return Filiere
}