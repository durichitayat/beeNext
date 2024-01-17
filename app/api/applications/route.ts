// import { NextApiResponse, NextApiRequest } from "next";
import { NextResponse, NextRequest } from "next/server";

export async function GET() {
    return NextResponse.json({ 
        message: "Hello World" 
    });
}

export async function POST(request: Request) {
    const body = await request.formData();
    console.log("body: ", body);
    const nom = body.get("Name");
    const id = { id: 1 } // Return id of the new application
    // return new Response('ok', { status: 200 });
    return NextResponse.json({ 
        ...id, 
        status: 200
    });
}
