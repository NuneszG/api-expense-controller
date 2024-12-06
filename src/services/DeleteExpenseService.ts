import { Prisma } from "../prisma/prisma";
import { ExpenseId } from "../utils/ExpenseInterfaces";

export class DeleteExpenseService {
    async Execute({ id }: ExpenseId) {

        const ExpenseSpecific = await Prisma.expense.findFirst({
            where: {
                id: id
            }
        });

        await Prisma.expense.delete({
            where: {
                id: ExpenseSpecific?.id
            }
        })

        return `${ExpenseSpecific?.name} data was deleted.`;
    };
};