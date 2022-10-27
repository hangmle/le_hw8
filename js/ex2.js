
fetch("https://api.github.com/users/bpesquet")
  .then(response => response.json())
  .then(result => {
    console.log(result.login);

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
    inp.name = "loginName"
    document.getElementById("info").appendChild(inp);

    const submit = document.createElement("input");
    submit.type = "submit";
    submit.value = "Lookup";
    document.getElementById("info").appendChild(submit);


    const formElem = document.querySelector("form");
    formElem.addEventListener("submit", e => {
      e.preventDefault();
      if (e.target.elements.loginName.value.toLowerCase() === result.login.toLowerCase()) {
        // create para photo
        const para = document.createElement("p");
        document.getElementById("info").appendChild(para);
        const img = document.createElement("img");
        // img.src = "../photo.png";
        // or
        img.src = result.avatar_url;
        para.appendChild(img);

        // create table
        const table = document.createElement("table");
        table.id = "table"
        document.getElementById("info").appendChild(table);
        for (i = 0; i < 3; i++) {
          const rowEl = document.createElement("tr");
          table.appendChild(rowEl);
          for (x = 0; x < 2; x++) {
            const tdEl = document.createElement("td");
            rowEl.appendChild(tdEl);
          }
        }
        document.getElementById("table").rows[0].cells[0].innerText = "Name";
        document.getElementById("table").rows[1].cells[0].innerText = "Blog";
        document.getElementById("table").rows[2].cells[0].innerText = "Created";

        document.getElementById("table").rows[0].cells[1].innerText = result.name;
        document.getElementById("table").rows[1].cells[1].innerText = result.blog;
        document.getElementById("table").rows[2].cells[1].innerText = result.created_at;

      } else {
        console.log("Incorrect");
      }
    })
  })
  .catch(err => {
    console.error(err.message);
  })


