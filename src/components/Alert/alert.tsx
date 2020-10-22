import React, {useState, useEffect} from 'react'
import classNames from 'classnames'
import {ButtonType, unitedButtonProps} from "../Button/button";

export enum AlertType {
    Success = 'success',
    Default = 'default',
    Danger = 'danger',
    Warning = 'warning'
}

interface AlertProps {
    className?: string;
    children: React.ReactNode;
    alertType?: AlertType;

}


const Alert: React.FC<AlertProps> = (props) => {


    const {
        alertType,
        className,
        children,
        ...restProps
    } = props

    const classes = classNames('alert', className, {
        [`alert-${alertType}`]: alertType,
    })

    const [show, setShow] = useState(true)

    if (show) {
        return (
            <div className={classes}  {...restProps}>
                <p style={{ display: 'inline-block', paddingLeft:'20px',paddingRight:'20px'}}>{children}</p>
                <span onClick={() => {
                    setShow(!show)
                }}  style={{ cursor: 'pointer', float: 'left', verticalAlign: 'middle'}} >&times;</span>
            </div>
        )
    } else {
        return null;
    }


}

export default Alert