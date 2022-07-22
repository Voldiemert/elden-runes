import styles from './RuneControls.module.scss';
import InputElement from "../UI/InputElement";

const RuneControls = (props) => {

    const updateRuneCountHandler = (event) => {
        const runeCount = props.currentRune.count;

        if (event.target.innerText === '+') {
            if (runeCount >= 0 && runeCount < 99) {
                // TODO: Modify state value with useState instead of directly for all currentRune.count
                props.currentRune.count++;
            }
        }
        else if (event.target.innerText === '-') {
            if (runeCount >= 1 && runeCount <= 99) {
                props.currentRune.count--;
            }
        }
        else if (event._reactName === 'onChange' || event._reactName === 'onBlur') {
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
                props.currentRune.count = parseInt(event.target.value);
            }
        }

        props.updateTotal();
    }

    return (
        <div>
            <InputElement
                type={"number"}
                inputMode={"numeric"}
                value={props.currentRune.count}
                onCustomInputElementEvent={updateRuneCountHandler} />
        </div>
    )
};

export default RuneControls;