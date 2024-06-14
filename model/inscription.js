module.exports = (sequelize, DataTypes)=>{
    const Inscription = sequelize.define("inscription",{
        annee: {
            type: DataTypes.STRING,
            allowNull: false
        },
        statut: {
            type: DataTypes.BOOLEAN
        },
    })

    return Inscription
}