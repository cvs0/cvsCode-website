interface BoldHeadingProps {
    heading: string;
    version?: boolean;
}

export default function BoldHeading
({
    heading,
    version
}: BoldHeadingProps) {
    return (
        <h1 className="ml-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
            {heading} {version && (<span className="text-blue-500 underline">0.4</span>)}
        </h1>
    )
}