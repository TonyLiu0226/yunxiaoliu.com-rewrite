import styles from "../styles/Header.module.css"

const Header = (props) => {
    console.log(props.var);
    return(
        <div className={styles.header}>
            <h1 className="title">Yunxiao (Tony) Liu</h1>
            <p className="subtitle">UBC CPEN Student | Aspiring Software Developer</p>
            {/* styled jsx */}
            <style jsx>
                {`
                    .title {
                        color: navy;
                        font-size: clamp(48px, 5vw, 80px);
                        font-family: var(--font-mono);
                        text-align:center;
                        padding-top:30px;
                    }
                    .subtitle {
                        color: ${props.var > 50 ? "red" : "green"};
                        font-size: clmap(25px, 2.5vw, 44px);
                        font-family: var(--font-mono);
                        text-align:center;
                        padding-top:10px;
                    }
                `}
            </style>
        </div>
    )
}
export default Header