const [mbs, gbs, testing, button] = [
  document.querySelector("#mbs"),
  document.querySelector("#gbs"),
  document.querySelector("#testing"),
  document.querySelector("#button"),
];

const testImage =
  "https://fastly.picsum.photos/id/3/5000/3333.jpg?hmac=GDjZ2uNWE3V59PkdDaOzTOuV3tPWWxJSf4fNcxu4S2g";
const testImageInBytes = 320000;

button.addEventListener("click", () => {
  testing.innerText = "Testing...";
  const startTime = new Date().getTime();

  fetch(testImage)
    .then(() => {
      const endTime = new Date().getTime();
      const duration = (endTime - startTime) / 1000; // Duration in seconds
      const bitsLoaded = testImageInBytes * 8;
      const speedBps = bitsLoaded / duration;
      const speedMbps = speedBps / (1024 * 1024);
      const speedGbps = speedMbps / 1024;

      gbs.innerText = `Speed in GB/s: ${speedGbps.toFixed(2)}`;
      mbs.innerText = `Speed in MB/s: ${speedMbps.toFixed(0)}`;

      testing.innerText = "Test Complete";
    })
    .catch((error) => {
      testing.innerText = "Error during the test";
      console.log("error");
    });
});
