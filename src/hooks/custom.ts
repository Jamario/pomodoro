import { useRef, useEffect } from "react";

export function usePrevious(previousValue: number ){
    const ref = useRef<number | undefined>();

    useEffect(() => {
        ref.current = previousValue
    }, [previousValue]);

    return ref.current;
}