import { fastify } from "fastify";
import cors from "@fastify/cors";
import Routes from "./routes";

const App = fastify({
    logger: true
});

const Start = async () => {

    await App.register(cors);
    await App.register(Routes);

    try {
        await App.listen({ port: 8000 }) 
    } catch (err) {
        process.exit(1);
    };
};

Start();