export function getPointingMethod() {
    return {
        pointingMethod: matchMedia('(any-pointer : fine)').matches ?
            'mouse' :
            'touch'
    }
}