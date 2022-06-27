import { useEffect, useRef, useState } from 'react';

export const useDSScript = <C extends DefaultDSClass, E extends HTMLElement>(
    elClassname: string,
    ComponentClass: C
) => {
    const [component, setComponent] = useState<C | null>(null);
    const [id] = useState<string>(Math.random().toString(36).slice(2, 7));

    const ref = useRef<E>(null);

    useEffect(() => {
        if (ref && ComponentClass) {
            // @ts-ignore
            setComponent(new ComponentClass(elClassname, ref.current, id));
        }
    }, [ComponentClass, ref]);

    return { ref, component, id };
};
