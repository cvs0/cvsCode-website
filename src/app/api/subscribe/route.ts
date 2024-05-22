import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const emailsFilePath = path.resolve(process.cwd(), 'emails.json');

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email) {
            return new NextResponse("Email is required", { status: 400 });
        }

        let emails: string[] = [];

        if (fs.existsSync(emailsFilePath)) {
            const data = fs.readFileSync(emailsFilePath, 'utf8');
            emails = JSON.parse(data);
        } else {
            fs.writeFileSync(emailsFilePath, JSON.stringify(emails));
        }

        if (!emails.includes(email)) {
            emails.push(email);
            fs.writeFileSync(emailsFilePath, JSON.stringify(emails, null, 2));
        }

        return new NextResponse("Subscribed successfully", { status: 200 });
    } catch (error) {
        console.log("[SUBSCRIBE_POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
