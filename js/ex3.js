// json data
const myData = {
  name: "Le",
  countries: [
    {
      name: "Japan",
      year: 2018
    },
    {
      name: "Singapore",
      year: 2019
    },
    {
      name: "Malaysia",
      year: 2019
    }
  ]
}

fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(myData)
})
  .then(response => response.text())
  .then(result => {
    console.log(result)
  })
  .catch(err => {
    console.error(err.message);
  });
