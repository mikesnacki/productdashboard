import {useState, useEffect, useRef} from 'react'

export default function useScrollDirection(){

    const prevScrollY = useRef(0);

    const [goingDown, setGoingDown] = useState(true);
  
    useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          if (prevScrollY.current < currentScrollY && goingDown) {
            setGoingDown(false);
          }
          if (prevScrollY.current > currentScrollY && !goingDown) {
            setGoingDown(true);
          }
    
          prevScrollY.current = currentScrollY;
        };
    
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
      }, [goingDown]);

      return goingDown
}