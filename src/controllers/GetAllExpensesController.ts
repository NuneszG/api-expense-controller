import { FastifyRequest, FastifyReply } from "fastify";
import { GetAllExpensesService } from "../services/GetAllExpensesService";

export class GetAllExpensesController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {
        
        const AllExpenses = new GetAllExpensesService();
        const Expenses = await AllExpenses.Execute();

        reply.send(Expenses);
    };
};