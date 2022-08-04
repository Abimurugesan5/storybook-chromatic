import React from "react";
import IDFileUpload from "../components/IDFileUpload";
import { ComponentStory, ComponentMeta } from '@storybook/react';
export default{
    title:"Component/IDFileUpload",
    component:IDFileUpload,
    argTypes:{
        backgroundColor:{control:'color'},
    },

}as ComponentMeta<typeof IDFileUpload>;
const Template:ComponentStory<typeof IDFileUpload>=(args)=><IDFileUpload{...args}/>;
export const Primary = Template.bind({});
Primary.args= {
   name:'file',
   multiple:true,
   action:""
};