import React from 'react';
import Button, {ButtonType , ButtonSize} from './components/Button/button'

function App() {
  return (
    <div className="App">
      <header className="App-header">

          <Button btnType ={ButtonType.Primary} size = {ButtonSize.Large}>Hello</Button>
          <Button>Hello</Button>
          <Button btnType ={ButtonType.Primary} size = {ButtonSize.Small}>Hello</Button>
          <Button btnType ={ButtonType.Link} href ="http://www.baidu.com">baidu</Button>
      </header>
    </div>
  );
}

export default App;
