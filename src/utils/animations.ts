
// Animation utility functions

export const fadeIn = (element: HTMLElement, delay: number = 0, duration: number = 300) => {
  if (!element) return;
  
  element.style.opacity = '0';
  element.style.transform = 'translateY(20px)';
  element.style.transition = `opacity ${duration}ms ease, transform ${duration}ms ease`;
  element.style.transitionDelay = `${delay}ms`;
  
  setTimeout(() => {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }, 10);
};

export const staggerChildren = (parentSelector: string, childSelector: string, staggerDelay: number = 100) => {
  const parent = document.querySelector(parentSelector);
  if (!parent) return;
  
  const children = parent.querySelectorAll(childSelector);
  
  children.forEach((child, index) => {
    const element = child as HTMLElement;
    fadeIn(element, index * staggerDelay);
  });
};

export const startCountAnimation = (
  element: HTMLElement, 
  startValue: number, 
  endValue: number, 
  duration: number = 1500
) => {
  if (!element) return;
  
  const startTime = performance.now();
  const updateCount = (currentTime: number) => {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    
    // Easing function: easeOutQuart
    const easeProgress = 1 - Math.pow(1 - progress, 4);
    
    const currentValue = Math.floor(startValue + (endValue - startValue) * easeProgress);
    element.textContent = currentValue.toString();
    
    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      element.textContent = endValue.toString();
    }
  };
  
  requestAnimationFrame(updateCount);
};

// Intersection Observer for animations
export const createScrollObserver = (
  elements: NodeListOf<Element> | Element[], 
  animationClass: string, 
  threshold: number = 0.1,
  staggerDelay: number = 0
) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add(animationClass);
          }, index * staggerDelay);
          
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold }
  );
  
  elements.forEach((element) => {
    observer.observe(element);
  });
  
  return observer;
};
