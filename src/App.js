import './App.scss';
import Container from "./components/UI/Container";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Elden Runes</p>
            </header>
            <Container />
            <footer className="App-footer">
                <div>
                    <p>sticky footer of some sort with a summary?</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
