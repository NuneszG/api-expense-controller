import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateExpenseService } from "../services/UpdateExpenseService";
import { ExpenseData, ExpenseId } from "../utils/ExpenseInterfaces";

export class UpdateExpenseController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {
        
        const { id } = request.query as ExpenseId;
        const { name, value, amount, validity, importance } = request.body as ExpenseData;

        const ExpenseUpdated = new UpdateExpenseService();
        const Expense = await ExpenseUpdated.Execute({ id, name, value, amount, validity, importance });

        reply.send(Expense);
    };
};