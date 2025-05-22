import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.2 }
    );
    elements.forEach((el) => {
      el.classList.add('opacity-0');
      observer.observe(el);
    });
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);
};

export default useScrollAnimation;