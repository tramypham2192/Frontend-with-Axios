console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

//event listener on the cat picture
const picture = document.querySelector('#catPicture');
picture.addEventListener('mouseover', () => {
	alert("You have a good taste!");
})