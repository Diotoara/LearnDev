import { NextRequest, NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        name : "aryan",
        email : "aryan@jha.com"
    })
}

export async function POST(req:NextRequest) {
    const body = await req.json();
    return NextResponse.json({
        message : "you are logged in",
        name : body.name,
        email : body.email
    })
}