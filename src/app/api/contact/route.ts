import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Here you would typically connect to a service like SendGrid, Resend, or a database.
        // For this portfolio demo, we'll log the specific user request.

        console.log("Contact Form Submission:", {
            name,
            email,
            message,
            timestamp: new Date().toISOString()
        });

        // Simulate a successful response
        return NextResponse.json({ success: true, message: "Message received" });
    } catch (error) {
        return NextResponse.json(
            { success: false, message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
