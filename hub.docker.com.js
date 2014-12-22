
var hNav = $("ul.nav:first"); //水平菜单
var vNav = $("ul.dropdown-menu"); //个人信息的 DropMenu
//debugger;

//把hNav的最后一个元素（help）放到vNav里（如果不移动，加上下面的Starred菜单项会放不下）
var hNavChildren = hNav.children();
if (hNavChildren.length > 0) {
	var lastChildOfHNav = hNavChildren[hNavChildren.length - 1];
	lastChildOfHNav.remove();
	vNav.append(lastChildOfHNav);
}

//水平菜单中增加 Starred 菜单项
hNav.append("<li><a href='https://hub.docker.com/u/qiaoxueshi/starred' title='Starred'>Starred</a></li>");
