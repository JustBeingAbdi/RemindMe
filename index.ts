import { Server } from "./WebServer";
import { Connect } from "./Database";

new Server().init();


new Connect().Connect();