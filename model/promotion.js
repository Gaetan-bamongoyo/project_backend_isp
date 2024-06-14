module.exports = (sequelize, DataTypes)=>{
    const Promotion = sequelize.define("promotion",{
        designation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        statut: {
            type: DataTypes.BOOLEAN
        },
    })

    return Promotion
}