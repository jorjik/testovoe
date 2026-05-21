import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const data = await request.json();

        // In production, define this in .env.local
        const SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

        if (SCRIPT_URL) {
            await fetch(SCRIPT_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Registration error:', err);
        return NextResponse.json({ success: false }, { status: 500 });
    }
}
