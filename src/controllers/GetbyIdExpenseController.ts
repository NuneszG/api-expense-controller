import { FastifyRequest, FastifyReply } from "fastify";
import { GetbyIdExpenseService } from "../services/GetbyIdExpenseService";
import { ExpenseId } from "../utils/ExpenseInterfaces";

export class GetbyIdExpenseController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {
        
        const { id } = request.query as ExpenseId;

        const ExpenseSpecific = new GetbyIdExpenseService();
        const Expense = await ExpenseSpecific.Execute({ id });

        reply.send(Expense);
    };
};