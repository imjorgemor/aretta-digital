import { useRef, useState, useEffect } from "react";

export const About = () => {
    const [show, setShow] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            setShow(entries[0].isIntersecting)
        });
        observer.observe(elementRef.current)
    }, []);


    return (
        <div
            id="about"
            className="app-container background--blue relative"
        >
            <section
                className='about-cover'>
                <h2>About us</h2>
                <hr />
                <div
                    className={!show? "about-text" : "about-text animation"}
                    ref={elementRef}
                >
                    <p><span>ARETTA is a strategic Marketing consultancy focused on driving brand-led business growth. </span></p>
                    <p> We use brand to align strategy and communications to help our clients thrive, win and do new things.</p>
                </div>
                <div className="about-subtext">
                    <p>We help companies develop and tell their brand-led story, clearly and simply across everything they say and do.</p>
                </div>
            </section>
        </div>

    )
}
