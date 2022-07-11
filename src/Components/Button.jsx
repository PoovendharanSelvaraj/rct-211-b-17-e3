import styles from "./Button.module.css"

export const Button = ({ colorScheme, variant, size }) => {

  return (
     <div>
      <h1 className={colorScheme.red?styles.red:styles.white} >ColorScheme Testing {colorScheme.red} !!!</h1>
      <p className={size.large?styles.lg:styles.md} >Size : {size.large}</p>
      <button className={variant.ghost?styles.ghost:styles.solid} >Button</button>
      
     </div>
    );
};
