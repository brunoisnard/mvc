import express from 'express';
import ProjetoController from '../controllers/projetoController.js';

const router = express.Router();

router 
.get("/", ProjetoController.getAllProjetos)
.post("/", ProjetoController.createProjetos)

export default router;





















