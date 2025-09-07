import React from "react"
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
import {useState, useEffect, useRef} from 'react';

//stuff that should be on EVERY page
const Layout = ({children}) => { //children refers to anything inside the component
  const [x, setX] = useState(0);
  useEffect(() => {
  setX(Math.random() * 100)
  }, []);

  //audio functions
  const audioRef = useRef(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play();
      }
    };

    // Call the playAudio function when the component mounts
    playAudio();

    // Cleanup function
    return () => {
      audioRef.current.pause();
    };
  }, []);

    return(
        <>
        <audio ref={audioRef} controls hidden>
        <source src="/TS.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
            <Nav />
            <Header var={x}/>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}

export default Layout