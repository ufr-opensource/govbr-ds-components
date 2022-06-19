import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import { IconButton } from '../../../components/button/IconButton';

export default {
    title: 'Componentes/Botão com Icone',
    component: IconButton,
    argTypes: {
        children: {
            control: 'text',
        },

        variant: {
            options: ['primary', 'secondary', 'tertiary'],
            control: { type: 'radio' },
        },

        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'radio' },
        },
    },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
    <Wrapper>
        <IconButton {...args} />
    </Wrapper>
);

export const example = Template.bind({});
/* export const dark = Template.bind({});
export const dense = Template.bind({});
export const loading = Template.bind({});
export const block = Template.bind({}); */

example.storyName = 'Exemplo Isolado';
example.args = {
    variant: 'primary',
    children: 'TEXTO OPCIONAL',
    dark: false,
    block: false,
    size: 'medium' as unknown as undefined,
    disabled: false,
    loading: false,
    'aria-label': 'Botão demonstrativo com ícone',
    iconClassName: 'fa fa-plus',
};
