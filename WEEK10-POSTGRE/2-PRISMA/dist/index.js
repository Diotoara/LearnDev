"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function insertUser(username, password, firstName) {
    const res = await prisma.user.create({
        data: {
            email: username,
            name: firstName,
            password,
        }
    });
    console.log(res);
}
insertUser("Aryan@gmail.com", "merapasswrd", "Aryn");
//# sourceMappingURL=index.js.map