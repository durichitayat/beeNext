// import { NextApiResponse, NextApiRequest } from "next";
import { NextResponse, NextRequest } from "next/server";
import { sql } from '@vercel/postgres';

const userId = "user123";

export async function GET() {
    return NextResponse.json({ 
        message: "Hello World" 
    });
}

export async function POST(request: Request, response: Response) {
    const body = await request.formData();
    console.log("body: ", body);
    const nom = body.get("Name");
    
    const api_key = process.env.API_KEY
    const template_id = 41956 // ID of the workflow template
    const workflow_info = {
        'id': template_id,
        'name': 'H1B Visa Application process',
        'kickoff':{ // nullable
            "field-3f5a5e": "Duri Chitayat",            // Name
            "field-fbda66": "USA",                      // Country
            "field-05c933": "USA-H1B",                  // Visa Type
            "field-6cf97f": "duri@durichitayat.net"     // Email
          }
    }

    // const data = json.dumps(workflow_info)
    
    const result =
            await sql`
            INSERT INTO applications (id, userId, applicantId, application)
            VALUES ('unique_id_value', 'user_id_value', 'applicant_id_value', '{"key": "value"}');
            `;

    try {   
        const response = await fetch(`https://api.pneumatic.app/templates/${template_id}/run`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${api_key}`
            },
            body: JSON.stringify(workflow_info)
        });
        console.log("response: ", response.status);
        
    } catch (error) {
        console.log(error);
        return error
    }

    return NextResponse.json({
        status: 200,
        response: response
    });
    
}
