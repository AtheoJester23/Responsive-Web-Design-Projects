const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));

// const upObserver = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add("upShow");
//     } else {
//       entry.target.classList.remove("upShow");
//     }
//   });
// });

// const hiddenUpward = document.querySelectorAll(".hiddenUp");

// hiddenUpward.forEach((el) = observer.observe(el));
