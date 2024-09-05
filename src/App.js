import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  return (
    <div className="App">
    <Provider store={appStore} >
         <Body/>
    </Provider>
    
        </div>
  );
}

export default App;
