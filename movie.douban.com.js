
function appendEleToDiv(div, url, urlName, movieName) {
	div.append("<br /><a class='pl' target='_blank' href='" + encodeURI (url  + movieName) + "'> " + urlName + "</a>");
}

function removeParenthesisAndTrim(text) {
	var indexOfParenthesis = text.indexOf("(");  
	if (indexOfParenthesis > 0) {
		text = text.substring(0, indexOfParenthesis); 
	}

	return text.trim();
}

//debugger;
var chineseName = removeParenthesisAndTrim($("title").text());
var movieName = removeParenthesisAndTrim($("#content h1 span").text());

if (chineseName != undefined && chineseName.length > 0 && movieName != undefined && movieName.length > 0) {
	var chineseNameEndIndex = movieName.indexOf(chineseName) + chineseName.length;
	var englishName = movieName.substring(chineseNameEndIndex).trim();

	var infoDiv = $("#info");
	appendEleToDiv(infoDiv, "http://www.bttiantang.com/s.php?q=", 				"下载：BT天堂", 					chineseName);
	appendEleToDiv(infoDiv, "https://kickass.so/usearch/", 						"下载：KickAss", 				englishName.length > 0 ? englishName : chineseName);
	appendEleToDiv(infoDiv, "http://s.kujian.com/plus/search.php?keyword=", 	"下载：电影天堂", 				chineseName);
	appendEleToDiv(infoDiv, "http://subhd.com/search/", 						"字幕下载：subhd.com", 			chineseName);
} else {
	console.log("WARNING! movie.douban.com.js: Can't find movie name.");
}
