import "./App.css";
import FormInput from "./components/FormInput.js";
import List from "./components/List.js";
import Footer from "./components/Footer.js";
import { DataProvider } from "./components/DataProvider";

function App() {
    return (
        <DataProvider>
            <div className="container">
                <div className="app">
                    <h1>Task List</h1>
                    <FormInput />
                    <List />
                    <Footer />
                </div>
            </div>
        </DataProvider>
    );
}

export default App;
