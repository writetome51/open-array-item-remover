To include in your project:

    import {PublicArrayRemover} from '@writetome51/public-array-remover';

PublicArrayRemover has methods that all remove items from the array and return the class instance.

To instantiate, pass the actual array it will contain into its constructor:

    let remove = new PublicArrayRemover( [item1, item2, item3,...] );

You can also reset the array by accessing the class 'data' property:

    remove.data = [1,2,3,4,...];

All the methods:


	// index can be negative or positive.
	byIndex(index): this


	// indexes can be negative or positive.
	byIndexes(indexes): this


	// startingIndex can be negative or positive.  Removes adjacent items.
	adjacentAt(startingIndex, numItemsToRemove): this


	adjacentToValue(info): this
	/********
    Explanation of adjacentToValue(info: IAdjacentToValueInfo): any[]
        Removes adjacent items including, or near, a particular value.
        Only applies to the first instance of value found in array.
        The parameter 'info' is an object that looks like this:
        	 {
                value: any except object (the value to search for in the array),
                offset: integer (tells function where, in relation to value, to begin selecting adjacent
                    items to remove/return.  If offset is zero, the selection will begin with value.)
                howMany: integer greater than zero (it's how many adjacent items to remove/return)
        	 }
        
        Example:
            let remove = new PublicArrayRemover( [1,2,3,4,5,6,7,8,9,10] );
            remove.adjacentToValue({value:5, offset: -2, howMany:3});
            // remove.data is now [1,2,6,7,8,9,10]
    *********/


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

