import { useEffect, useRef } from "react";

export const useClickOutside = (callback: () => void, initialValue = null) => {
  const elementRef = useRef(initialValue);

  const handler = (event: any) => {
    //@ts-ignore
    if (!elementRef.current?.contains(event.target)) callback();
  };

  useEffect(() => {
    window.addEventListener("click", handler);
    return () => window.removeEventListener("click", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback]);

  return elementRef;
};
