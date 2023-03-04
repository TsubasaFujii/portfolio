export function getPointingMethod(): { pointingMethod: 'mouse' | 'touch' } | undefined {
    if (typeof window !== undefined) {
        return {
            pointingMethod: window.matchMedia('(any-pointer : fine)').matches ?
                'mouse' :
                'touch'
        }
    }
}