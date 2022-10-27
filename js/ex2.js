// create h2
const h2 = document.createElement("h2");
h2.textContent = "Information about a GitHub user"
document.body.appendChild(h2);

// create "form"
const formEl = document.createElement("form");
formEl.id = "info";
document.body.appendChild(formEl);

const inp = document.createElement("input");
inp.id = "login"
inp.type = "text"
document.getElementById("info").appendChild(inp);

const submit = document.createElement("input");
submit.type = "Submit";
submit.value = "Lookup";
document.getElementById("info").appendChild(submit);

const para = document.createElement("p");
document.getElementById("info").appendChild(para);
const img = document.createElement("img");
img.src = "../photo.png";
// or
// img.src = "https://www.google.com/intl/en_com/images/logo_plain.png";
para.appendChild(img);

const table = document.createElement("table");
table.id = "table"
document.getElementById("info").appendChild(table);
for (i=0; i<3; i++) {
  const rowEl = document.createElement("tr");
  table.appendChild(rowEl);
  for (x=0; x<2; x++) {
    const tdEl = document.createElement("td");
    rowEl.appendChild(tdEl);
  }
}



// add data to table cells !!!



// addEventListener() !!!




fetch("https://api.github.com/users/USERNAME")
  .then(response => response.text())
  // .then(users => {
  //   console.log(users);
  // })
  .catch(err => {
    console.error(err.message);
  })


