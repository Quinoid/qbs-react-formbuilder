export declare function debounce<F extends (...args: any[]) => any>(fn: F, delay: number): (...args: Parameters<F>) => void;
