/*1. Напишите функцию, которая возвращает массив, очищенный от пустых значений, 
не меняя исходный

var data = [0, '0', '', null, {}, [], [1, 2, 3]];
console.log( clean(data) ); // [0, '0', null, [1, 2, 3]]*/

var clean = function(array)  {

	for (i = 0; i < array.length; i++) {		
		delete array[array.indexOf("")];
		if (Array.isArray(array[i])) {
			if (array[i].length === 0) {
				array.splice(i, 1);
			}
		}
		if (array[i] == {}) {
			if (Object.keys(array[i]).length == 0) {
				array.splice(i, 1);
			}
		}
	} 
	return array;
}

var data = [0, '0', '', null, {}, [], [1, 2, 3]];
console.log( clean(data) ); // [0, '0', null, [1, 2, 3]]*/

/*2. Напишите функцию-аналог splice, не используя никакие методы массива.

var arr = [1, 2, 4, 3];
console.log(splice(arr, 2, 1)); // [4]
console.log(arr); // [1, 2, 3]
splice(arr, 2, 0, 100, 200, 300);
console.log(arr); // [1, 2, 100, 200, 300, 3]*/

var splice = function(arr, arg1, arg2, ...rest) {
	for (i = 0; i < arr.length; i++) {

	}
}

/*3. Напишите функцию, которая возвращает сумму всех чисел, переданных в 
качестве аргументов, число которых не ограничено. Функция работает только с 
числами (включая строковые). Если какой-то из параметров - массив, то к сумме 
добавляется также сумма значений этого массива (если какое-либо из значений 
этого массива также является массивом, то к результату добавляется также 
и сумма его значений, и так далее).

var sum = getSum(1, '1', 'one', [2, '2', 'two']);
console.log( sum ); // 6*/



function getSum(a, b, ...rest) {
	var args = arguments;
	var result = [];
	for (i = 0; i < args.length; i++) {
		if (Array.isArray(args[i])) {
			return  getSum(args[i])
		}
		if (isNaN(+args[i]) === false) {
			result += args[i];
		}
	} return result;
}

var sum = getSum(1, '1', 'one', [2, '2', 'two']);
console.log( sum );

/*4. Напишите функцию, которая рисует в указанном HTML-контейнере диаграмму 
из данных, представляющих из себя массив объектов: каждый объект имеет свойства 
color и value, означающих соответственно цвет столбца и его высоту.

var data1 = [ {color: '#DE9797', value: 70}, ... ];
buildDiagram(data1, '#diagram1');
var data2 = [ {color: '#97DEDA', value: 20}, ... ];
buildDiagram(data2, '#diagram2');*/

var buildDiagram = function(arr, way) {
	let array = arr;
	for (i = 0; i < arr.length; i++) {
		let column = $('<div>').css({
			width: '100px',
			height: array[i].value,
			backgroundColor: array[i].color
		}).text(array[i].value + '%').appendTo(way);
	}
}

var data1 = [ {color: '#DE9797', value: 70}, {color: 'orange', value: 50}, {color: 'pink', value: 90}];
buildDiagram(data1, '#diagram1');

var data2 = [ {color: '#97DEDA', value: 60}, {color: 'red', value: 30}, {color: 'green', value: 40} ];
buildDiagram(data2, '#diagram2');

$('.diagrams').css({
	display: 'flex',
	flexDirection: 'column'
});
$('.diagram').css({
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'flex-end',
	margin: '20px'
});

/*5. Напишите функцию, которая изображает в теге HTML картинку по данным, 
представляющим из себя двумерный массив закрашенных точек.

var points = [
	[3, 4, 5],
	[2, 3, 9, 16],
	[1, 2, 9, 10, 15, 16],
	...
];*/

var points = [
	[3, 4, 5],
	[2, 3, 9, 16],
	[1, 2, 9, 10, 15, 16]
];


$('#table table').css({
	'margin' : '0 auto',
	'border-spacing' : '0 0',
	'border-collapse' : 'collapse'
});
$('#table table td').css({
	'height' : '10px',
	'width' : '10px',
	'background-color' : '#eee',
	'border' : '1px solid #000'	
});

var changeColor = function() {
	for (i = 0; i < points.length; i++) {
		for (j = 0; j < points[i].length; j++) {
			$('#table table tr:nth-child(i) td:nth-child(j)').css('background-color', '#102173')
		}
	}
}

changeColor();