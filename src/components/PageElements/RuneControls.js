import styles from './RuneControls.module.scss';

const RuneControls = (props) => {

    const updateRuneCountHandler = (event, identifier) => {
        const runeCount = props.currentRune.count;

        if (identifier === 'increment') {
            if (runeCount >= 0 && runeCount < 99) {
                props.currentRune.count++;
            }
        }
        else if (identifier === 'decrement') {
            if (runeCount >= 1 && runeCount <= 99) {
                props.currentRune.count--;
            }
        }
        else if (identifier === 'onChange' || identifier === 'onBlur') {
            if (event.target.value > 99) {
                // TODO: trigger modal
                console.log('hold up slayer, you can\'t hold that many runes in-game');
            }
            else if (event.target.value < 0) {
                // TODO: trigger modal
                console.log('bank account balances are invalid. Try 0-99');
            }
            else if (event.target.value === "") {
                props.currentRune.count = 0;
            }
            else {
                props.currentRune.count = event.target.value;
            }
        }

        props.updateTotal();
    }

    return (
        <div>
            <button onClick={(e) => updateRuneCountHandler(e, 'decrement')}>-</button>
            <input className={styles.textCenter}
               type="number"
               inputMode="numeric"
               value={props.currentRune.count}
               min={0}
               max={99}
               onChange={(e) => updateRuneCountHandler(e, 'onChange')}
               onBlur={(e) => updateRuneCountHandler(e, 'onBlur')}>
            </input>
            <button onClick={(e) => updateRuneCountHandler(e, 'increment')}>+</button>
        </div>
    )
};

export default RuneControls;