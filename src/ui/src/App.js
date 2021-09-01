import logo from './logo.svg';
import './App.css';

import UsersTable from './Components/UsersTable'
import ItemList from './Components/ItemList'

function App() {
  return (
    <div className="App">
      <UsersTable />
      <ItemList/>
    </div>
  );
}

export default App;
