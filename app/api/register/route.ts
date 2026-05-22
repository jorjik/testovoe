import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();
        console.log('Register API called with data:', JSON.stringify(data, null, 2));

        const SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

        if (!SCRIPT_URL) {
            console.error('GOOGLE_SCRIPT_URL is not defined in environment variables');
            return NextResponse.json({
                success: false,
                error: 'Configuration error: GOOGLE_SCRIPT_URL is not defined. Please add it to your environment variables.'
            }, { status: 500 });
        }

        console.log('Sending data to Google Script...');
        const response = await fetch(SCRIPT_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            redirect: 'follow'
        });

        const responseData = await response.json();
        console.log('Google Script response status:', response.status);
        console.log('Google Script response data:', responseData);

        if (!response.ok || responseData.result !== 'success') {
            return NextResponse.json({
                success: false,
                error: responseData.error || `Google Script error (Status ${response.status})`
            }, { status: 500 });
        }

        return NextResponse.json({ success: true, debug: responseData });
    } catch (err) {
        console.error('Registration error details:', err);
        return NextResponse.json({
            success: false,
            error: err instanceof Error ? err.message : 'Unknown error'
        }, { status: 500 });
    }
}
