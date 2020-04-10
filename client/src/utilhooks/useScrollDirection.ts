import {useState, useEffect, useRef} from 'react'

export default function useScrollDirection(){

    const prevScrollY = useRef(0);
    const [direction, setDirection] = useState(true);
    const [distance, setDistance] = useState(0);
  
    useEffect(() => {
        const handleScroll = () => {
          if (prevScrollY.current < window.scrollY && direction) {
            setDirection(false);
            setDistance(window.scrollY)
          }
          if (prevScrollY.current > window.scrollY && !direction) {
            setDirection(true);
            setDistance(0)
          }
          prevScrollY.current = window.scrollY;
        };
    
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
      }, [direction, distance]);

      return { direction, distance }
}