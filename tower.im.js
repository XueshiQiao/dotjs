//在菜单中添加一个分割条和两个菜单项

var nav = $("ul.nav");

// debugger;

nav.append("<li id='nav-team1'><a style='color:#DBA8BA;' href='/teams/9880514921ca4ae196eca2e090d4065f/projects/' data-stack='' data-stack-root=''> ｜ </a></li>");

//开发团队
nav.append("<li id='nav-team1'><a style='color:#8CB6C7;' href='/teams/9880514921ca4ae196eca2e090d4065f/projects/' data-stack='' data-stack-root=''>开发团队</a></li>");

//团队
nav.append("<li id='nav-team1'><a style='color:#C6D5A4;' href='/teams/5e745676bffb4cbfaf8743a380994334/projects/' data-stack='' data-stack-root=''>客服团队</a></li>");