module.exports = (sequelize, DataTypes)=>{
    const User = sequelize.define("user",{
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        filiere: {
            type: DataTypes.STRING,
            allowNull: false
        },
        statut: {
            type: DataTypes.BOOLEAN,
            default: true
        },
    })

    return User
}