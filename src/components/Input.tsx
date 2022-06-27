import type { FC, HTMLProps } from 'react';
import { BRInput } from '@govbr-ds/core/dist/core';
import { useDSScript } from '../hooks/useDSScript';
import { cn } from '../utils/classname';

type Props = HTMLProps<HTMLInputElement> & {
    icon?: string;
    size?: 'small' | 'large' | 'medium';
    label?: string;
    labelRight?: boolean;
    auxText?: string;
    highlight?: boolean;
    placeholder?: string;
    wrapperClassname?: string;
    button?: {
        icon: string;
        onClick: () => void;
    };
    validation?: {
        status: 'success' | 'warning' | 'error' | 'info';
        message: string;
    };
};

export const Input: FC<Props> = (props) => {
    const {
        icon,
        size,
        label,
        labelRight,
        auxText,
        highlight,
        button,
        validation,
        placeholder,
        className,
        wrapperClassname,
        ...restOfProps
    } = props;

    const { id } = useDSScript('br-input', BRInput);

    const wrapperClassnames = ['br-input', wrapperClassname, size !== 'medium' ? size : undefined];

    return (
        <div className={cn(wrapperClassnames)}>
            {label && <label htmlFor={id}>{label}</label>}

            <div className="input-group">
                {icon && (
                    <div className="input-icon">
                        <i className={icon} aria-hidden="true" />
                    </div>
                )}

                <input id={id} type="text" placeholder={placeholder} />
            </div>
        </div>
    );
};
