let nextBtn = document.querySelector(".next__button");
let prevBtn = document.querySelector(".prev__button");

let testimonialsPhotos = document
  .querySelector(".testimonial")
  .querySelectorAll(".testimonial__profile__img");

let testimonialsText = document
  .querySelector(".testimonial")
  .querySelectorAll(".testimonial__comment__text");

let index = 0;

console.log(testimonialsPhotos.length);
console.log(testimonialsText.length);

nextBtn.addEventListener("click", (e) => {
  testimonialsPhotos[index].style.display = "none";
  testimonialsText[index].style.display = "none";
  if (testimonialsPhotos.length != index + 1) {
    index++;
  } else {
    index = 0;
  }
  testimonialsPhotos[index].style.display = "block";
  testimonialsText[index].style.display = "block";
});

prevBtn.addEventListener("click", (e) => {
  testimonialsPhotos[index].style.display = "none";
  testimonialsText[index].style.display = "none";
  if (index != 0) {
    index--;
  } else {
    index = testimonialsPhotos.length - 1;
  }
  testimonialsPhotos[index].style.display = "block";
  testimonialsText[index].style.display = "block";
});
