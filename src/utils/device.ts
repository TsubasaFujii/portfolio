export function isMouseAvailable(): boolean | undefined {
    if (typeof window !== undefined) {
        // True: mouse
        // False: touch
        return window.matchMedia('(any-pointer : fine)').matches;
    }
}