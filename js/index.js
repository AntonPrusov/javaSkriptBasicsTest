
/*1. Напишите функцию, которая возвращает массив, очищенный от пустых значений, 
не меняя исходный

var data = [0, '0', '', null, {}, [], [1, 2, 3]];
console.log( clean(data) ); // [0, '0', null, [1, 2, 3]]*/

var clean = function(array)  {
	let result = [];
	for (i = 0; i < array.length; i++) {	
		if (typeof array[i] == "string") {
			if (array[i] !== '') {
				result[result.length] = array[i];
			}
		}	
		if (typeof array[i] == "number") {
			result[result.length] = array[i];
		}
		if (typeof array[i] == "object") {
			if (array[i] === null) {
				result[result.length] = array[i];
			}
			else if (Object.keys(array[i]).length !== 0  & !Array.isArray(array[i])) {
				result[result.length] = array[i];
			}	
			else if (Array.isArray(array[i])) {
				if (array[i].length !== 0) {
					result[result.length] = array[i];
				}
			}
		}			
		if (typeof array[i] == "boolean") {
			result[result.length] = array[i];
		}
		if (typeof array[i] == "symbol") {
			result[result.length] = array[i];
		}
		if (typeof array[i] == "function") {
			result[result.length] = array[i];
		}
	} 
	return result;
}

var data = [0, '0', '', null, {}, undefined, {name: 'anton'},[], [1, 2, 3]];
console.log( clean(data) ); // [0, '0', null, [1, 2, 3]]*/

/*2. Напишите функцию-аналог splice, не используя никакие методы массива.

var arr = [1, 2, 4, 3];
console.log(splice(arr, 2, 1)); // [4]
console.log(arr); // [1, 2, 3]
splice(arr, 2, 0, 100, 200, 300);
console.log(arr); // [1, 2, 100, 200, 300, 3]*/

var splice = function(arr, arg1, arg2, ...argsToAdd) {
	if (arg2 > arr.length - arg1) return
	else {
		let spliced = [];
		for (i = 0; i < arr.length; i++) {
			if (i == arg1) {
				for (c = 0; c < arg2; c++) {
					spliced[spliced.length] = arr[i];	
					for (k=i; k <= arr.length - i; k++) {
						arr[k] = arr[k+1];
					}				
				}
			arr.length -= arg2;
			} 
		}		
		for (j = 0; j < argsToAdd.length; j++) {
		argsToAdd.reverse();
			for (l = 0; l < arr.length - arg1; l++) {
			    arr[arr.length-l] = arr[arr.length-(l+1)];
		     }
			arr[arg1] = argsToAdd[j];
		}
		return spliced;
	}
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(splice(arr, 2, 3)); // [4]
console.log(arr); // [1, 2, 3]
splice(arr, 2, 0, 300, 400, 500);
console.log(arr); // [1, 2, 100, 200, 300, 3]

/*3. Напишите функцию, которая возвращает сумму всех чисел, переданных в 
качестве аргументов, число которых не ограничено. Функция работает только с 
числами (включая строковые). Если какой-то из параметров - массив, то к сумме 
добавляется также сумма значений этого массива (если какое-либо из значений 
этого массива также является массивом, то к результату добавляется также 
и сумма его значений, и так далее).

var sum = getSum(1, '1', 'one', [2, '2', 'two']);
console.log( sum ); // 6*/

var getSum = function () {
	let result = 0;
	let arr = arguments;
	for (i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			result += getSum(...arr[i]);
 		}
 		if (!isNaN(+arr[i])) {
			result += +arr[i];
		}
	}
	return result;
}

var sum = getSum(1, '1', 'one', [2, [5, 10], '2', 'two'], 3, '10', 30);
console.log( sum );
/*Для решения примера подходит, но вешает страницу если передавать сложный массив.*/



var arrays = [1, '1', 'one', [2, [5, [15, [10, 20, [7, '13']],21]], '2', 'two'], 3, [7, 3], '10', 30];

var toSimpleArray = function(array) {
	var newArr = [];
	for (var i = 0; i < array.length; i++)
		if (!Array.isArray(array[i])) {
			newArr.push(array[i]);
		}
		else {
			newArr = newArr.concat(toSimpleArray(array[i]));
		}
	return newArr;
}

var getsum = function(array) {
	let result = 0;
	for (i = 0; i < array.length; i++) {
		if (!isNaN(+array[i])) {
			result += +array[i];
		}
	}
	return result;
}

console.log( getsum( toSimpleArray(arrays) ) );
/*Полностью рабочий вариант, но сложный массив передавать приходится через переменную*/


/*4. Напишите функцию, которая рисует в указанном HTML-контейнере диаграмму 
из данных, представляющих из себя массив объектов: каждый объект имеет свойства 
color и value, означающих соответственно цвет столбца и его высоту.

var data1 = [ {color: '#DE9797', value: 70}, ... ];
buildDiagram(data1, '#diagram1');
var data2 = [ {color: '#97DEDA', value: 20}, ... ];
buildDiagram(data2, '#diagram2');*/

$('.diagrams').css({
	'display': 'flex',
	'flexDirection': 'column',	
});

$('.diagram').css({
	'display': 'flex',
	'flexDirection': 'row',
	'justifyContent': 'center',
	'alignItems': 'flex-end',
	'margin': '20px auto',
    'background-color' : '#eee',
    'padding' : '10px 10px',
    'border' : '1px solid black',
    'box-shadow' : '0 0 10px ', 
    'max-width' : '90%'
});

var buildDiagram = function(arr, way) {
	let array = arr;
	for (i = 0; i < arr.length; i++) {
		let columnConteiner = $('<div>').css({
			'margin' : '0 1%',
			'text-align' : 'center',
			'width': '100px',
		}).appendTo(way);
		let columnText = $('<span>').text(array[i].value + '%').appendTo(columnConteiner);
		let column = $('<div>').css({			
			'height': array[i].value,
			'backgroundColor': array[i].color,   	     
		    'border' : '1px solid'
		}).appendTo(columnConteiner);
	}
}

var data1 = [ {color: '#DE9797', value: 70}, {color: 'yellow', value: 7}, {color: 'green', value: 90}, {color: 'orange', value: 50}, {color: 'pink', value: 35}];
buildDiagram(data1, '#diagram1');

var data2 = [ {color: '#97DEDA', value: 60}, {color: 'red', value: 30}, {color: 'green', value: 40} ];
buildDiagram(data2, '#diagram2');

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
	[1, 2, 9, 10, 15, 16],
	[1, 2, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16],
	[1, 2, 4, 5, 6, 7, 9, 12, 13, 16],
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 16],
	[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 14, 15, 16],
	[2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15],
	[2, 3, 4, 7, 8, 12, 13],
	[2, 3, 7, 8],
	[2, 3, 4, 5, 7, 8, 9, 10],
	[2, 3, 4, 5, 7, 8, 9, 10],
];

var buildTable = function () {
	let myTable = $('<table>').attr('id', 'myTable').css({
		'margin' : '20px auto',
		'border-spacing' : '0 0',
		'border-collapse' : 'collapse',
		'box-shadow' : '0 0 10px '
	}).appendTo('#table');
	for (i = 1; i <= 12; i++) {
		let tr = $('<tr>').appendTo(myTable);
		for (j = 1; j <= 16; j++) {
			$('<td>').css({
				'height' : '15px',
				'width' : '15px',
				'background-color' : '#eee',
				'border' : '1px solid grey'	
			}).appendTo(tr);
		}
	}
	for (i = 0; i < points.length; i++) {
		for (j = 0; j < points[i].length; j++) {
    		$(`#myTable tr:nth-child(${i+1}) td:nth-child(${points[i][j]})`).css('background-color', '#000');
		}
	}	
}

buildTable();