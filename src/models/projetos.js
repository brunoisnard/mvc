import mongoose from 'mongoose';

const projetoSchema = new mongoose.Schema(

    {
        nome: { type: String, required: true },
        telefone: { type: Array, required: true },
        cpf: { type: String, required: true },
        email: { type: String, required: true },
        datadenascimento: { type: String, required: true },
        tsangue: { type: String, required: true },
        ultmadoacao: { type: String, required: true },
        sexo: { type: String, required: true },
        endereço: { type: Object, required: true }
    }
)

const projetos = mongoose.model('projetos', projetoSchema);

export default projetos;