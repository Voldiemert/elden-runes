import styles from "./InputElement.module.scss";

const InputElement = (props) => {
    
    const hideButtons = !props.hideButtons || false;

    return (
        <>
            {hideButtons && <div className={styles.fauxButton} onClick={(e) => props.onCustomInputElementEvent(e)}>-</div>}
            {/*{hideButtons && <button onClick={(e) => props.onCustomInputElementEvent(e)}>-</button>}*/}
            <input className={`${styles.textCenter} ${styles.maxWidth} ${props.inputLeftMargin ? styles.leftMargin : ''}`}
                   type={props.type}
                   inputMode={props.inputMode || null}
                   value={props.value}
                   min={props.min}
                   max={props.max}
                   onChange={(e) => props.onCustomInputElementEvent(e)}
                   onBlur={(e) => props.onCustomInputElementEvent(e)}>
            </input>
            {hideButtons && <div className={styles.fauxButton} onClick={(e) => props.onCustomInputElementEvent(e)}>+</div>}
            {/*{hideButtons && <button onClick={(e) => props.onCustomInputElementEvent(e)}>+</button>}*/}
        </>
    );
};

export default InputElement;