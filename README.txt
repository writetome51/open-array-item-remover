To include in your project:

import {PublicArrayItemRemover} from '@writetome51/public-array-item-remover';

The PublicArrayItemRemover class is a dependency of the PublicArray class
( package:  @writetome51/public-array ).

To instantiate, pass the actual array it will contain into its constructor:

let remove = new PublicArrayItemRemover( [item1, item2, item3,...] );

You can also reset the array by accessing the class 'data' property:

remove.data = [1,2,3,4,...];

PublicArrayItemRemover has methods that all remove items from the array and return the class instance.
These are all of them:


	// index can be negative or positive.
	byIndex(index): this


	// indexes can be negative or positive.
	byIndexes(indexes): this


	// startingIndex can be negative or positive.  Removes adjacent items.
	adjacentAt(startingIndex, numItemsToRemove): this


	// info = {value: anyExceptObject,  offset: integer,  howMany: integer greater than zero}
	// Only affects first instance of info.value
	adjacentToValue(info): this


    // Removes numItemsToRemove from array's beginning.
	head(numItemsToRemove): this


    // Removes numItemsToRemove from array's end.
	tail(numItemsToRemove): this


    // Removes everything between numItemsToKeepAtEachEnd.
    // i.e., if numItemsToKeepAtEachEnd = 2, then only the first 2 items and last 2 items will remain.
	between(numItemsToKeepAtEachEnd): this


	// Removes first instance of value.  value cannot be object (that applies to all functions here
	// with a parameter called 'value').
	firstOf(value): this


    // Removes first instance of each value.  values cannot contain object (that applies to all functions
    // here with a parameter called 'values').
	firstOfEach(values: any[]): this


	// Removes all instances of value.
	allOf(value): this


    // Removes all instances of each value.
	allOfEach(values: any[]): this


	// Removes all items after first instance of value.
	allAfterFirst(value: any): this


	// Removes all items before first instance of value.
	allBeforeFirst(value: any): this


    // Removes all items after last instance of value.
	allAfterLast(value): this


    // Removes all items before last instance of value.
	allBeforeLast(value): this


	duplicates(): this


	// testFunction has same signature as callback passed to Array.filter():
	// if currentItem passes test, it is removed.
	byTest(testFunction: (currentItem, currentIndex?, array?) => boolean): this


    // type can be any of the strings listed:
	byType(type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'): this

