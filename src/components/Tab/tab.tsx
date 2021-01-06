import React ,{ createContext,useState }from 'react'
import classNames from 'classnames'

type TabMode = 'horizontal' |'vertical'

export interface TabProps{
    activeIndex?: number;
    className?:string;
    mode?:TabMode;
    style?:React.CSSProperties;
    onSelect?:(chosenIndex:number) => void;
}

const Tab: React.FC<TabProps> = (props)=>{
    const{activeIndex,mode,style,className,children,onSelect} = props
    return<div>

    </div>;
}