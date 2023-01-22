import { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import bkLogo from '../public/ARETTABK.png';
import backSea from '../public/sea.jpg';

export const Header = () => {
    const [show, setShow] = useState(false);
    const containerRef = useRef(null)
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            setShow(entries[0].isIntersecting)
        });
        observer.observe(elementRef.current)
    }, []);

    const handleScroll = () => {
        const containerPosition = containerRef.current.getBoundingClientRect().height;
        const objectPosition = elementRef.current.getBoundingClientRect().bottom;
        const distanceRatio = (objectPosition / containerPosition);

        if (distanceRatio < 0.50 && window.scrollY > 25) {
            elementRef.current.style.transform = `scale(${1 + (0.5 - distanceRatio)})`;
        } else {
            elementRef.current.style.transform = `scale(${1})`;
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
            id="home"
            className="app-container relative"
            ref={containerRef}
        >
            <header className="home-cover">
                <div className={show ? "animated-title" : "hide"}>
                    <div className="text-top">
                        <div>
                            <span className='home-logo'>
                                <Image src={bkLogo} alt="areta main logo" priority />
                            </span>
                        </div>
                    </div>
                    <div
                        ref={elementRef}
                        className="text-bottom">
                        <div
                            className='home-caption'
                        ><h1>All your brand can be</h1></div>
                    </div>
                </div>
                <div className="background-sea">
                    <Image src={backSea} alt="background sea" priority />
                </div>
            </header>
        </div>
    )
}