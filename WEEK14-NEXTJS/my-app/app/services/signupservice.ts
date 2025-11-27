
"use server"

import { prisma } from "@/lib/prisma";



export async function signupSer( username:string, password:string){
    try {
        await prisma.user.create({
            data:{
                username : username,
                password : password
            }
        })
        return "you are logged in"
    } catch (error) {
        return"error while signing up";
    }
    
};