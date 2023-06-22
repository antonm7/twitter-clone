import { type NextApiRequest, type NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function GET(req:NextApiRequest, res:NextApiResponse) {
    return NextResponse.json({data:'dsadsa'})

}