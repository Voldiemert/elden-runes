import RuneList from "../PageElements/RuneList";
import RuneControls from "../PageElements/RuneControls";
import styles from './Row.module.scss'

const Row = (props) => {
    return (
        <div className={styles.row}>
            <RuneList runeData={props.currentRune} />
            <RuneControls runeValue={props.currentRune.value} />
        </div>
    );
};

export default Row;