import { freemem, totalmem } from "os";

setInterval(() => {
    const free = parseInt(freemem() / 1024 / 1024);
    const total = parseInt(totalmem() / 1024 / 1024);
    const percents = parseInt((free / total) * 100);
    const pc_memory = {
        free: `${free} MB`,
        total: `${total} MB`,
        freePercents: `${percents}%`,
    };
    console.clear();
    console.log("Stats");
    console.table(pc_memory);
}, 1000);
