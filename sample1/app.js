function calc() {
	text01 = document.getElementById('num1');
	text02 = document.getElementById('num2');

	n1 = parseInt(text01.value);
	n2 = parseInt(text02.value);

	sum = n1 + n2;
	kekka = document.getElementById('kekka');
	kekka.innerHTML = sum;

	if ( sum > 10 ) {
		kekka.style.color = 'red';
	} else {
		kekka.style.color = 'blue';
	}
}
