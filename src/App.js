import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import CustomNavbar from './components/CustomNav';
import CustomFooter from './components/CustomFooter';
import CustomWelcome from './components/CustomWelcome';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <><div className="App">
      <header className="App-header">
        <CustomNavbar className="navBar" claim="NavBar"/>
      <CustomWelcome className="welcome"/>
      <AllTheBooks/>
      </header>
      <CustomFooter className="footer fixed-bottom"/>
    </div></>
    
   
  )
}

export default App;