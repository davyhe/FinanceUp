document.body.onload = AAPL();
document.body.onload = NVDA();
document.body.onload = MSFT();
document.body.onload = TSLA();
document.body.onload = FB();
document.body.onload = BTC();
document.body.onload = ETH();
document.body.onload = XLM();
document.body.onload = LTC();
document.body.onload = DOGE();
document.body.onload = EURUSD();
document.body.onload = GBPUSD();
document.body.onload = USDJPY();
document.body.onload = AUDUSD();
document.body.onload = USDCAD();

function AAPL() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/quote?symbol=AAPL&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   data: {'symbol':'AAPL','token':'c63hdsiad3id43aa7qug'},
		   success: function (data) {
				const div = document.getElementById('AAPL');
				const AAPL = div.firstElementChild;
				AAPL.innerHTML = data.c;
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function NVDA() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/quote?symbol=NVDA&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   data: {'symbol':'NVDA','token':'c63hdsiad3id43aa7qug'},
		   success: function (data) {
				const div = document.getElementById('NVDA');
				const NVDA = div.firstElementChild;
				NVDA.innerHTML = data.c;
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function MSFT() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/quote?symbol=MSFT&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   data: {'symbol':'MSFT','token':'c63hdsiad3id43aa7qug'},
		   success: function (data) {
				const div = document.getElementById('MSFT');
				const MSFT = div.firstElementChild;
				MSFT.innerHTML = data.c;
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function TSLA() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/quote?symbol=TSLA&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   data: {'symbol':'TSLA','token':'c63hdsiad3id43aa7qug'},
		   success: function (data) {
				const div = document.getElementById('TSLA');
				const TSLA = div.firstElementChild;
				TSLA.innerHTML = data.c;
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function FB() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/quote?symbol=FB&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   data: {'symbol':'FB','token':'c63hdsiad3id43aa7qug'},
		   success: function (data) {
				const div = document.getElementById('FB');
				const FB = div.firstElementChild;
				FB.innerHTML = data.c;
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

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

function EURUSD() {
	try {
	   $.ajax({
		   url: 'https://api.exchangerate.host/convert?from=EUR&to=USD',
		   type: 'GET',
		   dataType: 'json',
		   //data: {'rates':'EURUSD'},
		   success: function (data) {
				const div = document.getElementById('EURUSD');
				const EURUSD = div.firstElementChild;
				EURUSD.innerHTML = data.result;
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function GBPUSD() {
	try {
	   $.ajax({
		   url: 'https://api.exchangerate.host/convert?from=GBP&to=USD',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('GBPUSD');
				const GBPUSD = div.firstElementChild;
				GBPUSD.innerHTML = data.result;
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function USDJPY() {
	try {
	   $.ajax({
		   url: 'https://api.exchangerate.host/convert?from=USD&to=JPY',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('USDJPY');
				const USDJPY = div.firstElementChild;
				USDJPY.innerHTML = data.result;
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function AUDUSD() {
	try {
	   $.ajax({
		   url: 'https://api.exchangerate.host/convert?from=AUD&to=USD',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('AUDUSD');
				const AUDUSD = div.firstElementChild;
				AUDUSD.innerHTML = data.result;
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function USDCAD() {
	try {
	   $.ajax({
		   url: 'https://api.exchangerate.host/convert?from=USD&to=CAD',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('USDCAD');
				const USDCAD = div.firstElementChild;
				USDCAD.innerHTML = data.result;
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

