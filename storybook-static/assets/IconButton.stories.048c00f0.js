import{c as r,W as B}from"./Wrapper.57ff85df.js";import{j as e,a as c,F as m}from"./jsx-runtime.71805b72.js";import"./index.9f1ec18f.js";const n=o=>{const{variant:d,className:u,type:t,children:l,iconPosition:a,size:s,dark:f,block:y,loading:b,iconClassName:i,...x}=o,I=["br-button mt-sm-0 ml-sm-3",d,s!=="medium"?s:void 0,f&&"inverted",y&&"block",b&&"loading",u];return e("button",{type:t!=null?t:"button",className:r(I),...x,children:(a!=null?a:"left")==="left"?c(m,{children:[e("i",{className:r(["mr-1",i]),"aria-hidden":"true"}),l]}):c(m,{children:[l,e("i",{className:r(["ml-1",i]),"aria-hidden":"true"})]})})};try{n.displayName="IconButton",n.__docgenInfo={description:"",displayName:"IconButton",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},dark:{defaultValue:null,description:"",name:"dark",required:!1,type:{name:"boolean"}},block:{defaultValue:null,description:"",name:"block",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},iconClassName:{defaultValue:null,description:"",name:"iconClassName",required:!0,type:{name:"string"}},iconPosition:{defaultValue:null,description:"",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}}}},typeof STORYBOOK_REACT_CLASSES!="undefined"&&(STORYBOOK_REACT_CLASSES["src/components/button/IconButton.tsx#IconButton"]={docgenInfo:n.__docgenInfo,name:"IconButton",path:"src/components/button/IconButton.tsx#IconButton"})}catch{}var _={parameters:{storySource:{source:`import React from 'react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Wrapper } from '../../../Wrapper';
import { IconButton } from '../../../components/button/IconButton';

export default {
    title: 'Componentes/Bot\xE3o com Icone',
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
    'aria-label': 'Bot\xE3o demonstrativo com \xEDcone',
    iconClassName: 'fa fa-plus',
};
`,locationsMap:{example:{startLoc:{col:52,line:26},endLoc:{col:1,line:30},startBody:{col:52,line:26},endBody:{col:1,line:30}}}}},title:"Componentes/Bot\xE3o com Icone",component:n,argTypes:{children:{control:"text"},variant:{options:["primary","secondary","tertiary"],control:{type:"radio"}},size:{options:["small","medium","large"],control:{type:"radio"}}}};const g=o=>e(B,{children:e(n,{...o})}),p=g.bind({});p.storyName="Exemplo Isolado";p.args={variant:"primary",children:"TEXTO OPCIONAL",dark:!1,block:!1,size:"medium",disabled:!1,loading:!1,"aria-label":"Bot\xE3o demonstrativo com \xEDcone",iconClassName:"fa fa-plus"};const k=["example"];export{k as __namedExportsOrder,_ as default,p as example};
//# sourceMappingURL=IconButton.stories.048c00f0.js.map
