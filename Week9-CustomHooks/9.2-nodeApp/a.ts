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
	firstName: "Aryan",
	lastName: "Jha",
	email: "aryan@gmail.com",
	age: 19,
};

let x:any = isLegal(user)
console.log(x)
