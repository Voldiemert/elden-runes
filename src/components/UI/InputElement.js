import styles from "../PageElements/RuneControls.module.scss";

const InputElement = (props) => {

    return (
        <>
            <button onClick={(e) => props.onCustomInputElementEvent(e)}>-</button>
            <input className={styles.textCenter}
                   type={props.type}
                   inputMode={props.inputMode || null}
                   value={props.value}
                   min={props.min}
                   max={props.max}
                   onChange={(e) => props.onCustomInputElementEvent(e)}
                   onBlur={(e) => props.onCustomInputElementEvent(e)}>
            </input>
            <button onClick={(e) => props.onCustomInputElementEvent(e)}>+</button>
        </>
    );
};

export default InputElement;