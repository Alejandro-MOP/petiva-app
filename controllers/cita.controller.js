const Sequelize = require('sequelize');
const { response } = require('express');

const Cliente = require('../models/Cliente');
const Horario = require('../models/Horario');
const Cabina = require('../models/Cabina');
const Servicio = require('../models/Servicio');
const Asesora = require('../models/Asesora');
const Maquina = require('../models/Maquina');
const Cita = require('../models/Cita');

exports.insertAsesora = async (req, res = response) => {
	const { nombre } = req.body;
	try {
		const asesora = await Asesora.create({ nombre });
		res.status(200).json({ msg: asesora });
	} catch (error) {
		console.log(error);
	}

	console.log(req.body);
};
