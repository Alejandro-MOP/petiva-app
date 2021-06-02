const Sequelize = require('sequelize');
const db = require('../config/db');
const Zonas = require('./Zonas');

const TipoServicio = db.define('Tipo_Servicio', {
	id: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		primaryKey: true,
	},
	tipo: {
		type: Sequelize.STRING(30),
		allowNull: false,
	},
});

TipoServicio.belongsTo(Zonas, {
	foreignKey: {
		name: 'id_zona',
	},
});

module.exports = TipoServicio;
