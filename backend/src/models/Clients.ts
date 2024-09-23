import mongoose from "mongoose"
const { Schema } = mongoose;

interface ICliente extends Document {
    nome: string;
    email: string;
    idade: number;
    fone: string;
    status: 'Ativo' | 'Inativo';
  }

const ClientSchema = new Schema<ICliente>({
    nome: {
        type: String,
        maxLength: 30,
        required: true
    },
    email: {
        type: String,
        maxLength: 100,
        validate: {
            validator: function isValidEmail(value: string) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: (props: { value: string }) => `${props.value} é um e-mail inválido.`
        },
        unique: true,
        required: true
    },
    idade: {
        type: Number,
        maxLength: 2,
    },
    fone: {
        type: String,
        validate: {
            validator: function isValidFone(value: number) {
                return /^[0-9]{11}$/.test(value.toString());
            },
            message: (props: { value: string }) =>
                `${props.value} não é um número de telefone válido!`,
        },
        unique: true,
    },
    status: {
        type: String,
        enum: ['Ativo', 'Inativo'],
        default: 'Ativo' 
    }
});

export default mongoose.model("Client", ClientSchema, "clientes");