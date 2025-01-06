import { useRef, useEffect, useCallback } from 'react';

export function useAutoScroll(scrollAmount = 1, interval = 50) {
  const ref = useRef<HTMLDivElement>(null);
  const scrollIntervalRef = useRef<number>();

  const startAutoScroll = useCallback(() => {
    if (!ref.current) return;

    scrollIntervalRef.current = window.setInterval(() => {
      if (!ref.current) return;

      ref.current.scrollLeft += scrollAmount;

      // Reset scroll position when reaching the end
      if (
        ref.current.scrollLeft >=
        ref.current.scrollWidth - ref.current.clientWidth
      ) {
        ref.current.scrollLeft = 0;
      }
    }, interval);
  }, [scrollAmount, interval]);

  const stopAutoScroll = useCallback(() => {
    if (scrollIntervalRef.current) {
      clearInterval(scrollIntervalRef.current);
    }
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => stopAutoScroll();
  }, [startAutoScroll, stopAutoScroll]);

  return { ref, startAutoScroll, stopAutoScroll };
}