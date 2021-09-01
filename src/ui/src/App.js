import UsersTable from './Components/UsersTable'
import ItemList from './Components/ItemList'

import './App.css'

function App() {
  return (
    <div className="app">
      <div className="App-wrapper">
        <UsersTable />
        <ItemList/>
      </div>
    </div>
  );
}

export default App;
