import CakeContainer from "./Component/HooksCakeContainer";
import {Provider} from 'react-redux'
import Store from "./Component/redux/store";



function App() {


  return (
    <Provider store={Store} >
    <div >
    
  <CakeContainer/>

    </div>
  </Provider>

  );
}

export default App;
