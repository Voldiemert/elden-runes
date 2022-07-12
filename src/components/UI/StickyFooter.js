import styles from './StickyFooter.module.scss';
import {useEffect, useLayoutEffect, useState} from "react";
import InputElement from "./InputElement";

const StickyFooter = (props) => {

    let [currentLevel, setCurrentLevel] = useState(10);
    const [levelUpCost, setLevelUpCost] = useState(663);
    const [heldRunesCount, setHeldRunesCount] = useState(0);

    const onCustomInputElementEvent = (event) => {
        if (event.target.innerText === '+') {
            if (currentLevel >= 10 && currentLevel < 999) {
                // TODO: Why does ++currentLevel work but doing setCurrentLevel(currentLevel + 1) cause it to not be right on some occasions.
                setCurrentLevel(++currentLevel);
            }
        }
        else if (event.target.innerText === '-') {
            if (currentLevel > 10 && currentLevel <= 999) {
                setCurrentLevel(--currentLevel);
            }
        }
        else if (event._reactName === 'onChange' || event._reactName === 'onBlur') {
            if (event.target.value > 999) {
                // TODO: trigger modal
                console.log('hold up slayer, you can\'t have that high of a level');
            }
            else if (event.target.value < 10) {
                // TODO: trigger modal
                console.log('you can\'t be a lower level than a Wrench character');
            }
            else if (event.target.value === "") {
                setCurrentLevel(10);
            }
            else {
                setCurrentLevel(parseInt(event.target.value));
            }
        }
    };

    const calculateRuneCost = () => {
        const x = ((currentLevel+81)-92)*0.02;
        setLevelUpCost(Math.floor(((x+0.1)*((currentLevel+81)**2))+1))
    };

    const onUpdateTotalRunes = (event) => {
        setHeldRunesCount(parseInt(event.target.value));
    };

    useEffect(() => {
        calculateRuneCost();
    }, [currentLevel, calculateRuneCost]);

    const runesDifference = heldRunesCount + props.totalRunes - levelUpCost;

    return (
        <footer className={styles.footer}>
            <div className={styles.flexContainer}>
                <div>
                    <div>
                        {/*TODO: should Current Level go in a <p> tag?*/}
                        Current Level:
                        <InputElement
                            type={"number"}
                            inputMode={"numeric"}
                            value={currentLevel}
                            min={10}
                            max={999}
                            onCustomInputElementEvent={onCustomInputElementEvent}/>
                    </div>
                    <div>
                        {/*TODO: should this go in a <p> tag?*/}
                        Level Up Cost: {levelUpCost}
                    </div>
                </div>
                <div>
                    <div>
                        Runes Held:
                        <InputElement
                             type={"number"}
                             inputMode={"numeric"}
                             value={heldRunesCount}
                             min={0}
                             hideButtons={true}
                             onCustomInputElementEvent={onUpdateTotalRunes}/>
                    </div>
                    <div className={runesDifference > 0 ? styles.positiveTextColor : styles.negativeTextColor}>
                        Runes Difference: {runesDifference > 0 && <span>+</span>}{runesDifference}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default StickyFooter;