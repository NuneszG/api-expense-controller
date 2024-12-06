import { Prisma } from "../prisma/prisma";
import { ExpenseId } from "../utils/ExpenseInterfaces";

export class GetbyIdExpenseService {
    async Execute({ id }: ExpenseId) {

        const ExpenseSpecific = await Prisma.expense.findFirst({
            where: {
                id: id
            }
        });

        return ExpenseSpecific;
    };
};