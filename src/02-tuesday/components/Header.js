import styles from "./Header.module.css";

function Header(props) {
  // props
  /*
  {
    title: "Harry Potter App";
  }
  */
  return (
    <header>
      <div className={styles.App}>{props.title}</div>
    </header>
  );
}

export default Header;
