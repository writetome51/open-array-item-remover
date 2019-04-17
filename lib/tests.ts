import { PublicArrayRemover } from './index';
import { arraysMatch } from '@writetome51/arrays-match';


let remove = new PublicArrayRemover([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let otherArr = remove.data;


// Test 1
let obj = remove.byIndex(-1);
if (arraysMatch(remove.data, [1, 2, 3, 4, 5, 6, 7, 8, 9])) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 1A
if (obj.className && obj.className === 'PublicArrayRemover' &&
	arraysMatch(remove.data, obj.data)) console.log('test 1A passed');
else console.log('test 1A FAILED');


//Test 2
if (arraysMatch(remove.data, otherArr)) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 2A
remove.byIndexes([-1, 0, 3]);
if (arraysMatch(remove.data, [2, 3, 5, 6, 7, 8])) console.log('test 2A passed');
else console.log('test 2A FAILED');


//Test 2B
if (arraysMatch(remove.data, otherArr)) console.log('test 2B passed');
else console.log('test 2B FAILED');


// Test 3
remove.data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
otherArr = remove.data;
remove.adjacentAt(-3, 2);
if (arraysMatch(remove.data, [1, 2, 3, 4, 5, 6, 9])) console.log('test 3 passed');
else console.log('test 3 FAILED');


//Test 4
if (arraysMatch(remove.data, otherArr)) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5
remove.adjacentToValue({value: 4, howMany: 3, offset: -3});
if (arraysMatch(remove.data, [4, 5, 6, 9])) console.log('test 5 passed');
else console.log('test 5 FAILED');


//Test 6
if (arraysMatch(remove.data, otherArr)) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7
remove.head(2);
if (arraysMatch(remove.data, [6, 9])) console.log('test 7 passed');
else console.log('test 7 FAILED');


//Test 8
if (arraysMatch(remove.data, otherArr)) console.log('test 8 passed');
else console.log('test 8 FAILED');


// Test 9
remove.tail(2);
if (arraysMatch(remove.data, [])) console.log('test 9 passed');
else console.log('test 9 FAILED');


//Test 10
if (arraysMatch(remove.data, otherArr)) console.log('test 10 passed');
else console.log('test 10 FAILED');


// Test 11
remove.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
otherArr = remove.data;
remove.between(4);
if (arraysMatch(remove.data, [1, 2, 3, 4, 7, 8, 9, 10])) console.log('test 11 passed');
else console.log('test 11 FAILED');


//Test 12
if (arraysMatch(remove.data, otherArr)) console.log('test 12 passed');
else console.log('test 12 FAILED');


// Test 13
remove.data = [1, 2, 3, 4, 1, 2, 3, 4];
otherArr = remove.data;
remove.firstOf(4);
if (arraysMatch(remove.data, [1, 2, 3, 1, 2, 3, 4])) console.log('test 13 passed');
else console.log('test 13 FAILED');


//Test 14
if (arraysMatch(remove.data, otherArr)) console.log('test 14 passed');
else console.log('test 14 FAILED');


// Test 15
remove.data = [1, 2, 3, 4, 1, 2, 3, 4];
otherArr = remove.data;
remove.firstOfEach([1, 2, 3, 4]);
if (arraysMatch(remove.data, [1, 2, 3, 4])) console.log('test 15 passed');
else console.log('test 15 FAILED');


//Test 16
if (arraysMatch(remove.data, otherArr)) console.log('test 16 passed');
else console.log('test 16 FAILED');


// Test 17
remove.data = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
otherArr = remove.data;
remove.allOf(1);
if (arraysMatch(remove.data, [2, 3, 4, 2, 3, 4, 2, 3, 4])) console.log('test 17 passed');
else console.log('test 17 FAILED');


//Test 18
if (arraysMatch(remove.data, otherArr)) console.log('test 18 passed');
else console.log('test 18 FAILED');


// Test 19
remove.data = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
otherArr = remove.data;
remove.allOfEach([1, 2, 3, 4]);
if (arraysMatch(remove.data, [])) console.log('test 19 passed');
else console.log('test 19 FAILED');


//Test 20
if (arraysMatch(remove.data, otherArr)) console.log('test 20 passed');
else console.log('test 20 FAILED');


// Test 21
remove.data = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
otherArr = remove.data;
remove.allAfterFirst(4);
if (arraysMatch(remove.data, [1, 2, 3, 4])) console.log('test 21 passed');
else console.log('test 21 FAILED');


//Test 22
if (arraysMatch(remove.data, otherArr)) console.log('test 22 passed');
else console.log('test 22 FAILED');


// Test 23
remove.data = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
otherArr = remove.data;
remove.allBeforeFirst(4);
if (arraysMatch(remove.data, [4, 1, 2, 3, 4, 1, 2, 3, 4])) console.log('test 23 passed');
else console.log('test 23 FAILED');


//Test 24
if (arraysMatch(remove.data, otherArr)) console.log('test 24 passed');
else console.log('test 24 FAILED');


// Test 25
remove.data = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
otherArr = remove.data;
remove.allAfterLast(1);
if (arraysMatch(remove.data, [1, 2, 3, 4, 1, 2, 3, 4, 1])) console.log('test 25 passed');
else console.log('test 25 FAILED');


//Test 26
if (arraysMatch(remove.data, otherArr)) console.log('test 26 passed');
else console.log('test 26 FAILED');


// Test 27
remove.data = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
otherArr = remove.data;
remove.allBeforeLast(1);
if (arraysMatch(remove.data, [1, 2, 3, 4])) console.log('test 27 passed');
else console.log('test 27 FAILED');


//Test 28
if (arraysMatch(remove.data, otherArr)) console.log('test 28 passed');
else console.log('test 28 FAILED');


// Test 29
remove.data = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
otherArr = remove.data;
remove.duplicates();
if (arraysMatch(remove.data, [1, 2, 3, 4])) console.log('test 29 passed');
else console.log('test 29 FAILED');


//Test 30
if (arraysMatch(remove.data, otherArr)) console.log('test 30 passed');
else console.log('test 30 FAILED');


// Test 31
remove.data = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
otherArr = remove.data;
remove.byTest((item, index, arr) => {
	return (item === 1 && (index === 4));
});
if (arraysMatch(remove.data, [1, 2, 3, 4, 2, 3, 4, 1, 2, 3, 4])) console.log('test 31 passed');
else console.log('test 31 FAILED');


//Test 32
if (arraysMatch(remove.data, otherArr)) console.log('test 32 passed');
else console.log('test 32 FAILED');


// Test 33
remove.data = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, (item) => item === 1];
otherArr = remove.data;
// Save this for test 35:
obj = remove.byType('function');
if (arraysMatch(remove.data, [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4])) console.log('test 33 passed');
else console.log('test 33 FAILED');


//Test 34
if (arraysMatch(remove.data, otherArr)) console.log('test 34 passed');
else console.log('test 34 FAILED');


//Test 35: did .byType() return class instance in test 33?
if (obj.className && obj.className === 'PublicArrayRemover' &&
	arraysMatch(remove.data, obj.data))
	console.log('test 35 passed');
else console.log('test 35 FAILED');


// Test 36
remove.data = [[], 1, '', false, null, undefined];
otherArr = remove.data;
// Save this for test 35:
obj = remove.byType('null');
if (arraysMatch(remove.data, [[], 1, '', false, undefined])) console.log('test 36 passed');
else console.log('test 36 FAILED');


// Test 37
remove.data = [[], {}, 1, '', false, null, undefined];
otherArr = remove.data;
// Save this for test 35:
obj = remove.byType('object');
if (arraysMatch(remove.data, [ 1, '', false, null, undefined])) console.log('test 37 passed');
else console.log('test 37 FAILED');
