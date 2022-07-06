import './App.scss';
import Container from "./components/UI/Container";
import StickyFooter from "./components/UI/StickyFooter";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>Elden Runes</p>
            </header>
            <Container />
            <StickyFooter />
        </div>
    );
}

export default App;
