function testGS() {
  const url =
    "https://script.google.com/macros/s/AKfycbxd6ko-Gabnx5CUa5aLs-MDDjnM6YDYfTGX2U5GJuKkW6y9vktMGqIaK03nlXhVQIUB/exec";

  fetch(url)
    .then((d) => d.json())
    .then((d) => {
      document.getElementById("app").textContent = d[0].status;
    });
}

document.getElementById("btn").addEventListener("click",testGS);
