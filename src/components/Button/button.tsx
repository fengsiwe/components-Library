import React from 'react'
import classNames from 'classnames'

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary='primary',
    Default='default',
    Danger='danger',
    Link='link',
    Round='round'
}

interface ButtonProps{
    className?:string;
    disabled?:boolean;
    size?:ButtonSize;
    btnType?:ButtonType;
    children:React.ReactNode;
    href?: string;
}

type nativeButtonProps = React.ButtonHTMLattributes<HTMLElement> & ButtonProps
type anchorButtonProps = React.AnchorHTMLattributes<HTMLElement> & ButtonProps

export type unitedButtonProps = Partial<nativeButtonProps & anchorButtonProps>

const Button:React.FC<unitedButtonProps> = (props) =>{


    const {disabled,
           btnType,
        className,
        size,
        children,
        href,
        ...restProps} =props

    const classes = classNames('btn',className,{
        [`btn-${btnType}`] :btnType,
        [`btn-${size}`] :size,
        'disabled':(btnType===ButtonType.Link)&&disabled
    })

    if(btnType === ButtonType.Link && href){
        return(
            <a className ={classes} href={href} {...restProps}>{children}</a>
        )
    }
    else {
        return <button className ={classes} disabled={disabled} {...restProps}>{children}</button>
    }

}

Button.defaultProps = {
    disabled:false,
    btnType: ButtonType.Default
}

export default Button