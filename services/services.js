console.log("services.js");

let services = document.querySelectorAll(".service-block");
services.forEach((service, i) => {
  let readMoreBtn = service.querySelector(".read-more-btn");
  if(readMoreBtn){
    readMoreBtn.addEventListener("click", (event) => {
      event.preventDefault();
      serviceToggle(i);
    });
  }
});

let serviceToggle = function(i){
  let services = document.querySelectorAll(".service-block");
  services.forEach((service, j) => {
    if(i === j){
      service.classList.toggle("active");
    } else {
      service.classList.remove("active");
    }
  });
}