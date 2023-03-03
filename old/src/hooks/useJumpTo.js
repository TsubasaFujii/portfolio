import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../js/window';

export function useJumpTo() {
    const navigate = useNavigate();

    function jumpTo(route) {
        navigate(route);
        scrollToTop();
    }
    
    return { jumpTo };
}