import { NextRequest, NextResponse } from "next/server";
import {prisma} from '../../../lib/prisma'


export async function POST(req : NextRequest){
    const body = await req.json();
    const res = await prisma.user.create({
        data:{
            username : body.username,
            password : body.password
        }
    })
    return NextResponse.json({
        message : "you are logged in",
        body
    })
}