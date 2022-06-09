import RuneList from "./RuneList";
import RuneControls from "./RuneControls";
import styles from './Row.module.scss'

const Row = (props) => {
    return (
        <div className={styles.row}>
            <RuneList runeData={props.currentRune} />
            <RuneControls />
        </div>
    );
};

export default Row;