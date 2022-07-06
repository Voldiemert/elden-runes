import styles from './Container.module.scss';
import Row from "./Row";
import {useState} from "react";

const Container = (props) => {

    // const [total, setTotal] = useState(0);
    const [runes, setRunes] = useState([
        {name: 'Golden Rune [1]', value: 200, count: 0},
        {name: 'Golden Rune [2]', value: 400, count: 0},
        {name: 'Golden Rune [3]', value: 800, count: 0},
        {name: 'Golden Rune [4]', value: 1200, count: 0},
        {name: 'Golden Rune [5]', value: 1600, count: 0},
        {name: 'Golden Rune [6]', value: 2000, count: 0},
        {name: 'Golden Rune [7]', value: 2500, count: 0},
        {name: 'Golden Rune [8]', value: 3000, count: 0},
        {name: 'Golden Rune [9]', value: 3800, count: 0},
        {name: 'Golden Rune [10]', value: 5000, count: 0},
        {name: 'Golden Rune [11]', value: 6250, count: 0},
        {name: 'Golden Rune [12]', value: 7500, count: 0},
        {name: 'Golden Rune [13]', value: 10000, count: 0},
        {name: 'Numen\'s Rune', value: 12500, count: 0},
        {name: 'Hero\'s Rune [1]', value: 15000, count: 0},
        {name: 'Hero\'s Rune [2]', value: 20000, count: 0},
        {name: 'Hero\'s Rune [3]', value: 25000, count: 0},
        {name: 'Hero\'s Rune [4]', value: 30000, count: 0},
        {name: 'Hero\'s Rune [5]', value: 35000, count: 0},
        {name: 'Lord\'s Rune', value: 50000, count: 0}
    ]);

    // TODO: figure out a correct way to manage the state of runes list so the total calcs correctly
    const computeTotal = () => {
        const _total = runes.reduce((accumulator, rune) => {
            return accumulator + (rune.value * rune.count);
        }, 0);

        props.updateTotalRunes(_total);
    }

    return (
        <div className={styles.container}>
            {props.totalRunes}
            {runes.map((rune, index) => {
                return <Row index={index} key={rune.name} currentRune={rune} updateTotal={computeTotal}/>
            })}
        </div>
    );
};

export default Container;