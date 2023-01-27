
import './App.css';
import {Route, Routes} from "react-router-dom";
import {TodosPage} from "./page/TodosPage";
import {AlbumsPage} from "./page/AlbumsPage";
import {CommentsPage} from "./page/CommentsPage";
import {MainLayouts} from "./layouts/MainLayouts";
import {PostsPage} from "./page/PostsPage";

function App() {
  return (

    <div className="App">

<Routes>

    <Route path={'/'} element={<MainLayouts/>}>
        <Route index element={<TodosPage/>}/>
        <Route path={'albums'} element={<AlbumsPage/>}/>
        <Route path={'comments'} element={<CommentsPage/>}/>
            <Route path={'comments/:postsId'}element={<PostsPage/>}/>

    </Route>

</Routes>
    </div>
  );
}

export default App;
