let x = (39%10)+1;
console.log(x);

document.addEventListener('click', function() {
    let element = document.getElementById('10');
    element.style.backgroundColor = element.style.backgroundColor === 'cadetblue' ? 'plum' : 'cadetblue';
    element.style.color = element.style.color === 'purple' ? 'blue' : 'purple';
});

document.addEventListener('click', function() {
    element = document.querySelector('ol.films li');
    element.style.backgroundColor = element.style.backgroundColor === 'lemonchiffon' ? 'tan' : 'lemonchiffon';
    element.style.color = element.style.color === 'purple' ? 'blue' : 'purple';
});

function openForm() {
    document.getElementById("form").style.display = "block";
}

function closeForm() {
    document.getElementById("form").style.display = "none";
}

submit.onclick = function(){ 
    closeForm();
    var val = document.getElementById('url').value;
    var img_div = document.getElementById('url_img');
    var pic = new Image();
    pic.src = 'https://italy4.me/wp-content/uploads/2014/08/озеро-Комо-Италия.jpg';
    img_div.appendChild(pic);
    
}