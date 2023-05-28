const {Model, DataTypes } = require('sequelize');

const PERSON_TABLE = 'persons';

class Person extends Model {
    static config(sequelize){
        return {
            sequelize,
            tableName:PERSON_TABLE,
            modelName: 'Person',
            timestamps: true
        }
    }
}

const PersonsSchema ={
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    cedula_identidad: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'cedula_identidad'
    },  
    nombre: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'nombre'
    },
    primer_apellido: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'primer_apellido'
    },
   segundo_apellido: {
        allowNull: false,
        type: DataTypes.STRING,
        field:'segundo_apellido'
    },
    fecha_nacimiento:{
        allowNull: true,
        type: DataTypes.DATE,
        field:'fecha_nacimiento'
    }

}
module.exports = {Person, PersonsSchema};
