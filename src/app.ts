import { Server } from "http";
import { ServerApp } from "./server";

/**
 * Bootstrap the application here and handle any errors events gracefully.
 */
ServerApp.start()
  .then((srv: Server) => {
    if (srv) {
      console.log("Platform: " + process.platform + "-" + process.arch);
      console.log("Node: " + process.version);
      console.log("Environment: " + process.env.NODE_ENV);
      console.log("Server is listening on port 9001");
      srv.on("error", (error) => {
        console.error(error.message);
      });
    } else {
      throw new Error("An error occurred when attempting to start the server.");
    }
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
