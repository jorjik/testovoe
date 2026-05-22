import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        console.log('Register API called with data:', JSON.stringify(data, null, 2));

        const SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

        if (!SCRIPT_URL) {
            console.warn('GOOGLE_SCRIPT_URL is not defined in environment variables');
            return NextResponse.json({
                success: true,
                message: 'Data processed locally, but Google Script URL is missing.'
            });
        }

        console.log('Sending data to Google Script...');
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            redirect: 'follow'
        });

        const responseText = await response.text();
        console.log('Google Script response status:', response.status);
        console.log('Google Script response text:', responseText);

        if (!response.ok) {
            throw new Error(`Google Script returned ${response.status}: ${responseText}`);
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Registration error details:', err);
        return NextResponse.json({
            success: false,
            error: err instanceof Error ? err.message : 'Unknown error'
        }, { status: 500 });
    }
}

