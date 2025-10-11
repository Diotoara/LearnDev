"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
const user = {
    firstName: "harkirat",
    lastName: "singh",
    email: "email@gmail.com",
    age: 7,
};
let x = isLegal(user);
console.log(x);
//# sourceMappingURL=a.js.map