import styles from './RuneList.module.scss';

const RuneList = (props) => {
    return (
        <div>
            <p>{props.runeData.name} {props.runeData.value}</p>
        </div>
    );
};

export default RuneList;