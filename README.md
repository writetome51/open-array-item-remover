# PublicArrayRemover

An array-manipulating Typescript/Javascript class with methods that remove items   
from the array.

## Installation

You must have npm installed first.  Then, in the command line:

```bash
npm install @writetome51/public-array-remover
```

## Loading

     // if using Typescript:
    import {PublicArrayRemover} from '@writetome51/public-array-remover';
     // if using ES5 Javascript:
    var PublicArrayRemover = 
            require('@writetome51/public-array-remover').PublicArrayRemover;


## Instantiation

    let remove = new PublicArrayRemover( [item1, item2, item3,...] );
    // Or, instantiate with an empty array:
    let remove = new PublicArrayRemover();

You can also reset the array by accessing the class `.data` property:

    remove.data = [1,2,3,4,...];


## Properties

    data : any[] (read-writable) // the actual array

    className: string (read-only)


## Methods
```
byIndex(index): this
    // removes single item, identified by index.  index can be negative or positive.
	
byIndexes(indexes): this
    // removes items identified by indexes.  indexes can be negative or positive.

adjacentAt(startingIndex, numItemsToRemove): this
    // Removes adjacent items.  startingIndex can be negative or positive.
    
head(numItemsToRemove): this
    // Removes numItemsToRemove from beginning of this.data .

tail(numItemsToRemove): this
    // Removes numItemsToRemove from end of this.data .

between(numItemsToKeepAtEachEnd): this
    // Removes everything between numItemsToKeepAtEachEnd.
    // i.e., if numItemsToKeepAtEachEnd = 2, then only the first 2 items and 
    // last 2 items will remain.

```

NOTICE:  For all the functions below, any parameter called `value` cannot be an object,  
and any parameter called `values` cannot contain an object.  
This does not include arrays. Arrays are OK, as long as they don't contain objects.
```

adjacentToValue(info): this
    /****************
    Removes adjacent items including, or near, a particular value.
    Only applies to the first instance of value found in array.
    The parameter 'info' is an object that looks like this:
    {
        value: any except object (the value to search for in the array),
        offset: integer (tells function where, in relation to value, to begin 
               selecting adjacent items to remove.  If offset is zero, the 
               selection will begin with value.)
        howMany: integer greater than zero (it's how many adjacent items to remove)
    }
        
    Example:
        let remove = new PublicArrayRemover( [1,2,3,4,5,6,7,8,9,10] );
        remove.adjacentToValue({value:5, offset: -2, howMany:3});
        // remove.data is now [1,2,6,7,8,9,10]
    ****************/


firstOf(value): this
    // Removes first instance of value.

firstOfEach(values: any[]): this
    // Removes first instance of each value.

allOf(value): this
    // Removes all instances of value.

allOfEach(values: any[]): this
    // Removes all instances of each value.

allAfterFirst(value: any): this
    // Removes all items after first instance of value.

allBeforeFirst(value: any): this
    // Removes all items before first instance of value.

allAfterLast(value): this
    // Removes all items after last instance of value.

allBeforeLast(value): this
    // Removes all items before last instance of value.

duplicates(): this

byTest(testFunction: (currentItem, currentIndex?, array?) => boolean): this
    // testFunction has same signature as callback passed to Array.filter().
    // if currentItem passes test, it is removed.

byType(
    type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'
): this
    // type can be any of the strings listed.


protected   _createGetterAndOrSetterForEach(
		propertyNames: string[],
		configuration: IGetterSetterConfiguration
	   ) : void
    /*********************
    Use this method when you have a bunch of properties that need getter and/or 
    setter functions that all do the same thing. You pass in an array of string 
    names of those properties, and the method attaches the same getter and/or 
    setter function to each property.
    IGetterSetterConfiguration is this object:
    {
        get_setterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function,
	    // get_setterFunction takes the property name as first argument and 
	    // returns the setter function.  The setter function must take one 
	    // parameter and return void.
	    
        get_getterFunction?: (
             propertyName: string, index?: number, propertyNames?: string[]
        ) => Function
	    // get_getterFunction takes the property name as first argument and 
	    // returns the getter function.  The getter function must return something.
    }
    *********************/ 


protected   _returnThis_after(voidExpression: any) : this
    // voidExpression is executed, then function returns this.
    // Even if voidExpression returns something, the returned data isn't used.

protected   _runMethod_and_returnThis(
    callingObject, 
    method: Function, 
    methodArgs: any[], 
    additionalAction?: Function // takes the result returned by method as an argument.
) : this
```

## Inheritance Chain

PublicArrayRemover<--[PublicArrayContainer](https://github.com/writetome51/public-array-container#publicarraycontainer)<--[BaseClass](https://github.com/writetome51/typescript-base-class#baseclass)


## License
[MIT](https://choosealicense.com/licenses/mit/)