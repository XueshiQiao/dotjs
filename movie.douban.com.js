
function appendEleToDiv(div, url, urlName, movieName) {
	//remove suffix likes "(2014)"
	var indexOfParenthesis = movieName.indexOf("(");  
	if (indexOfParenthesis > 0) {
		movieName = movieName.substring(0, indexOfParenthesis); 
	}
	div.append("<br /><a class='pl' target='_blank' href='" + url  + encodeURI(movieName) + "'> " + urlName + "</a>");
}

//debugger;
var movieName = $("#content h1 span").text();
if (movieName != undefined && movieName.length > 0) {
	console.log("INFO! movie.douban.com.js: find movie name :" + movieName);

	var infoDiv = $("#info");
	appendEleToDiv(infoDiv, "http://www.bttiantang.com/s.php?q=", 				"下载：BT天堂", 					movieName);
	appendEleToDiv(infoDiv, "https://kickass.so/usearch/", 						"下载：KickAss", 				movieName);
	appendEleToDiv(infoDiv, "http://s.kujian.com/plus/search.php?keyword=", 	"下载：电影天堂", 				movieName);
	appendEleToDiv(infoDiv, "http://subhd.com/search/", 						"字幕下载：subhd.com", 			movieName);
} else {
	console.log("WARNING! movie.douban.com.js: Can't find movie name.");
}
