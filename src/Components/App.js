import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { MenuProvider } from "./MenuContext";

import Category from "./Category";
import Menu from "./Menu";

function App() {
  return (
    <div>
      <MenuProvider>
        <Category />
        <Menu />
      </MenuProvider>
    </div>
  );
}

export default App;
