
fetch("https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json")
  .then(response => response.json())
  .then(paintings => {
    console.log(paintings);
    paintings.forEach(painting => {
      console.log(painting)
    });
    for (let i=0; i<paintings.length; i++) {
      const rowEl = document.createElement("tr");
      for (let x=0; x<3; x++) {
        const tdEl = document.createElement("td");
        const cellText = document.createTextNode(`cell in row ${i} column ${x}`);
        tdEl.appendChild(cellText);
        rowEl.appendChild(tdEl);
      }
      document.getElementById("paintings").appendChild(rowEl);
    };
    // console.log(document.getElementById("paintings").rows[0].cells.length);
  })
  .catch(err => {
    console.error(err.message);
  })

