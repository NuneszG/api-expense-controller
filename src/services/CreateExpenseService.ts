import { Prisma } from "../prisma/prisma";
import { Expense } from "../utils/ExpenseInterfaces";

export class CreateExpenseService {
    async Execute({ name, value, amount, importance, validity}: Expense) {

        if (!name || !value || !amount) {
            throw Error("Requisição inválida. Por favor, repreencha os dados e tente novamente.");
        };

        const Expense = await Prisma.expense.create({
            data: {
                name,
                value,
                amount,
                importance,
                validity
            }
        });

        return Expense;
    };
};