const Sequelize = require('sequelize');
const db = require('../config/db');
const Cliente = require('./Cliente');
const Horario = require('./Horario');
const Cabina = require('./Cabina');
const Servicio = require('./Servicio');
const Asesora = require('./Asesora');
const Maquina = require('./Maquina');

const Cita = db.define('Cita', {
	id: {
		type: Sequelize.INTEGER(11),
		autoIncrement: true,
		primaryKey: true,
	},
	fecha: {
		type: Sequelize.DATE,
		allowNull: false,
	},
});

Cita.belongsTo(Cliente, {
	foreignKey: {
		name: 'id_cliente',
	},
});

Cita.belongsTo(Horario, {
	foreignKey: {
		name: 'id_cliente',
	},
});

Cita.belongsTo(Cabina, {
	foreignKey: {
		name: 'id_cabina',
	},
});

Cita.belongsTo(Servicio, {
	foreignKey: {
		name: 'id_servicio',
	},
});

Cita.belongsTo(Asesora, {
	foreignKey: {
		name: 'id_asesora',
	},
});

Cita.belongsTo(Maquina, {
	foreignKey: {
		name: 'id_maquina',
	},
});

module.exports = Cita;
