import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteExpenseService } from "../services/DeleteExpenseService";
import { ExpenseId } from "../utils/ExpenseInterfaces";

export class DeleteExpenseController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {
        
        const { id } = request.query as ExpenseId;

        const ExpenseRemoved = new DeleteExpenseService();
        const Expense = await ExpenseRemoved.Execute({ id });

        reply.send(Expense);
    };
};