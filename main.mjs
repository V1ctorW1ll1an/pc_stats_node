import { log, clear, table } from "console";
import { freemem, totalmem } from "os";
import { emitLog } from "./logger.mjs";

setInterval(() => {
    const free = parseInt(freemem() / 1024 / 1024);
    const total = parseInt(totalmem() / 1024 / 1024);
    const percents = parseInt((free / total) * 100);
    const pc_memory = {
        free: `${free} MB`,
        total: `${total} MB`,
        freePercents: `${percents}%`,
    };
    clear();
    log("Stats");
    table(pc_memory);

    emitLog(`${JSON.stringify(pc_memory)}\n`);
}, 1000);
