import { scrollToTop } from '@/utils/window';
import { useRouter } from 'next/router';

export function useJumpTo() {
    const router = useRouter();

    function jumpTo(route: string) {
        router.push(route);
        scrollToTop();
    }

    return { jumpTo };
}