document.body.onload = BTC();
document.body.onload = ETH();
document.body.onload = XLM();
document.body.onload = LTC();
document.body.onload = DOGE();
document.body.onload = BTCrates1();
document.body.onload = BTCrates2();
document.body.onload = BTCrates3();
document.body.onload = BTCrates4();
document.body.onload = BTCrates5();

document.body.onload = ETHrates1();
document.body.onload = ETHrates2();
document.body.onload = ETHrates3();
document.body.onload = ETHrates4();
document.body.onload = ETHrates5();

document.body.onload = LTCrates1();
document.body.onload = LTCrates2();
document.body.onload = LTCrates3();
document.body.onload = LTCrates4();
document.body.onload = LTCrates5();

document.body.onload = XLMrates1();
document.body.onload = XLMrates2();
document.body.onload = XLMrates3();
document.body.onload = XLMrates4();
document.body.onload = XLMrates5();

document.body.onload = DOGErates1();
document.body.onload = DOGErates2();
document.body.onload = DOGErates3();
document.body.onload = DOGErates4();
document.body.onload = DOGErates5();

function BTC() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/prices/BTC-USD/buy',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'USD'},
		   success: function (data) {
				const div = document.getElementById('BTC');
				const BTC = div.firstElementChild;
				BTC.innerHTML = data.data.amount;
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function ETH() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/prices/ETH-USD/buy',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'USD'},
		   success: function (data) {
				const div = document.getElementById('ETH');
				const ETH = div.firstElementChild;
				ETH.innerHTML = data.data.amount;
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function LTC() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/prices/LTC-USD/buy',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'USD'},
		   success: function (data) {
				const div = document.getElementById('LTC');
				const LTC = div.firstElementChild;
				LTC.innerHTML = data.data.amount;
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function XLM() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/prices/XLM-USD/buy',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'XLM','currency':'USD'},
		   success: function (data) {
				const div = document.getElementById('XLM');
				const XLM = div.firstElementChild;
				XLM.innerHTML = data.data.amount;
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function DOGE() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/prices/DOGE-USD/buy',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'DOGE','currency':'USD'},
		   success: function (data) {
				const div = document.getElementById('DOGE');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data.data.amount;
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function BTCrates1() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'BTC'},
		   success: function (data) {
			   console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('BTCr1');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['USD'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function BTCrates2() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'BTC'},
		   success: function (data) {
			   //console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('BTCr2');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['GBP'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function BTCrates3() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'BTC'},
		   success: function (data) {
			   //console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('BTCr3');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['EUR'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function BTCrates4() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'BTC'},
		   success: function (data) {
			   //console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('BTCr4');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['JPY'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function BTCrates5() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'BTC'},
		   success: function (data) {
			   //console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('BTCr5');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['AUD'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function ETHrates1() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'ETH'},
		   success: function (data) {
			   console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('ETHr1');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['USD'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function ETHrates2() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'ETH'},
		   success: function (data) {
			   //console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('ETHr2');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['GBP'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function ETHrates3() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'ETH'},
		   success: function (data) {
			   //console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('ETHr3');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['EUR'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function ETHrates4() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'ETH'},
		   success: function (data) {
			   //console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('ETHr4');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['JPY'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function ETHrates5() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'ETH'},
		   success: function (data) {
			   //console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('ETHr5');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['AUD'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function LTCrates1() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'LTC'},
		   success: function (data) {
			   console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('LTCr1');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['USD'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function LTCrates2() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'LTC'},
		   success: function (data) {
			   //console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('LTCr2');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['GBP'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function LTCrates3() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'LTC'},
		   success: function (data) {
			   //console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('LTCr3');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['EUR'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function LTCrates4() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'LTC'},
		   success: function (data) {
			   //console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('LTCr4');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['JPY'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function LTCrates5() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'LTC'},
		   success: function (data) {
			   //console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('LTCr5');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['AUD'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}


function XLMrates1() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'XLM'},
		   success: function (data) {
			   console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('XLMr1');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['USD'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function XLMrates2() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'XLM'},
		   success: function (data) {
			   //console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('XLMr2');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['GBP'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function XLMrates3() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'XLM'},
		   success: function (data) {
			   //console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('XLMr3');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['EUR'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function XLMrates4() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'XLM'},
		   success: function (data) {
			   //console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('XLMr4');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['JPY'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function XLMrates5() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'XLM'},
		   success: function (data) {
			   //console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('XLMr5');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['AUD'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function DOGErates1() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'DOGE'},
		   success: function (data) {
			   console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('DOGEr1');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['USD'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function DOGErates2() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'DOGE'},
		   success: function (data) {
			   //console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('DOGEr2');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['GBP'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function DOGErates3() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'DOGE'},
		   success: function (data) {
			   //console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('DOGEr3');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['EUR'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function DOGErates4() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'DOGE'},
		   success: function (data) {
			   //console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('DOGEr4');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['JPY'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function DOGErates5() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'BTC','currency':'DOGE'},
		   success: function (data) {
			   //console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
				const div = document.getElementById('DOGEr5');
				const DOGE = div.firstElementChild;
				DOGE.innerHTML = data['data']['rates']['AUD'];
		   },
		});
	} catch (error) {
		console.error(error);
	}
}