import './App.css';
import {Button} from './components/button/Button';
import User from './components/user/User';
import  Example  from './components/example/Example';
import Header from './components/header/Header';
import Text from './components/text/Text'


function App() {
  const navbar=['HOME','ABOUT US','CONTACTS']

  return (
    <>

      <Header navbar  ={navbar}/>
      <Text>
          <h1>I like <span>apples</span></h1>
      </Text>

      {/* <Button text={'Open'}/>
      <Button text={'Close'}/>
      <Button text={'Remake'}/>
      <User name={'Asyl'} age={19}/>
      <Example>
        <div>
          <h1 className='textBlue'>Hello</h1>
          <p style={{
            color: 'red',
            fontSize: '20px'
          }}>
            Asyl  
          </p>
        </div>
      </Example> */}
    </>
  );
}

export default App;


