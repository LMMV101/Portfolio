
var menu = document.getElementById('Menu');
var button = document.getElementById('A');
var but = document.getElementById('B');

but.onclick = function(){
    
    if (menu.className === 'open') {
        //verkleinen als de class name open is
        menu.className = "closed";

    } else 
        //vergrooten als de classnaam closed is
        menu.className = "open"
        button.innerHTML =  'x'
};
