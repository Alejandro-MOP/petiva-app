const Sequelize = require('sequelize');
const db = require('../config/db');
const TipoServicio = require('./TipoServicio');

const Servicio = db.define('Servicio', {
	id: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		primaryKey: true,
	},
});

Servicio.belongsTo(TipoServicio, {
	foreignKey: {
		name: 'id_tipo_servicio',
	},
});

module.exports = Servicio;
