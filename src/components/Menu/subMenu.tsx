import React, {createContext, FunctionComponentElement, useContext, useState} from 'react'
import classNames from 'classnames'
import {MenuContext} from "./menu";
import {MenuItemProps} from "./menuItem";

export interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
}

const SubMenu: React.FC<SubMenuProps>=({index, children,title,className})=>{
    const context = useContext(MenuContext);
    const classes = classNames('menuItem submenu-item', className,{
        'is-active': context.index=== index
    })
    const [menuOpen, setMenuOpen] = useState(false);

    let timer:any
    const handleMouse = (e:React.MouseEvent,toggle:boolean)=>{
        e.preventDefault();
        timer = setTimeout(()=>{
            setMenuOpen(toggle);
        },300)
    }
    const handleClick = (e:React.MouseEvent)=>{
        e.preventDefault()
        setMenuOpen(!menuOpen);
    }

    const clickEvents = context.mode ==='vertical' ?{
        onClick:handleClick
    }:{}

    const hoverEvents = context.mode !=='vertical'?{
        onMouseEnter:(e: React.MouseEvent )=>{ handleMouse(e,true)},
        onMouseLeave:(e: React.MouseEvent )=>{ handleMouse(e,false)}
    }:{}

    const subMenuClasses = classNames('Gary-submenu',{
        'menu-opened' :menuOpen
    })

    const displayChildren =() =>{
        const childrenComponent =  React.Children.map(children,(child,i)=>{
            const element = child as FunctionComponentElement<MenuItemProps>
            if(element.type.displayName==='MenuItem'){
                return React.cloneElement(element,{index: `${index}-${i}`});
            }else{
            console.error("input element is not subMenu component!");
            }
            })
        return (
            <ul className={subMenuClasses} style={{listStyle:'none'}}>
                {childrenComponent}
            </ul>
        )
    }

    return(<li key={index} className={classes} {...hoverEvents}>
        <div className="submenu-item" {...clickEvents}>
            {title}
        </div>
        {displayChildren()}
    </li>);
}

SubMenu.displayName='SubMenu'
export default SubMenu;
