import './App.css';

import { Provider } from 'react-redux'
import store from './configs/redux/store'
import Route from './configs/router/MainRoute'

function App() {
  return (
    <Provider store={store} >
      <Route />
    </Provider>
  );
}

export default App;
