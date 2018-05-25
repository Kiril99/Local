 
  function local() {
	var loc = localStorage.getItem('name');

	var url = 'https://api.github.com/users/' + loc;
	console.log(url);


 var xhr = new XMLHttpRequest();

 xhr.open('GET', url, false);

 xhr.send();


 if (xhr.status == 200){
 	var json = JSON.parse(xhr.responseText);
 	var log = json.login;
 	var avat = json.avatar_url;
 	var public = json.public_repos;
 	var type = json.type;
 	var link = json.html_url;

 	obj(log,avat,public,type,link);

 }
}
local();


function obj(login, avatar,pub,typ,link){
	var photo = document.getElementById('photo');
	photo.innerHTML = '<img src=' + avatar + '>';


	var text = document.getElementById('text');
		text.innerHTML ='<h1>' + 'Login: '+ login + '</h1>';
		text.innerHTML +='<h1>' + 'Publc respose: '+ pub + '</h1>';
		text.innerHTML +='<h1>' + 'Type: '+ typ + '</h1>';
		text.innerHTML +='<a href='+ link +'>' + "Git Url" + '</a>';

}
