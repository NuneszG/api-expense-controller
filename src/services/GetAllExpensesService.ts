import { Prisma } from "../prisma/prisma";

export class GetAllExpensesService {
    async Execute() {
        
        const All = await Prisma.expense.findMany();

        return All;
    };
};