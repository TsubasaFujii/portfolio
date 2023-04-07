import { scrollToTop } from '@/utils/window';
import { useRouter } from 'next/router';

export function useJumpTo(): {
    jumpTo: (route: string) => void;
    currentPath: string;
} {
    const router = useRouter();

    function jumpTo(route: string) {
        router.push(route);
        scrollToTop();
    }

    return {
        jumpTo,
        currentPath: router.pathname
    };
}