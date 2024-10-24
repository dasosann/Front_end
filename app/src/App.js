import logo from './logo.svg';
import './App.css';
import LoginHeader from './page/LoginHeader';
import LoginPage from './page/LoginPage';
import MainHeader from './page/MainHeader';
import MainPage from './page/MainPage';
import RegisterHeader from './page/RegisterHeader';
import RegisterPage from './page/RegisterPage';

function App() {
  return (
    <div className='app-background'>
      <MainHeader/>
      <MainPage/>
      {/* <LoginHeader/>
      <LoginPage/> */}
    </div>
  );
}

export default App;
