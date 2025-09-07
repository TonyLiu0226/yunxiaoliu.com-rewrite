import styles from "../styles/Header.module.css"
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Header = (props) => {
    console.log(props.var);

    //initialize particles
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const colors = ['#9a3412', '#99f6e4', '#065f46', '#fcd34d', '#1d4ed8', '#ef4444', '#86198f', '#a78bfa'];

    return(
        <div className={styles.header}>
            <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                background: {
                    opacity: {
                        value: 0.25
                    }
                
                },
                fpsLimit: 1000,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: colors
                    },
                    links: {
                        enable: false,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 10,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                        value: 75,
                    },
                    opacity: {
                        value: 0.25,
                    },
                    shape: {
                        type: "square",
                    },
                    size: {
                        value: { min: 3, max: 6 }
                    }
                },
                detectRetina: true,
            }}
        ></Particles>
            <h1 className="title z-100">Yunxiao (Tony) Liu</h1>
            <p className="subtitle z-100">UBC CPEN Student | Aspiring Software Developer</p>
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