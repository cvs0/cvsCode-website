"use client"

import { getLatestVersion } from "@/lib/constants";
import { Skeleton } from "./ui/skeleton";

interface BoldHeadingProps {
    heading: string;
    version?: boolean;
    isLoading?: boolean
}

export default function BoldHeading
({
    heading,
    version,
    isLoading
}: BoldHeadingProps) {
    return (
        <h1 className="ml-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center animate-in slide-in-from-top">
            {isLoading ? (
                <Skeleton className="inline-block h-20 w-60" />
            ) : (
                <>
                    {heading} {version && (<span className="text-blue-500 underline">{getLatestVersion()}</span>)}
                </>
            )}
        </h1>
    )
}