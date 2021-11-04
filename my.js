function testGS() {
  const url =
    "https://script.google.com/macros/s/AKfycbwN5ge8IidT50y1WT4p1lomKhjX9zVHxcdB5NbrH9RxH6j89Phpx2qRRiLs2GVNpTHm/exec";

  fetch(url)
    .then((d) => d.json())
    .then((d) => {
      document.getElementById("app").textContent = d[0].status;
    });
}

document.getElementById("btn").addEventListener("click",testGS);