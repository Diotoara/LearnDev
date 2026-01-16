"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const redis_1 = require("redis");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const client = (0, redis_1.createClient)();
app.post("/submit", async (req, res) => {
    const { problemId, userId, code, language } = req.body;
    client.lPush("submissions", JSON.stringify({ problemId, userId, code, language }));
    res.status(200).json({
        message: "Submission Received!"
    });
});
async function startServer() {
    try {
        await client.connect();
        console.log("Connected to Redis");
        app.listen(3000, () => {
            console.log("server is running on localhost:3000");
        });
    }
    catch (error) {
        console.log("failed to connect to redi");
    }
}
startServer();
//# sourceMappingURL=index.js.map