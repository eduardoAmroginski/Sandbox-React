import React, { useState, useRef, useEffect } from 'react'
import styles from './Slide.module.css'

const Slide = ({slides}) => {

    const [active, setActive] = useState(0);
    const [position, setPosition] = useState(0);
    const contentRef = useRef();
    
    useEffect(() => {
        const {width} = contentRef.current.getBoundingClientRect();
        setPosition(-(active * width));
    }, [active])

    function slidePrev(){
        if(active > 0){
            setActive(active - 1);
        }
    }

    function slideNext(){
        if(active < slides.length - 1){
            setActive(active + 1);
        }
    }

    return (
        <section className={styles.container}>
            <div ref={contentRef} className={styles.content} style={{transform: `translateX(${position}px)`}}>
                {slides.map((slide) => (

                    <div className={styles.item} key={slide.id}>{slide.text}</div>

                ))}
            </div>
            <nav className={styles.nav}>
                <button disabled={active === 0 ? 'disabled' : ''} onClick={slidePrev}>Anterior</button>
                <button disabled={active === (slides.length - 1) ? 'disabled' : ''} onClick={slideNext}>Próximo</button>
            </nav>
        </section>
    )
}

export default Slide
