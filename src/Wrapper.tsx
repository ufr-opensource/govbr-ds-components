import type { CSSProperties, FC, ReactNode } from 'react';

type Props = {
    children: ReactNode;
    dontCenter?: boolean;
};

const styles: CSSProperties = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: 'auto',
};

export const Wrapper: FC<Props> = ({ children, dontCenter }) => (
    <div>{dontCenter ? children : <div style={styles}>{children}</div>}</div>
);
