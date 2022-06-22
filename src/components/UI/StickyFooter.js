import styles from './StickyFooter.module.scss';

const StickyFooter = (props) => {
    // x = ((Lvl+81)-92)*0.02
    // x cannot be below 0, so change it to 0 if the formula resolves to below 0
    // Rune Cost = ((x+0.1)*((Lvl+81)^2))+1
    // The resulting number is always rounded down

    return (
        <footer className={styles.footer}>
            {0}
        </footer>
    );
};

export default StickyFooter;