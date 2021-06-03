const express = require('express');
const router = express.Router();
const citaController = require('../controllers/cita.controller');

module.exports = () => {
	router.post('/asesora/', citaController.insertAsesora);

	//TODO: GENERAR LA MISMA FUNCIONALIDAD PARA INSERTAR LOS DATOS EN LA BD

	// router.post('/cabina/', citaController.);
	// // // router.post('/cita/', citaController.);
	// router.post('/cliente/', citaController.);
	// router.post('/horario/', citaController.);
	// router.post('/maquina/', citaController.);
	// router.post('/servicio/', citaController.);
	// router.post('/tipo-servicio/', citaController.);
	// router.post('/zonas/', citaController.);
	return router;
};
