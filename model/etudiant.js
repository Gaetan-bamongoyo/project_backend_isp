module.exports = (sequelize, DataTypes)=>{
    const Etudiant = sequelize.define("etudiant",{
        matricule: {
            type: DataTypes.STRING
        },
        identite: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sexe: {
            type: DataTypes.STRING
        },
        lieunaissance: {
            type: DataTypes.STRING
        },
        datenaissance: {
            type: DataTypes.STRING
        },
        province: {
            type: DataTypes.STRING
        },
        annee: {
            type: DataTypes.STRING
        },
        section: {
            type: DataTypes.STRING
        },
        pourcent: {
            type: DataTypes.STRING
        },
        adresse: {
            type: DataTypes.TEXT
        },
        photo: {
            type: DataTypes.TEXT
        },
    })

    return Etudiant
}