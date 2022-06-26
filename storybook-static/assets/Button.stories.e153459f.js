import{c as f,W as y}from"./Wrapper.57ff85df.js";import{j as o}from"./jsx-runtime.71805b72.js";import"./index.9f1ec18f.js";const n=e=>{const{variant:l,className:s,type:a,children:i,size:t,dark:d,block:m,loading:p,...c}=e,u=["br-button mt-sm-0 ml-sm-3",l,s,t!=="medium"?t:void 0,d&&"inverted",m&&"block",p&&"loading"];return o("button",{type:a!=null?a:"button",className:f(u),...c,children:i})};try{n.displayName="Button",n.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},dark:{defaultValue:null,description:"",name:"dark",required:!1,type:{name:"boolean"}},block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/button/Button.tsx#Button"]={docgenInfo:n.__docgenInfo,name:"Button",path:"src/components/button/Button.tsx#Button"})}catch{}var x={parameters:{storySource:{source:`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../../../components/button/Button';
import { Wrapper } from '../../../Wrapper';

export default {
    title: 'Componentes/Bot\xE3o',
    component: Button,
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
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
    <Wrapper>
        <Button {...args} />
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
    children: 'Simples',
    dark: false,
    block: false,
    size: 'medium' as unknown as undefined,
    disabled: false,
    loading: false,
};

/* block.storyName = 'Bloco';
block.args = {
    variant: 'secondary',
    children: 'Bloco',
    dark: false,
    block: true,
    size: 'medium',
    disabled: false,
    loading: false,
};

dense.storyName = 'Tamanho';
dense.args = {
    variant: 'primary',
    children: 'Grande',
    dark: false,
    block: false,
    size: 'large',
    disabled: false,
    loading: false,
};

loading.storyName = 'Carregando';
loading.args = {
    variant: 'primary',
    dark: false,
    block: false,
    size: 'medium',
    disabled: false,
    loading: true,
};

dark.storyName = 'Fundo escuro';
dark.args = {
    variant: 'primary',
    children: 'Fundo Escuro',
    dark: true,
    block: false,
    size: 'medium',
    disabled: false,
    loading: false,
}; */
`,locationsMap:{example:{startLoc:{col:48,line:26},endLoc:{col:1,line:30},startBody:{col:48,line:26},endBody:{col:1,line:30}}}}},title:"Componentes/Bot\xE3o",component:n,argTypes:{children:{control:"text"},variant:{options:["primary","secondary","tertiary"],control:{type:"radio"}},size:{options:["small","medium","large"],control:{type:"radio"}}}};const b=e=>o(y,{children:o(n,{...e})}),r=b.bind({});r.storyName="Exemplo Isolado";r.args={variant:"primary",children:"Simples",dark:!1,block:!1,size:"medium",disabled:!1,loading:!1};const v=["example"];export{v as __namedExportsOrder,x as default,r as example};
//# sourceMappingURL=Button.stories.e153459f.js.map
