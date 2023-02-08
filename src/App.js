import {carServ} from "./cervice/Urls";
import {Form} from "./components/Form";
import {Cars} from "./components/Cars";

function App() {
    // carServ.getAll().then(({data})=> console.log(data))
    return (
        <div className="App">
<Form/>
<Cars/>
        </div>
    );
}

export default App;
