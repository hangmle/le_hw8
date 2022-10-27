
fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
  .then(response => response.json())
  .then(paintings => {
    // console.log(paintings);
    paintings.forEach(painting => {
      // console.log(painting);
      const rowEl = document.createElement("tr");
      for (let i = 0; i < 3; i++) {
        const tdEl = document.createElement("td");
        rowEl.appendChild(tdEl);
      }
      document.getElementById("paintings").appendChild(rowEl);
    });
    for (i=0; i<paintings.length; i++) {
      document.getElementById("paintings").rows[i+1].cells[0].innerText = paintings[i].name;
      document.getElementById("paintings").rows[i+1].cells[1].innerText = paintings[i].year;
      document.getElementById("paintings").rows[i+1].cells[2].innerText = paintings[i].artist;
    }
    // console.log(document.getElementById("paintings").rows[1].cells[0]);
  })
  .catch (err => {
  console.log(err.message);
})
