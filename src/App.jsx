import "./App.css";
import { Detalis } from "./components/Details";
import { List } from "./components/List";
import UsersProvider from "./context/UsersProvider";

function App() {
  return (
    <UsersProvider>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div>
            <List />
          </div>
          <div>
            <Detalis />
          </div>
        </div>
      </div>
    </UsersProvider>
  );
}

export default App;