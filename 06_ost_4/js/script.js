window.addEventListener('load', function(){
	console.log('You are at '+window.location);

const button = document.querySelector('button');
const par = document.querySelector('p');

 let state = 'none';

button.addEventListener('click', function(){
    if(state == 'none'){
        par.style.display = 'block';
        state = 'block';
    } else {
        par.style.display = 'none';
        state = 'none';
    }
});

	window.onscroll = () => {
		console.log('scroll work');
		if(window.scrollY >= 1000) {
			console.log('scrollY >= 1000');
		}
	}

	// context

console.log(this);

button.onclick = function() { //нельзя использовать стрелочную ф-ию
	console.log(this);		  // она работает в глобальном контексте (window)
	this.innerHTML = "Pressed";
}

});

