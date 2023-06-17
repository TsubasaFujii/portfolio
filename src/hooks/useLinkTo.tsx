import { scrollToTop } from '@/utils/window';
import { useRouter } from 'next/router';

export function useLinkTo() {
    const router = useRouter();

    async function linkTo(route: string) {
        await router.push(route);
        scrollToTop();
    }

    return { linkTo }
}