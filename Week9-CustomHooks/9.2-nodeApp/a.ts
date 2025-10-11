interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}

function isLegal(user: User) {
    if (user.age > 18) {
        return true
    } else {
        return false;
    }
}

const user = {
	firstName: "harkirat",
	lastName: "singh",
	email: "email@gmail.com",
	age: 7,
};

let x:any = isLegal(user)
console.log(x)
