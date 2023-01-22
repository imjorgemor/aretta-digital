import {useState, useRef, useEffect} from 'react'

export const useIntersect = () => {
    const [show, setShow] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            setShow(entries[0].isIntersecting, { rootMargin: "150px" })
        });
        observer.observe(elementRef.current)
    }, []);

  return {elementRef, show}
}