import MainLayout from 'layouts/main';
import { BrowserRouter } from 'react-router-dom';
import store from 'globalState';
import { Provider } from 'react-redux';
// import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
        <MainLayout />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
