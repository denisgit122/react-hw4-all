import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {TodosPage} from "./page/TodosPage";
import {AlbumsPage} from "./page/AlbumsPage";
import {CommentsPage} from "./page/CommentsPage";

function App() {
  return (

    <div className="App">
<Routes>
  <Route path={'/'} element={<TodosPage/>}/>
  <Route path={'/albums'} element={<AlbumsPage/>}/>
  <Route path={'/comments'} element={<CommentsPage/>}/>
</Routes>
    </div>
  );
}

export default App;
