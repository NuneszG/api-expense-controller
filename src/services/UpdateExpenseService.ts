import { Prisma } from "../prisma/prisma";
import { ExpenseData } from "../utils/ExpenseInterfaces";

export class UpdateExpenseService {
    async Execute({ id, name, value, amount, validity, importance }: ExpenseData) {

        const Id = await Prisma.expense.findFirst({
            where: {
                id: id
            }
        });

        const Expense = await Prisma.expense.update({
            where: {
                id: Id?.id
            },
            data: {
                name,
                value,
                amount,
                validity,
                importance
            }
        });

        console.log(`${Id?.name} data was updated.`);
        return Expense;
    };
};