import React ,{ createContext,useState }from 'react'
import classNames from 'classnames'

type MenuMode = 'horizontal' |'vertical'

export interface MenuProps{
    activeIndex?: number;
    className?:string;
    mode?:MenuMode;
    style?:React.CSSProperties;
    onSelect?:(chosenIndex:number) => void;
}

interface IMenuContext{
    index:number;
    onSelect?:(chosenIndex:number) => void;

}

export const MenuContext = createContext<IMenuContext>({index:0})

const Menu: React.FC<MenuProps> = (props)=>{
    const{activeIndex,mode,style,className,children,onSelect} = props
    const[currentSpot,setSpot] = useState(activeIndex)

    const classes = classNames('menu',className,{
        'menu-vertical' :mode === 'vertical'
    })
    const handleClick = (index:number)=>{
        setSpot(index)
        if(onSelect){
            onSelect(index)
        }
    }
    const passedContext: IMenuContext ={
        index: currentSpot? currentSpot: 0,
        onSelect: handleClick,
    }
    return(
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
            {children}
            </MenuContext.Provider>
        </ul>
    )

}

Menu.defaultProps = {
    activeIndex:0,
    mode:'horizontal',

}

export default Menu