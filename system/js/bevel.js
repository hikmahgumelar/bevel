//menggunakan exec() untuk pengganti Utils.run_command
var exec = require('child_process').exec;

function Run1() {
	exec("xdg-open http://blankonlinux.or.id");

}
function Run2() {
	exec("xdg-open http://panduan.blankonlinux.or.id");
}
function Run3() {
	exec("xdg-open https://facebook.com/groups/blankonlinux");
}
function Run4() {
	exec("xdg-open https://twitter.com/BlankOnLinux");
}

function Play(){ exec("audacious -p");}
function Stop(){ exec("audtool shutdown");}
function Prev(){ exec("audacious -r");}
function Next(){ exec("audacious -f");}
function Pause(){ exec("audacious -u");}
function Repeat(){ exec("audtool --playlist-repeat-toggle");}
//function Shuffle(){exec("audtool --playlist-shuffle-toggle");}

$(document).ready(function() {
	$('#repeat').click(function(){
		if($('#repeat').hasClass("selected")){ $('#repeat').removeClass("selected");}
		else{$('#repeat').addClass("selected");}
	});
});

// gnome control center

function RunWallpaper() {
	exec("gnome-control-center background");
}
function RunAccount() {
	exec("gnome-control-center user-accounts");
}
function RunSound() {
	exec("gnome-control-center sound");
}
function RunInfo() {
	exec("gnome-control-center info");
}
function RunBluetooth() {
	exec("gnome-control-center bluetooth");
}
function RunRegional() {
	exec("gnome-control-center region");
}
function RunKeyboard() {
	exec("gnome-control-center keyboard");
}
function RunPower() {
	exec("gnome-control-center power");
}
function RunDate() {
	exec("gnome-control-center datetime");
}
function RunDisplay() {
	exec("gnome-control-center display");
}
function RunMouse() {
	exec("gnome-control-center mouse");
}
function RunNetwork() {
	exec("gnome-control-center network");
}
function RunOnline() {
	exec("gnome-control-center online-accounts");
}
function RunPrinter() {
	exec("system-config-printer");
}
function RunShare() {
	exec("gnome-control-center sharing");
}
