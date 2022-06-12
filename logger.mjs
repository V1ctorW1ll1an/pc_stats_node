import { EventEmitter } from "events";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const fileName = fileURLToPath(import.meta.url);
const dirName = path.dirname(fileName);
const eventEmitter = new EventEmitter();

const fnLog = (message) => {
    fs.appendFile(path.join(dirName, "log.txt"), message, (error) => {
        if (error) throw error;
    });
};

const emitLog = (message) => {
    eventEmitter.emit("log", message);
};

eventEmitter.on("log", fnLog);

export { emitLog };
