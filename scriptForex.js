document.body.onload = EURUSD();
document.body.onload = GBPUSD();
document.body.onload = USDJPY();
document.body.onload = AUDUSD();
document.body.onload = forexRates1();
document.body.onload = forexRates2();
document.body.onload = forexRates3();

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

function forexRates1() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'USD','currency':'USD'},
		   success: function (data) {
			   var arr = ['EUR','GBP','JPY','AUD','EUR','CAD','CHF','NZD','CNY','HKD'];
			   console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
			   for (let i = 0; i < 10; i++) {
				   var tag = 'forex' + i;
				   const div = document.getElementById(tag);
					const DOGE = div.firstElementChild;
					DOGE.innerHTML = 'USD to ' + arr[i] + ' : ' + data['data']['rates'][arr[i]];
			   }
				
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function forexRates2() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'EUR','currency':'EUR'},
		   success: function (data) {
			   var arr = ['USD','GBP','JPY','AUD','HKD','CAD','CHF','NZD','CNY','HKD'];
			   console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
			   for (let i = 0; i < 7; i++) {
				   var tag = 'forex0' + i;
				   const div = document.getElementById(tag);
					const DOGE = div.firstElementChild;
					DOGE.innerHTML = 'EUR to ' + arr[i] + ' : ' + data['data']['rates'][arr[i]];
			   }
				
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function forexRates3() {
	try {
	   $.ajax({
		   url: 'https://api.coinbase.com/v2/exchange-rates',
		   type: 'GET',
		   dataType: 'json',
		   data: {'base':'GBP','currency':'GBP'},
		   success: function (data) {
			   var arr = ['USD','GBP','JPY','AUD','HKD','CAD','CHF','NZD','CNY','HKD'];
			   console.log(data['data']['rates']); //data['data']['rates']['AED'] for specific number
			   for (let i = 0; i < 7; i++) {
				   var tag = 'forex00' + i;
				   const div = document.getElementById(tag);
					const DOGE = div.firstElementChild;
					DOGE.innerHTML = 'GBP to ' + arr[i] + ' : ' + data['data']['rates'][arr[i]];
			   }
				
		   },
		});
	} catch (error) {
		console.error(error);
	}
}