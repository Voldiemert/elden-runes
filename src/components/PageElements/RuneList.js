import styles from './RuneList.module.scss';

const RuneList = (props) => {
    return (
        <div>
            <div>
                {props.runeData.name}
            </div>
            <div>
                {props.runeData.value.toLocaleString()} Runes
            </div>
        </div>
    );
};

export default RuneList;