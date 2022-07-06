import styles from './StickyFooter.module.scss';
import {useState} from "react";
import InputElement from "./InputElement";

const StickyFooter = (props) => {

    const [currentLevel, setCurrentLevel] = useState(10);
    // let currentLevel = 161;
    const x = ((currentLevel+81)-92)*0.02;
    // console.log(x);
    const runeCost = Math.floor(((x+0.1)*((currentLevel+81)**2))+1);
    // console.log(runeCost);

    const onCustomInputElementEvent = (event) => {
        console.log('event');
        // setCurrentLevel(currentLevel + 1);
    }

    return (
        <footer className={styles.footer}>
            <InputElement
                type={"number"}
                inputMode={"numeric"}
                value={currentLevel}
                min={10}
                max={999}
                onCustomInputElementEvent={onCustomInputElementEvent}
            />
            {runeCost}
        </footer>
    );
};

export default StickyFooter;