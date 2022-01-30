(() => {
  // Indicate availability of JS.

  const body = document.querySelector("body.no-js");
  if (!body) return;

  body.classList.remove("no-js");
  body.classList.add("js");

  // Move hero images into slider container
  const sliderContainer = document.querySelector("#js-image-slider");
  if (!sliderContainer) return;

  const images = document.querySelectorAll(".hero-image");
  images.forEach((image, idx) => {
    const parent = image.parentElement;
    parent.parentElement.removeChild(parent);

    const div = document.createElement("div");
    div.appendChild(image);
    div.classList.add("col-start-1", "row-start-1");
    div.setAttribute("data-slider-idx", idx);
    div.style.zIndex = 3 - idx;

    sliderContainer.appendChild(div);
  });

  // Set up hero slider buttons
  const sliderPrevious = document.querySelector("#hero-previous-slide");
  const sliderNext = document.querySelector("#hero-next-slide");

  let currentIndex = 0;

  let visibleSlide = document.querySelector(`[data-slider-idx="0"]`);
  let visibleContent = document.querySelector(`[data-slider-content-idx="1"]`);
  visibleContent.zIndex = 10;

  let visibleZ = 4;

  let animating = false;

  const animationAllowed = window.matchMedia(
    "(prefers-reduced-motion: no-preference)"
  );

  const fadeInCurrent = () => {
    const last = visibleContent;
    last.style.transition = "opacity 150ms ease-in-out";
    last.style.zIndex = 9;
    last.style.opacity = 0;

    visibleContent = document.querySelector(
      `[data-slider-content-idx="${currentIndex + 1}"]`
    );
    visibleContent.style.transition = "none";
    visibleContent.style.zIndex = 10;
    visibleContent.style.opacity = 0;
    
    requestAnimationFrame(() => {
      setTimeout(() => {
        visibleContent.style.transition = "opacity 150ms ease-in-out";
        visibleContent.style.opacity = 1;
      }, 1);
    });
  };
  
  const slideInCurrent = (fromLeft = false) => {
    visibleSlide = document.querySelector(
      `[data-slider-idx="${currentIndex}"]`
      );
      visibleSlide.style.zIndex = visibleZ++;
      
      if (!animationAllowed) {
      visibleSlide.style.transform = `translateX(${0})`;
      return;
    }

    requestAnimationFrame(() => {
      animating = true;
      visibleSlide.style.transition = "none";
      visibleSlide.style.transform = `translateX(${
        100 * (fromLeft ? -1 : 1)
      }%)`;

      setTimeout(() => {
        visibleSlide.style.transition = "transform 150ms ease-in-out";
        visibleSlide.style.transform = `translateX(${0})`;
        setTimeout(() => (animating = false), 150);
      }, 1);
    });
  };

  sliderNext.addEventListener("click", () => {
    if (animating) return;
    currentIndex = (currentIndex + 1) % 3;
    slideInCurrent();
    fadeInCurrent();
  });

  sliderPrevious.addEventListener("click", () => {
    if (animating) return;
    currentIndex = currentIndex == 0 ? 2 : currentIndex - 1;
    slideInCurrent(true);
    fadeInCurrent();
  });
})();
