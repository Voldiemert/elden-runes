import './App.scss';
import Container from "./components/UI/Container";
import StickyFooter from "./components/UI/StickyFooter";
import {useState} from "react";

function App() {
    const [totalRunes, setTotalRunes] = useState(0);

    const updateTotalRunes = (total) => {
        setTotalRunes(total);
    };

    return (
        <div className="App">
            <header className="App-header">
                <p>Elden Runes</p>
            </header>
            <Container totalRunes={totalRunes} updateTotalRunes={updateTotalRunes} />
            <StickyFooter totalRunes={totalRunes} />
        </div>
    );
}

export default App;
