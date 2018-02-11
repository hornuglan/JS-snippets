function fib(n){
	if (n >= 2) {
		return fib(n-1) + fib(n-2);
	}
	else {
return n
	}
}


function fib1(n) {
	var a = 1;
	var b = 1;
	for (var i = 3; i <= n; i++) {
		var c = a + b;
		a = b;
		b = c;
	}
	return b;
}
 
var x = Math.sqrt(5);
var y = (1 + x)/2;
var z = (1 - x)/2;
function fib2(n) {
	return Math.round((y**n - z**n)/x);
}

function performanceCalc(fn, number) {
    const start = process.hrtime()
    const result = fn(number)
	const end = process.hrtime()
	
	const nanoStart = (start[0] * 1e9) + start[1];
	const nanoEnd = (end[0] * 1e9) + end[1];
    console.log(`Result: ${result}. Execution Time: ${nanoEnd - nanoStart} nanos`);
}
console.log ('Время работы с рекурсией: ');
performanceCalc(fib, 10)
console.log ();

console.log ('Время работы цикла: ');
performanceCalc(fib1, 50)
console.log ();

console.log ('Время работы формулы Бине: ');
performanceCalc(fib2, 50)
console.log ();

