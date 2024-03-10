const getTime = () => {
  const time = new Date();
  document.querySelector("#dayName").innerHTML = time.toLocaleDateString(
    "en-US",
    { weekday: "long" }
  );
  document.querySelector("#monthName").innerHTML = time.toLocaleDateString(
    "en-US",
    { month: "long" }
  );
  document.querySelector("#dayDate").innerHTML = time.getDate();
  document.querySelector("#yearDate").innerHTML = time.getFullYear();
};

getTime();
