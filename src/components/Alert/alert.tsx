import React, {useState, useEffect} from 'react'
import classNames from 'classnames'
import Button, {ButtonType, unitedButtonProps} from "../Button/button";

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
                <div className='backgroundcolor'>
                <div className='flex-display'>
                    <span onClick={() => {
                        setShow(!show)
                    }} style={{cursor: 'pointer', float: 'left', verticalAlign: 'middle'}}>&times;</span>
                    <h1>{alertType}!</h1>
                </div>
                <div className='flex-display2'>
                    <p style={{display: 'inline-block',paddingLeft:'30px'}}>{children}</p></div>
                </div>
            </div>
        )
    } else {
        return null;
    }


}
Alert.defaultProps = {

    alertType: AlertType.Default
}

export default Alert