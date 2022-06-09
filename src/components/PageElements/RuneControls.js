import {useState} from "react";
import styles from './RuneControls.module.scss';

const RuneControls = (props) => {
    let [runeCount, setRuneCount] = useState(0);

    const updateRuneCountHandler = (event) => {
        if (event.target.value > 99) {
            console.log('hold up slayer, you can\'t hold that many runes in-game');
        }
        else if (event.target.value < 0) {
            console.log('bank account balances are invalid. Try 0-99');
        }
        else if (event.target.value === "") {
            setRuneCount(0);
        }
        else {
            setRuneCount(event.target.value);
        }
    }

    const decrementRuneCountHandler = () => {
        if (runeCount >= 1 && runeCount <= 99) {
            setRuneCount(--runeCount);
        }
    }

    const incrementRuneCountHandler = () => {
        if (runeCount >= 0 && runeCount < 99) {
            setRuneCount(++runeCount);
        }
    }

    return (
        <div>
            <button onClick={decrementRuneCountHandler}>-</button>
            <input className={styles.textCenter}
               type="number"
               inputMode="numeric"
               value={runeCount}
               min={0}
               max={99}
               onChange={updateRuneCountHandler}
               onBlur={updateRuneCountHandler}>
            </input>
            <button onClick={incrementRuneCountHandler}>+</button>
        </div>
    )
};

export default RuneControls;