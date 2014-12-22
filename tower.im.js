//在菜单中添加一个分割条和两个菜单项

var nav = $("ul.nav");

// debugger;

nav.append("<li id='nav-team1'><a style='color:#C6D5A4;' href='/teams/9880514921ca4ae196eca2e090d4065f/projects/' data-stack='' data-stack-root=''> ｜ </a></li>");

//Fenice开发项目
nav.append("<li id='nav-team1'><a style='color:#8CB6C7;' href='/projects/5e730782c3b04d819cb734641b06f9de/' data-stack='' data-stack-root=''>Dev</a></li>");

//Fenice客服项目
nav.append("<li id='nav-team1'><a style='color:#DBA8BA;' href='/projects/3196129154d545b1a50ca9ab0140815b/' data-stack='' data-stack-root=''>Bug</a></li>");