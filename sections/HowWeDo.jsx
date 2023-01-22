import { useEffect, useRef } from "react";

export const HowWeDo = () => {
    const containerRef = useRef(null)
    const elementRef = useRef(null);


    const handleScroll = () => {
        const containerPosition = containerRef.current.getBoundingClientRect().height;
        const objectPosition = elementRef.current.getBoundingClientRect().bottom;
        const distanceRatio = (objectPosition / containerPosition);

        if (distanceRatio < 1) {
            elementRef.current.style.transform = `scale(${1})`;

        } else if (distanceRatio < 1.25) {
            elementRef.current.style.transform = `scale(${1 + (1 - distanceRatio)})`;
            elementRef.current.style.opacity = (1-(distanceRatio- Math.floor(distanceRatio)));

        } else if (distanceRatio > 1.23) {
            elementRef.current.style.opacity = 0;
        }
    }


    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div
            id="howwedo"
            className="app-container background--blue relative"
            ref={containerRef}
        >
            <section className='how-cover'>
                <h2>How we do it</h2>
                <ul ref={elementRef}>
                    <li>
                        <div className="how-element">
                            <p className="how-element-number">01</p>
                            <div className="how-element-text">
                                <h4>Clever thinking</h4>
                                <p>We combine clever thinking and powerful communications to focus your businesses for success.</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="how-element">
                            <p className="how-element-number">02</p>
                            <div className="how-element-text">
                                <h4>Creativity & strategy</h4>
                                <p>​We put togehter  creativity and strategical thinking to buid credibility and create awarness to the brands and projects
                                </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="how-element">
                            <p className="how-element-number">03</p>
                            <div className="how-element-text">
                                <h4>Measurable KPI</h4>
                                <p>We develop marketing actions to ensure the brand is  seen and in intenracion with their potential consumers </p>
                            </div>
                        </div>
                    </li>
                </ul>

            </section>
        </div >
    )
}
