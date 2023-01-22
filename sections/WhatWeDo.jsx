import { useEffect, useState } from "react";
import { useIntersect } from "@/hooks/useIntersect"

export const WhatWeDo = () => {
    const { elementRef: elementRef1, show: show1 } = useIntersect();
    const { elementRef: elementRef2, show: show2 } = useIntersect();
    const { elementRef: elementRef3, show: show3 } = useIntersect();
    const { elementRef: elementRef4, show: show4 } = useIntersect();
    const { elementRef: elementRef5, show: show5 } = useIntersect();
    const { elementRef: elementRef6, show: show6 } = useIntersect();
    const [counter, setCounter] = useState(0)

    useEffect(() => {
      if (show6){
        setTimeout(() => {
        setCounter(1)
        }, 1000);
      }
    }, [show6])

    return (
        <div
            id="whatwedo"
            className="app-container background--white relative"
        >
            <section className='what-cover'>
                <h2>What we do</h2>
                <div>
                    <ul>
                        <li
                            className={
                                counter === 1 
                                ? "what-element-fixed"
                                : !show1
                                ? "what-element"
                                : "what-element what-animation"
                            }
                            ref={elementRef1}
                        >
                            Brand positioning
                        </li>
                        <li
                            className={
                                counter === 1 
                                ? "what-element-fixed"
                                : !show2
                                ? "what-element"
                                : "what-element what-animation"
                            }
                            ref={elementRef2}
                        >
                            Brand architecture
                        </li>
                        <li
                            className={
                                counter === 1 
                                ? "what-element-fixed"
                                : !show3
                                ? "what-element"
                                : "what-element what-animation"
                            }
                            ref={elementRef3}
                        >
                            Marketing strategy
                        </li>
                        <li
                            className={
                                counter === 1 
                                ? "what-element-fixed"
                                : !show4
                                ? "what-element"
                                : "what-element what-animation"
                            }
                            ref={elementRef4}
                        >
                            Communications strategy
                        </li>
                        <li
                             className={
                                counter === 1 
                                ? "what-element-fixed"
                                : !show5
                                ? "what-element"
                                : "what-element what-animation"
                            }
                            ref={elementRef5}
                        >
                            PR management
                        </li>
                        <li
                             className={
                                counter === 1 
                                ? "what-element-fixed"
                                : !show6
                                ? "what-element"
                                : "what-element what-animation"
                            }
                             ref={elementRef6}
                        >
                           Visual merchandising
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

