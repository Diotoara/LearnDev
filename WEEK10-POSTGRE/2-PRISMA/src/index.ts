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

insertUser("Aryan@gmail.com", "merapasswrd", "Aryn")gi