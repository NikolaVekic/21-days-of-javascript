const number = document.querySelector("#number");
let counter = 0;

setInterval(() => {
  if (counter == 74) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = counter + "%";
  }
}, 27);
