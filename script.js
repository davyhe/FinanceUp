const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "c63hdsiad3id43aa7qug"
const finnhubClient = new finnhub.DefaultApi()

finnhubClient.quote("AAPL", (error, data, response) => {
  console.log(data)
  //displayDow(data)
});

// function displayDow(data) {
//   const cocktail = data.price[0];
//   const cocktailDiv = document.getElementById("cocktail");  
// }   

var large = false;

function changeFontSize1() {
  if (large == false) {
    document.body.style.fontSize = "16px";
    document.getElementById("1").style.fontSize = "24px";
    large = true
  } else {
    document.body.style.fontSize = "30px";
    document.getElementById("1").style.fontSize = "30px";
    large = false
  }
}

function changeFontSize2() {
  if (large == false) {
    document.body.style.fontSize = "16px";
    document.getElementById("1").style.fontSize = "24px";
    document.getElementById("2").style.fontSize = "24px";
    large = true
  } else {
    document.body.style.fontSize = "30px";
    document.getElementById("1").style.fontSize = "30px";
    document.getElementById("2").style.fontSize = "30px";
    large = false
  }
}

function changeFontSize3() {
  if (large == false) {
    document.body.style.fontSize = "16px";
    document.getElementById("1").style.fontSize = "24px";
    document.getElementById("2").style.fontSize = "24px";
    document.getElementById("3").style.fontSize = "24px";
    large = true
  } else {
    document.body.style.fontSize = "30px";
    document.getElementById("1").style.fontSize = "30px";
    document.getElementById("2").style.fontSize = "30px";
    document.getElementById("3").style.fontSize = "30px";
    large = false
  }
}

function changeFontSize4() {
  if (large == false) {
    document.body.style.fontSize = "16px";
    document.getElementById("1").style.fontSize = "20px";
    document.getElementById("2").style.fontSize = "20px";
    document.getElementById("3").style.fontSize = "20px";
    document.getElementById("4").style.fontSize = "25px";
    large = true
  } else {
    document.body.style.fontSize = "30px";
    document.getElementById("1").style.fontSize = "30px";
    document.getElementById("2").style.fontSize = "30px";
    document.getElementById("3").style.fontSize = "30px";
    document.getElementById("4").style.fontSize = "30px";
    large = false
  }
}

function changeFontSize() {
  if (large == false) {
    document.body.style.fontSize = "16px";
    large = true
  } else {
    document.body.style.fontSize = "30px";
    large = false
  }
}