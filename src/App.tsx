import React from 'react';
import Button, {ButtonType , ButtonSize} from './components/Button/button'
import Alert, {AlertType} from "./components/Alert/alert";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">

          {/*<Button btnType ={ButtonType.Primary} size = {ButtonSize.Large}>Hello</Button>*/}
          {/*<Button btnType ={ButtonType.Primary}>Hello</Button>*/}
          {/*<Button btnType ={ButtonType.Primary} size = {ButtonSize.Small}>Hello</Button>*/}
          {/*<Button btnType ={ButtonType.Link} href ="http://www.baidu.com">baidu</Button>*/}
          {/*<Button btnType ={ButtonType.Round} disabled size = {ButtonSize.Large}>Hello</Button>*/}
          {/*<Button btnType ={ButtonType.Round} size = {ButtonSize.Small}>s u b m i t</Button>*/}

          {/*<Alert>This is Alert component with default style</Alert>*/}
          {/*<Alert alertType={AlertType.Success}></Alert>*/}
          {/*<Alert alertType={AlertType.Warning}></Alert>*/}
          {/*<Alert alertType={AlertType.Danger}></Alert>*/}
      </header>

        <Menu mode = 'vertical'>
            <MenuItem >first</MenuItem>
            <MenuItem >second</MenuItem>
            <MenuItem >third</MenuItem>
        </Menu>

        <Menu mode = 'horizontal'>
            <MenuItem >first</MenuItem>
            <MenuItem >second</MenuItem>
            <MenuItem >third</MenuItem>
        </Menu>
    </div>
  );
}

export default App;
