export async function GET(request) {
    return new Response('Hello!')
}


/*import { NextResponse } from 'next/server';
import Airtable from 'airtable';

export async function POST(request) {
    try {
        const airtableData = await getAirtableData({
        apiKey: process.env.AIRTABLE_TOKEN
    });
        return NextResponse.json({ result: airtableData });
    } catch (error) {
        console.error('Error fetching Airtable data:', error);
        return NextResponse.error(new Error('Failed to fetch Airtable data'));
    }
}*/
