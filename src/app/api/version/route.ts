import { getLatestVersion } from "@/lib/constants";
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET(
    req: Request
) {
    try {
        const user = currentUser()

        if (!user) {
            return new NextResponse("Unauthorized", { status: 401 })
        }
        
        return NextResponse.json(getLatestVersion())
    } catch (error) {
        console.log("[VERSION_GET]", error)
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}