import React ,{ createContext,useState }from 'react'
import classNames from 'classnames'
import  {MenuItemProps} from "./menuItem";

type MenuMode = 'horizontal' |'vertical'

export interface MenuProps{
    activeIndex?: string;
    className?:string;
    mode?:MenuMode;
    style?:React.CSSProperties;
    onSelect?:(chosenIndex:string) => void;
}

interface IMenuContext{
    index:string;
    onSelect?:(chosenIndex:string) => void;
    mode?:MenuMode;

}

export const MenuContext = createContext<IMenuContext>({index:'0'})

const Menu: React.FC<MenuProps> = (props)=>{
    const{activeIndex,mode,style,className,children,onSelect} = props
    const[currentSpot,setSpot] = useState(activeIndex)

    const classes = classNames('menu',className,{
        'menu-vertical' :mode === 'vertical',
        'menu-horizontal ': mode!== 'vertical'
    })
    const handleClick = (index:string)=>{
        setSpot(index)
        console.log(index);
        if(onSelect){
            onSelect(index)
        }
    }

    const passedContext: IMenuContext ={
        index: currentSpot? currentSpot: '0',
        onSelect: handleClick,
        mode:mode,
    }
    const checkChildren = () =>{
        return React.Children.map(children,(child,index)=>{
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const {displayName} = childElement.type
            if(displayName==='MenuItem' || displayName==='SubMenu'){
                return React.cloneElement(childElement,{index: index.toString()})
            }
            else{
                console.error("The child added is not MenuItem component")
            }
        })

    }

    return(
        <ul className={classes} style={style}>
            <MenuContext.Provider value={passedContext}>
            {checkChildren()}
            </MenuContext.Provider>
        </ul>
    )

}

Menu.defaultProps = {
    activeIndex:'0',
    mode:'horizontal',

}

export default Menu