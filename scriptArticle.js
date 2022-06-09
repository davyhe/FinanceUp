document.body.onload = news1();
document.body.onload = news12();
document.body.onload = news13();
document.body.onload = sum1();
document.body.onload = sum12();
document.body.onload = sum13();
document.body.onload = news2();
document.body.onload = news22();
document.body.onload = news23();
document.body.onload = sum2();
document.body.onload = sum22();
document.body.onload = sum23();
document.body.onload = news3();
document.body.onload = news32();
document.body.onload = news33();
document.body.onload = sum3();
document.body.onload = sum32();
document.body.onload = sum33();
document.body.onload = news4();
document.body.onload = news42();
document.body.onload = news43();
document.body.onload = sum4();
document.body.onload = sum42();
document.body.onload = sum43();

function news1() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=general&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('news1');
				const news1 = div.firstElementChild;
				news1.innerHTML += data[0].headline;
				src = data[0].image;
				img = document.createElement('img');
				img.setAttribute("height", 300);
				img.setAttribute("width", 450);
				img.src = src;
				news1.appendChild(img);
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function news12() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=general&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('news12');
				const news12 = div.firstElementChild;
				news12.innerHTML += data[1].headline;
				src = data[1].image;
				img = document.createElement('img');
				img.setAttribute("height", 300);
				img.setAttribute("width", 450);
				img.src = src;
				news12.appendChild(img);
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function news13() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=general&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
			   console.log(data);
				const div = document.getElementById('news13');
				const news13 = div.firstElementChild;
				news13.innerHTML += data[2].headline;
				src = data[2].image;
				img = document.createElement('img');
				img.setAttribute("height", 300);
				img.setAttribute("width", 450);
				img.src = src;
				news13.appendChild(img);
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function sum1() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=general&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('sum1');
				const sum1 = div.firstElementChild;
				text = data[0].summary;
				href = data[0].url;
				url = document.createElement('url');
				url.href = href;
				sum1.innerHTML = "<a href='"+href+"'>" + text + "</a>";
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function sum12() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=general&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('sum12');
				const sum12 = div.firstElementChild;
				text = data[1].summary;
				href = data[1].url;
				url = document.createElement('url');
				url.href = href;
				sum12.innerHTML = "<a href='"+href+"'>" + text + "</a>";
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function sum13() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=general&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('sum13');
				const sum13 = div.firstElementChild;
				text = data[2].summary;
				href = data[2].url;
				url = document.createElement('url');
				url.href = href;
				sum13.innerHTML = "<a href='"+href+"'>" + text + "</a>";
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function news2() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=forex&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('news2');
				const news2 = div.firstElementChild;
				news2.innerHTML = data[0].headline;
				src = data[0].image;
				img = document.createElement('img');
				img.setAttribute("height", 300);
				img.setAttribute("width", 450);
				img.src = src;
				news2.appendChild(img);
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function news22() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=forex&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('news22');
				const news22 = div.firstElementChild;
				news22.innerHTML = data[1].headline;
				src = data[1].image;
				img = document.createElement('img');
				img.setAttribute("height", 300);
				img.setAttribute("width", 450);
				img.src = src;
				news22.appendChild(img);
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function news23() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=forex&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('news23');
				const news23 = div.firstElementChild;
				news23.innerHTML = data[2].headline;
				src = data[2].image;
				img = document.createElement('img');
				img.setAttribute("height", 300);
				img.setAttribute("width", 450);
				img.src = src;
				news23.appendChild(img);
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function sum2() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=forex&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('sum2');
				const sum2 = div.firstElementChild;
				text = data[0].summary;
				href = data[0].url;
				url = document.createElement('url');
				url.href = href;
				sum2.innerHTML = "<a href='"+href+"'>" + text + "</a>";
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function sum22() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=forex&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('sum22');
				const sum22 = div.firstElementChild;
				text = data[1].summary;
				href = data[1].url;
				url = document.createElement('url');
				url.href = href;
				sum22.innerHTML = "<a href='"+href+"'>" + text + "</a>";
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function sum23() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=forex&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('sum23');
				const sum23 = div.firstElementChild;
				text = data[2].summary;
				href = data[2].url;
				url = document.createElement('url');
				url.href = href;
				sum23.innerHTML = "<a href='"+href+"'>" + text + "</a>";
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function news3() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=crypto&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('news3');
				const news3 = div.firstElementChild;
				news3.innerHTML = data[0].headline;
				src = data[0].image;
				img = document.createElement('img');
				img.setAttribute("height", 300);
				img.setAttribute("width", 450);
				img.src = src;
				news3.appendChild(img);
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function news32() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=crypto&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('news32');
				const news32 = div.firstElementChild;
				news32.innerHTML = data[1].headline;
				src = data[1].image;
				img = document.createElement('img');
				img.setAttribute("height", 300);
				img.setAttribute("width", 450);
				img.src = src;
				news32.appendChild(img);
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function news33() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=crypto&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('news33');
				const news33 = div.firstElementChild;
				news33.innerHTML = data[2].headline;
				src = data[2].image;
				img = document.createElement('img');
				img.setAttribute("height", 300);
				img.setAttribute("width", 450);
				img.src = src;
				news33.appendChild(img);
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 



function sum3() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=crypto&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('sum3');
				const sum3 = div.firstElementChild;
				text = data[0].summary;
				href = data[0].url;
				url = document.createElement('url');
				url.href = href;
				sum3.innerHTML = "<a href='"+href+"'>" + text + "</a>";
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function sum32() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=crypto&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('sum32');
				const sum32 = div.firstElementChild;
				text = data[1].summary;
				href = data[1].url;
				url = document.createElement('url');
				url.href = href;
				sum32.innerHTML = "<a href='"+href+"'>" + text + "</a>";
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function sum33() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=crypto&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('sum33');
				const sum33 = div.firstElementChild;
				text = data[2].summary;
				href = data[2].url;
				url = document.createElement('url');
				url.href = href;
				sum33.innerHTML = "<a href='"+href+"'>" + text + "</a>";
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function news4() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=merger&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('news4');
				const news4 = div.firstElementChild;
				news4.innerHTML = data[0].headline;
				src = data[0].image;
				img = document.createElement('img');
				img.setAttribute("height", 300);
				img.setAttribute("width", 450);
				img.src = src;
				news4.appendChild(img);
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function news42() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=merger&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('news42');
				const news42 = div.firstElementChild;
				news42.innerHTML = data[1].headline;
				src = data[1].image;
				img = document.createElement('img');
				img.setAttribute("height", 300);
				img.setAttribute("width", 450);
				img.src = src;
				news42.appendChild(img);
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function news43() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=merger&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('news43');
				const news43 = div.firstElementChild;
				news43.innerHTML = data[2].headline;
				src = data[2].image;
				img = document.createElement('img');
				img.setAttribute("height", 300);
				img.setAttribute("width", 450);
				img.src = src;
				news43.appendChild(img);
		   },
		});
	} catch (error) {
		console.error(error);
	}
}

function sum4() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=merger&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('sum4');
				const sum4 = div.firstElementChild;
				text = data[0].summary;
				href = data[0].url;
				url = document.createElement('url');
				url.href = href;
				sum4.innerHTML = "<a href='"+href+"'>" + text + "</a>";
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function sum42() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=merger&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
				const div = document.getElementById('sum42');
				const sum42 = div.firstElementChild;
				text = data[1].summary;
				href = data[1].url;
				url = document.createElement('url');
				url.href = href;
				sum42.innerHTML = "<a href='"+href+"'>" + text + "</a>";
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 

function sum43() {
	try {
	   $.ajax({
		   url: 'https://finnhub.io/api/v1/news?category=merger&token=c63hdsiad3id43aa7qug',
		   type: 'GET',
		   dataType: 'json',
		   success: function (data) {
			   	console.log(data);		   
				const div = document.getElementById('sum43');
				const sum43 = div.firstElementChild;
				text = data[2].summary;
				href = data[2].url;
				url = document.createElement('url');
				url.href = href;
				sum43.innerHTML = "<a href='"+href+"'>" + text + "</a>";
		   },
		});
	} catch (error) {
		console.error(error);
	}
} 