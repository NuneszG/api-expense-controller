import { FastifyRequest, FastifyReply } from "fastify";
import { CreateExpenseService } from "../services/CreateExpenseService";
import { Expense } from "../utils/ExpenseInterfaces";

export class CreateExpenseController {
    async Handle(request: FastifyRequest, reply: FastifyReply) {
        
        const { name, value, amount, importance, validity} = request.body as Expense;
        
        const NewExpense = new CreateExpenseService();
        const Expense = await NewExpense.Execute({ name, value, amount, importance, validity });

        reply.send(Expense);
    };
};