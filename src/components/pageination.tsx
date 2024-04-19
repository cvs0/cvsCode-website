"use client"

import { useRouter } from 'next/navigation';
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "./ui/pagination";

interface CustomPaginationProps {
    activePage: number
}

export const CustomPagination = ({
    activePage,
}: CustomPaginationProps) => {
    const router = useRouter();

    const goToPreviousPage = () => {
        if (activePage === 3) {
            router.push('/docs/installation')
        }

        if (activePage === 2) {
            router.push('/docs/getting-started')
        }
    };

    const goToNextPage = () => {
        if (activePage === 1) {
            router.push('/docs/installation')
        }

        if (activePage === 2) {
            router.push('/docs/code-examples')
        }
    }

    return (
        <div className="text-center">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" onClick={goToPreviousPage} />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/docs/getting-started" isActive={activePage === 1}>
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/docs/installation" isActive={activePage === 2}>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="/docs/code-examples" isActive={activePage === 3}>
                            3
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" onClick={goToNextPage}/>
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
