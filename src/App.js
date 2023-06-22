import logo from './logo.svg';
import './App.css';
import NavBar from './/components/NavBar';
import Form from './components/Form';
import EmployeeList from './components/EmployeeList';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Form />
      <EmployeeList />
    </div>
  );
}

export default App;
