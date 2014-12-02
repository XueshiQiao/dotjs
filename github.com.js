/*
* Use Github's "Clone in Desktop" button to open Tower.app without the need of having the Github.app installed 
* Steal from https://github.com/gdelmas/GithubTower
*/
debugger;
var buttonElement = document.querySelector("a[data-url^='github-mac://']");

if ( buttonElement != null ) {
    buttonElement.href = buttonElement.getAttribute("data-url");
}


//