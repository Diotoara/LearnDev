import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


async function fetch(){
    const user = await prisma.user.findFirst({
        where:{
            id:2
        }
    });
    return({
        email : user?.username,
        name : "aryan"
    });
}

export default async function User() {
    const user = await fetch();
  return (
    <div className="flex flex-col h-screen items-center justify-center">
        <div className="border-3 cursor-pointer hover:bg-gray-100 border-red-400 p-3 rounded-2xl text-xl font-bold">
            {user.email} {user.name}
        </div>
    </div>
  );
}
