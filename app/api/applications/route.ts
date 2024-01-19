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
    
    // Post to Camunda API
    try {
        const response = await fetch("https://jfk-1.connectors.camunda.io/63b3440a-8041-4ec8-b635-be9b72af0c96/inbound/applications", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                variables: {
                    "name": {
                        "value": nom,
                        "type": "String"
                    }
                }
            })
        });
    } catch (error) {
        console.log(error);
    }

    return NextResponse.json({ 
        ...id, 
        status: 200
    });
}
