const { spawn } = require("child_process");
const { readFileSync } = require("fs-extra");
const http = require("http");
const axios = require("axios");
const semver = require("semver");
const logger = require("./utils/log");
const chalk = require('chalk');

///////////////////////////////////////////////////////////
//========= Create website for dashboard/uptime =========//
///////////////////////////////////////////////////////////

  const dashboard = http.createServer(function (_req, res) {
    res.writeHead(300, "OK", { "Content-Type": "text/plain" });
    res.write("Hi.");
    res.end();
});
dashboard.listen(process.env.port || 8888 || 9999);
var a;
a = process.env.port || 8888 || 9999;
var b  = process.env.REPL_OWNER ? "https://" + process.env.REPL_SLUG + "." + process.env.REPL_OWNER + ".repl.co" : "https://localhost:" + a;
logger("Đang khởi động...", "[ Bắt Đầu ]");
logger(`${b}`,"[ LINK ]")
/////////////////////////////////////////////////////////
//========= Create start bot and make it loop =========//
/////////////////////////////////////////////////////////

function startBot(message) {
    (message) ? logger(message, "[ Bắt Đầu ]") : "";

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "mirai.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (codeExit) => {
        if (codeExit != 0 || global.countRestart && global.countRestart < 5) {
            startBot("Đang khởi động...");
            global.countRestart += 1;
            return;
        } else return;
    });

    child.on("error", function (error) {
        logger("Đã xảy ra lỗi: " + JSON.stringify(error), "[ Bắt Đầu ]");
    });
};
startBot();