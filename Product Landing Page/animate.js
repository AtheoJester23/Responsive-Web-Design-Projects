const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");

      const video = document.getElementById("video");
      const videoSrc = video.src;
      if (!videoSrc.includes("autoplay=1")) {
        video.src = videoSrc + "&autoplay=1"; // Append autoplay=1 to the existing src
      }

      observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const observerX = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("showX");
    } else {
      entry.target.classList.remove("showX");
    }
  });
});

const video = document.getElementById("video");

const hiddenElements = document.querySelectorAll(".hidden");

const hiddenElementsX = document.querySelectorAll(".hiddenX");

const vidContainer = document.querySelector(".vidContainer");

const aboutElement = document.querySelectorAll(".about");

hiddenElements.forEach((el) => observer.observe(el));
if (vidContainer) {
  observer.observe(vidContainer);
}

hiddenElementsX.forEach((el) => observerX.observe(el));
if (aboutElement) {
  observerX.observe(aboutElement);
}
