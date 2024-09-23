import { Request, Response } from "express";
import Client from "../models/Clients";

class ClientController {
    public async createClients(req: Request, res: Response): Promise<Response> {
        try {
            console.log("Iniciando a criação do cliente...");
            const { nome, email, idade, fone, status } = req.body;

            const cliente = new Client({ nome, email, idade, fone, status });
            const novoCliente = await cliente.save();

            return res.status(201).json(novoCliente);
        } catch (error) {
            console.error('Erro ao criar cliente:', error);
            return res.status(500).json({ message: 'Erro ao criar cliente', error });
        }
    }

    public async getClients(req: Request, res: Response): Promise<Response> {
        try {
            const clients = await Client.find();
            return res.status(200).json(clients);
        } catch (error) {
            console.error('Erro ao obter clientes:', error);
            return res.status(500).json({ message: 'Erro ao obter clientes', error });
        }
    }

    public async updateClients(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params; // Pega o id da URL
            const { nome, email, idade, fone, status } = req.body;

            // Atualiza o cliente com as propriedades permitidas
            const clienteAtualizado = await Client.findByIdAndUpdate(id, {
                nome,
                email,
                idade,
                fone,
                status
            }, { new: true });

            if (!clienteAtualizado) {
                return res.status(404).json({ message: 'Cliente não encontrado' });
            }

            return res.status(200).json(clienteAtualizado);
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
            return res.status(500).json({ message: 'Erro ao atualizar cliente', error });
        }
    }

    public async deleteClients(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params; // Pega o id da URL

            const clienteRemovido = await Client.findByIdAndDelete(id);

            if (!clienteRemovido) {
                return res.status(404).json({ message: 'Cliente não encontrado' });
            }

            return res.status(200).json({ message: 'Cliente removido com sucesso' });
        } catch (error) {
            console.error('Erro ao remover cliente:', error);
            return res.status(500).json({ message: 'Erro ao remover cliente', error });
        }
    }
}

export default new ClientController();
