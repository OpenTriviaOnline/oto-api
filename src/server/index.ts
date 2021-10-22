import { Application } from 'express';
import { Server } from 'http';
import { RouterFactory } from './routes';
import { ServerFactory } from './server.factory';

/**
 * The entry-point for the application.
 * This is where we will instantiate the server and configure
 * it before we start listening for requests.
 */
export class ServerApp {

    /**
     * The Express Application Instance.
     */
    public static app: Application;

    /**
     * Starts the server application.
     */
    public static async start(): Promise<Server> {
        // Initialize the server object.
        ServerApp.app = ServerFactory.createServer();
        // Build routes
        RouterFactory.initializeRoutes(ServerApp.app);
        // Setup Cors
        ServerApp.app.use((_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST');
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });

        // Start listening on the server.
        return ServerApp.app.listen(9001);
    }

}
