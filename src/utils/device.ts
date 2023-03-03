export function getPointingMethod(): { pointingMethod: 'mouse' | 'touch' } {
    return {
        pointingMethod: matchMedia('(any-pointer : fine)').matches ?
            'mouse' :
            'touch'
    }
}