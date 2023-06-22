import type { NextApiRequest, NextApiResponse } from "next"


export async function POST(req:NextApiRequest, res:NextApiResponse) {
   const {email, subject, message} =  req.body;

   console.log(req.body)
}

