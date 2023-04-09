import { scrollToTop } from '@/utils/window';
import { useRouter } from 'next/router';

export function useLinkTo(): {
    linkTo: (route: string) => void;
} {
    const router = useRouter();

    function linkTo(route: string) {
        scrollToTop();
        router.push(route);
    }

    return { linkTo }
}