function testGS() {
  const url =
    "https://script.google.com/macros/s/AKfycbxd6ko-Gabnx5CUa5aLs-MDDjnM6YDYfTGX2U5GJuKkW6y9vktMGqIaK03nlXhVQIUB/exec";

  fetch(url)
    .then((d) => d.json())
    .then((d) => {
      document.getElementById("app").textContent = d[0].status;
    });
}

function addGS() {
  const url =
    "https://script.google.com/macros/s/AKfycbxd6ko-Gabnx5CUa5aLs-MDDjnM6YDYfTGX2U5GJuKkW6y9vktMGqIaK03nlXhVQIUB/exec";

  fetch(url,{
      method: 'POST',
      mode: 'no-cors',
      cache: 'no-cache',
      //credentials: 'omit',
      headers: {'Content-Type': 'application/json'},
      redirect: 'follow',
      //referrerPolicy: 'no-referrer',
      body: JSON.stringify({name:"Jhon"})





  });
}

document.getElementById("btn2").addEventListener("click", addGS);

document.getElementById("btn").addEventListener("click", testGS);
