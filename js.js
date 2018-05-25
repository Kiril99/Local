var but = document.getElementById('but');

but.onclick = function() {
    var input = document.getElementById('inp').value;
    localStorage.setItem('name', input);

}