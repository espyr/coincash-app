import { useState, useEffect, useRef } from "react";
//to track whether a particular DOM element is within the viewport or visible area of the browser window
const useInView = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  //ref to observe an element
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { ...options }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    //cleanup func
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, isIntersecting];
};

export default useInView;
