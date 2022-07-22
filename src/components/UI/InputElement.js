import styles from "./InputElement.module.scss";

const InputElement = (props) => {
    
    const hideButtons = !props.hideButtons || false;

    return (
        <div className={styles.flexContainer}>
            {hideButtons && <div className={styles.fauxButton} onClick={(e) => props.onCustomInputElementEvent(e)}>-</div>}
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
        </div>
    );
};

export default InputElement;