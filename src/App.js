
import "./App.css";
// import { useDispatch } from "react-redux";
import Header from "./components/Header";
import Input from "./components/Input";
// import TodoList from "./components/TodoList";

const App = () => {
  //   const dispatch = useDispatch();
  return (
    <div>
      <Header/>
      <main>
        <Input/>
      </main>
    
    </div>
  );
};

export default App;
