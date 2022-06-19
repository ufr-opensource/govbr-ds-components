/* eslint-disable react/button-has-type */
import type { FC, HTMLProps } from 'react';
import type { ThemeColorName } from '../../types/colors';
import { cn } from '../../utils/classname';

type Props = HTMLProps<HTMLButtonElement> & {
    variant: ThemeColorName;
    dark?: boolean;
    block?: boolean;
    size?: 'small' | 'large' | 'medium';
    loading?: boolean;
    'aria-label': string;
    iconClassName: string;
    iconPosition?: 'left' | 'right';
};

export const IconButton: FC<Props> = (props) => {
    const {
        variant,
        className,
        type,
        children,
        iconPosition,
        size,
        dark,
        block,
        loading,
        iconClassName,
        ...restOfProps
    } = props;

    const classnames = [
        'br-button mt-sm-0 ml-sm-3',
        variant,
        size !== 'medium' ? size : undefined,
        dark && 'inverted',
        block && 'block',
        loading && 'loading',
        className,
    ];

    return (
        <button
            type={(type as 'button' | 'submit' | 'reset') ?? 'button'}
            className={cn(classnames)}
            {...restOfProps}
        >
            {(iconPosition ?? 'left') === 'left' ? (
                <>
                    <i className={cn(['mr-1', iconClassName])} aria-hidden="true" />
                    {children}
                </>
            ) : (
                <>
                    {children}
                    <i className={cn(['ml-1', iconClassName])} aria-hidden="true" />
                </>
            )}
        </button>
    );
};
