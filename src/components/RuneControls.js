import styles from './RuneControls.module.scss';

const RuneControls = () => {
    let runeCount = 0;

    return (
        <div>
            <button>decrement</button>
            <input type="text" inputMode="numeric" value={runeCount} min={0} max={999}></input>
            <button>increment</button>
        </div>
    )
};

export default RuneControls;