import { Button } from "antd";
import React from "react";
 import Styled from 'styled-components';
import classes from '../Styles/ButtonStyle.module.css';
// import { IDAddJob } from "../asserts/Icons/IDButtons.icon";


interface ButtonProps {
    IconNode :React.ReactNode,
    text : String,
    disabledStatus : boolean,
    primary?: boolean;
    label: string;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;

}




export const IDButton =({
   
   primary=false,
   size='medium',
   backgroundColor,
   label,
   IconNode,
   text,   
   disabledStatus,
   ...props
}:ButtonProps)=>{
    const mode=primary? 'storybook-button-primary':'storybook-button--secondary';
    return(
        <Button className={classes.contentHeaderBtn} disabled= {disabledStatus} 
        style={{ backgroundColor }}
        {...props}
        >
           {label} 
        </Button>
    )
}


   
