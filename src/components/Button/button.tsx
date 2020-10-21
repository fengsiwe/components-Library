import React from 'react'
import className from 'classnames'

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary='primary',
    Default='default',
    Danger='danger',
    Link='link'
}

interface ButtonProps{
    className?:string;
    disabled?:boolean;
    size?:ButtonSize;
    btnType?:ButtonType;
    children:React.ReactNode;
    href?: string;
}

const Button:React.FC<ButtonProps> = (props) =>{
    const {disabled,
           btnType,
        size,
        children,
        href,} =props

    const classes = className('btn',{
        [`btn-${btnType}`] :btnType,
        [`btn-${size}`] :size,
        'disabled':(btnType===ButtonType.Link)&&disabled
    })

    if(btnType === ButtonType.Link && href){
        return(
            <a className ={classes} href={href}>{children}</a>
        )
    }
    else {
        return <button className ={classes} disabled={disabled}>{children}</button>
    }

}

Button.defaultProps = {
    disabled:false,
    btnType: ButtonType.Default
}

export default Button