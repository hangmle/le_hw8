// create "h2" and "form"
const h2El = document.createElement("h2");
h2El.textContent = "Sample Form";
document.body.appendChild(h2El);

const formEl = document.createElement("form");
formEl.id = "myForm"
document.body.appendChild(formEl);


// name
const namePara = document.createElement("p");
const nameLabel = document.createElement("label");
nameLabel.innerText = "Name: ";
const nameInp = document.createElement("input");
nameInp.name = "name";
nameInp.type = "text";
nameInp.required = "required";
document.getElementById("myForm").appendChild(namePara);
namePara.appendChild(nameLabel);
namePara.appendChild(nameInp);


// email
const emailPara = document.createElement("p");
const emailLabel = document.createElement("label");
emailLabel.innerText = "Email: ";
const emailInp = document.createElement("input");
emailInp.name = "email";
emailInp.type = "email";
emailInp.required = "required";
document.getElementById("myForm").appendChild(emailPara);
emailPara.appendChild(emailLabel);
emailPara.appendChild(emailInp);


// payment
const payments = [
  {
    id: "CS",
    value: "Cash"
  },
  {
    id: "CC",
    value: "Credit Card"
  },
  {
    id: "GP",
    value: "Google Pay"
  },
  {
    id: "AP",
    value: "Apple Pay"
  }
];

const br = document.createElement("br");
const pmtPara = document.createElement("p");
const aLabel = document.createElement("label");
aLabel.innerText = "Payment Type:";
pmtPara.appendChild(aLabel);
pmtPara.appendChild(br);

for (i = 0; i < payments.length; i++) {
  const br = document.createElement("br");
  const pmtInp = document.createElement("input");
  pmtInp.type = "radio";
  pmtInp.name = "payment";
  const pmtLabel = document.createElement("label");
  pmtLabel.setAttribute("name", "pmtDesc");
  pmtPara.appendChild(pmtInp);
  pmtPara.appendChild(pmtLabel);
  pmtPara.appendChild(br);
}
document.getElementById("myForm").appendChild(pmtPara);

for (j = 0; j < payments.length; j++) {
  document.getElementsByName("pmtDesc")[j].innerText = payments[j].value;
  document.getElementsByName("payment")[j].value = payments[j].id;
}


// promo
const promoPara = document.createElement("p");
const promoInp = document.createElement("input");
promoInp.type = "checkbox";
promoInp.name = "promotion";
promoInp.id = "promo";
const promoLabel = document.createElement("label");
promoLabel.innerText = "Sign me up for special promotions";
promoPara.appendChild(promoInp);
promoPara.appendChild(promoLabel);
document.getElementById("myForm").appendChild(promoPara);


// location
const locations = [
  {
    id: "LA",
    value: "Los Angeles"
  },
  {
    id: "OC",
    value: "Orange County"
  },
  {
    id: "RS",
    value: "Riverside"
  },
  {
    id: "SD",
    value: "San Diego"
  }
];

const locaPara = document.createElement("p");
const locaLabel = document.createElement("label");
locaLabel.innerText = "Preferred Location: ";
const select = document.createElement("select");
select.name = "location";
for (i = 0; i < locations.length; i++) {
  const selectOpt = document.createElement("option");
  selectOpt.value = locations[i].id;
  selectOpt.textContent = locations[i].value;
  select.appendChild(selectOpt);
}

locaPara.appendChild(locaLabel);
locaPara.appendChild(select);
document.getElementById("myForm").appendChild(locaPara);


// button
const buttonPara = document.createElement("p");
const submit = document.createElement("input");
const cancel = document.createElement("input");
submit.type = "submit";
submit.value = "Submit";
cancel.type = "reset";
cancel.value = "Cancel";
buttonPara.appendChild(submit);
buttonPara.appendChild(cancel);
document.getElementById("myForm").appendChild(buttonPara);



// console.log(document.getElementsByName("pmtDesc")[0])



// check checkbox
document.getElementById("promo").addEventListener("change", e => {
  console.log(`Promotion: ${e.target.checked}`);
});

// check radio button
const pmtElements = Array.from(document.getElementsByName("payment"));
pmtElements.forEach(element => {
  element.addEventListener("change", e => {
    console.log(`Selected payment: ${e.target.value}`);
  });
});


const formElement = document.querySelector("form");
formElement.addEventListener("submit", e => {
  e.preventDefault();

  // check data in form
  console.log(`Username: ${e.target.elements.name.value}, email: ${e.target.elements.email.value}, payment: ${e.target.elements.payment.value}, promotion: ${e.target.elements.promotion.value}, location: ${e.target.elements.location.value}`)


  // show key and value in console -> same as lines 205-206
  const formData = new FormData(e.target);
  formData.forEach((val, key) => {
    console.log(`key: ${key}, val: ${val}`);
  });

  // table title
  const title = document.createElement("p");
  title.innerText = "Form Data Entered";
  title.style.fontWeight = "bold";
  document.getElementById("myForm").appendChild(title);

  // create table
  const table = document.createElement("table");
  table.id = "table";
  for (x = 0; x < 2; x++) {
    const thEl = document.createElement("th");
    table.appendChild(thEl);
  }
  for (i = 0; i < 5; i++) {
    const rowEl = document.createElement("tr");
    for (j = 0; j < 2; j++) {
      const tdEl = document.createElement("td");
      rowEl.appendChild(tdEl);
    }
    table.appendChild(rowEl);
  }

  document.getElementById("myForm").appendChild(table);
  document.getElementsByTagName("th")[0].textContent = "Key";
  document.getElementsByTagName("th")[1].textContent = "Value";

  // for ([key, val] of formData.entries()) {
  //   console.log(`key: ${key}, value: ${val}`);
  //   // console.log(document.getElementById("table").rows[1].cells[0]);
  // }

  // console.log(document.getElementsByTagName("td")[3]);
  // // for (i = 0; i < 10; i + 2) {
  // //   document.getElementsByTagName("td")[i].innerText = FormData.keys();
  // // }
})
