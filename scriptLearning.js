// document.body.onload = NewsImage();
// document.body.onload = NewsLink();
// document.body.onload = NewsDescription();

// function clearCurr(symb) {
	// window.location.reload();
	// document.body.onload = runScript(symb);
// }

function runScript(symb) {
	// var isEmpty = document.getElementById('NewsLink10').innerHTML === "";
	// if (isEmpty) {
		// document.getElementById('NewsLink10').firstElementChild.innerHTML = "notEmpty";
	NewsImageParam(symb);
	// }
	NewsLinkParam(symb);
	NewsDescriptionParam(symb);
}

function NewsTitle() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2021-09-01&to=2021-09-09&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   //data: {'symbol':'AAPL','token':'c63hdsiad3id43aa7qug'},
		   success: function (data) {
			
			
			for (let i = 0; i < 10; i++) {
				const currDiv = 'NewsTitle' + i.toString();
				const div = document.getElementById(currDiv);
				const News = div.firstElementChild;
				
				const title = data[i].headline;
				const link = data[i].url;
				const description = data[i].summary;
				// console.log(title + " -> " + link + " -> " + description);
				News.innerHTML = title;
			}
			
			
			console.log(data);
			
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function NewsTitleParam(symb) {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/company-news?symbol=' + symb + '&from=2021-09-01&to=2021-09-09&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   //data: {'symbol':'AAPL','token':'c63hdsiad3id43aa7qug'},
		   success: function (data) {
			
			
			for (let i = 0; i < 10; i++) {
				const currDiv = 'NewsTitle' + i.toString();
				const div = document.getElementById(currDiv);
				const News = div.firstElementChild;
				
				const title = data[i].headline;
				const link = data[i].url;
				const description = data[i].summary;
				// console.log(title + " -> " + link + " -> " + description);
				News.innerHTML = title;
			}
			
			
			console.log(data);
			
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function NewsLink() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2021-09-01&to=2021-09-09&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   //data: {'symbol':'AAPL','token':'c63hdsiad3id43aa7qug'},
		   success: function (data) {
			
			
			for (let i = 0; i < 10; i++) {
				const currDiv = 'NewsLink' + i.toString();
				const div = document.getElementById(currDiv);
				const News = div.firstElementChild;
				
				const title = data[i].headline;
				const link = data[i].url;
				const description = data[i].summary;
				// console.log(title + " -> " + link + " -> " + description);
				News.innerHTML = "<li><a href='"+link+"'>" + title + "</a></li>";
			}
			
			
			console.log(data);
			
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function NewsLinkParam(symb) {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/company-news?symbol=' + symb + '&from=2021-09-01&to=2021-09-09&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   //data: {'symbol':'AAPL','token':'c63hdsiad3id43aa7qug'},
		   success: function (data) {
			
			
			for (let i = 0; i < 10; i++) {
				const currDiv = 'NewsLink' + i.toString();
				const div = document.getElementById(currDiv);
				const News = div.firstElementChild;
				
				const title = data[i].headline;
				const link = data[i].url;
				const description = data[i].summary;
				// console.log(title + " -> " + link + " -> " + description);
				News.innerHTML = "<li><a href='"+link+"'>" + title + "</a></li>";
			}
			
			
			console.log(data);
			
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function NewsDescription() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2021-09-01&to=2021-09-09&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   //data: {'symbol':'AAPL','token':'c63hdsiad3id43aa7qug'},
		   success: function (data) {
			
			
			for (let i = 0; i < 10; i++) {
				const currDiv = 'NewsDesc' + i.toString();
				const div = document.getElementById(currDiv);
				const News = div.firstElementChild;
				
				const title = data[i].headline;
				const link = data[i].url;
				const description = data[i].summary;
				// console.log(title + " -> " + link + " -> " + description);
				News.innerHTML = "<li>" + description + "</li>";
			}
			
			
			console.log(data);
			
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function NewsDescriptionParam(symb) {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/company-news?symbol=' + symb + '&from=2021-09-01&to=2021-09-09&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   //data: {'symbol':'AAPL','token':'c63hdsiad3id43aa7qug'},
		   success: function (data) {
			
			
			for (let i = 0; i < 10; i++) {
				const currDiv = 'NewsDesc' + i.toString();
				const div = document.getElementById(currDiv);
				const News = div.firstElementChild;
				
				const title = data[i].headline;
				const link = data[i].url;
				var description = data[i].summary;
				if (description == "") {
					description = "No summary given.";
				}
				// console.log(title + " -> " + link + " -> " + description);
				News.innerHTML = "<li>" + description + "</li>";
			}
			
			
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function NewsImage() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2021-09-01&to=2021-09-09&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   //data: {'symbol':'AAPL','token':'c63hdsiad3id43aa7qug'},
		   success: function (data) {
			
			
			for (let i = 0; i < 10; i++) {
				const currDiv = 'NewsImage' + i.toString();
				const div = document.getElementById(currDiv);
				const News = div.firstElementChild;
				
				const title = data[i].headline;
				const link = data[i].url;
				const description = data[i].summary;
				src = data[i].image;
				if (src == "") {
					src = "temp_graph.png"
				}
				img = document.createElement('img');
				img.setAttribute('height', 400);
				img.setAttribute('width', 400);
				img.src = src;
				News.appendChild(img);
			}
			
			
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function NewsImageParam(symb) {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/company-news?symbol=' + symb + '&from=2021-09-01&to=2021-09-09&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   //data: {'symbol':'AAPL','token':'c63hdsiad3id43aa7qug'},
		   success: function (data) {
			
			
			for (let i = 0; i < 10; i++) {
				const currDiv = 'NewsImage' + i.toString();
				const div = document.getElementById(currDiv);
				const News = div.firstElementChild;
				
				const title = data[i].headline;
				const link = data[i].url;
				const description = data[i].summary;
				src = data[i].image;
				if (src == "") {
					src = "temp_graph.png"
				}
				img = document.createElement('img');
				img.setAttribute('height', 400);
				img.setAttribute('width', 400);
				img.src = src;
				News.appendChild(img);
			}
			
			
		   },
		});
	} catch (error) {
		console.error(error);
	}
}