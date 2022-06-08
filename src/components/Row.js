import RuneList from "./RuneList";
import RuneControls from "./RuneControls";

const Row = (props) => {
    return (
        <div>
            <RuneList runeData={props.currentRune} />
            <RuneControls />
        </div>
    );
};

export default Row;