import express from 'express';
import ProjetoController from '../controllers/projetoController.js';

const router = express.Router();

router 
.get("/", ProjetoController.getAllProjetos)
.post("/", ProjetoController.createProjetos)
.put("/", ProjetoController.createProjetos)
.delete("/:id" ,ProjetoController.updateProjetos)

export default router;





















