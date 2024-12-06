import { FastifyRequest, FastifyReply, FastifyInstance, FastifyPluginOptions } from "fastify";

import { CreateExpenseController } from "./controllers/CreateExpenseController";
import { GetAllExpensesController } from "./controllers/GetAllExpensesController";
import { GetbyIdExpenseController } from "./controllers/GetbyIdExpenseController";
import { UpdateExpenseController } from "./controllers/UpdateExpenseController";
import { DeleteExpenseController } from "./controllers/DeleteExpenseController";

export default function Routes(fastify: FastifyInstance, plugin: FastifyPluginOptions) {

    fastify.post("/auth/expenses/create-expense/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateExpenseController().Handle(request, reply);
    });

    fastify.get("/auth/expenses/get-all/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetAllExpensesController().Handle(request, reply);
    });

    fastify.put("/auth/expenses/update-expense/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateExpenseController().Handle(request, reply);
    });

    fastify.get("/auth/expenses/get-specific-expense/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetbyIdExpenseController().Handle(request, reply);
    });

    fastify.delete("/auth/expenses/delete-expense/", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteExpenseController().Handle(request, reply);
    });

};