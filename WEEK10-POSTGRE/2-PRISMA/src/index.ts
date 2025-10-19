import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function insertUser(username: string, password: string, firstName: string,) {
  const res = await prisma.user.create({
    data:{
        email:username,
        name:firstName,
        password,
    }
  })
  console.log(res)
}

// insertUser("aria@gmail.com", "pswd-2", "Raj jha")       //-to add in user table

async function insertTodo(Title:string, Description:string, UserId:number) {
    const res = await prisma.todo.create({
        data:{
            Title,
            Description,
            UserId
        }
    })  
    console.log(res)  
}

// insertTodo("edit a video","sillicon valley series compelted", 2)


async function updateUserName(username: string, name: string) {
  const res = await prisma.user.update({
    where: { email:username },
    data: {
        name,
    }
  });
  console.log(res);
}

// updateUserName("Aryan@gmail.com", "Aryan")


async function getUser(email: string) {
  const users = await prisma.user.findFirst({
    where: {
        email
    },
  })
//   console.log(users);
  const id = users ? users.id : 0
  console.log(id)
  getTodos(id)
}

async function getTodos(UserId:number) {
    const todoss = await prisma.todo.findMany({
        where:{
            UserId
        },
        select:{
            Title:true,
            Description:true
        }
    })
    console.log(todoss)
}

getUser("Aryan@gmail.com")
// getTodos(1)