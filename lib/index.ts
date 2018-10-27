import { isArray } from 'basic-data-handling/isArray_notArray';
import { errorIfNotString } from 'basic-data-handling/errorIfNotString';
import { PublicArrayContainer } from '@writetome51/public-array-container';
import { removeAllOf, removeAllOfEach } from '@writetome51/array-remove-all-of-first-of';
import { removeFirstOf, removeFirstOfEach } from '@writetome51/array-remove-all-of-first-of';
import { removeAdjacentAt } from '@writetome51/array-remove-adjacent-at/removeAdjacentAt';
import { removeItem } from '@writetome51/array-remove-item';
import { removeHead } from '@writetome51/array-remove-head-tail/removeHead';
import { removeTail } from '@writetome51/array-remove-head-tail/removeTail';
import { removeBetween } from '@writetome51/array-remove-between';
import { removeAllAfterFirst } from '@writetome51/array-remove-all-after-before';
import { removeAllAfterLast } from '@writetome51/array-remove-all-after-before';
import { removeAllBeforeFirst } from '@writetome51/array-remove-all-after-before';
import { removeAllBeforeLast } from '@writetome51/array-remove-all-after-before';
import { removeDuplicates } from '@writetome51/array-remove-duplicates/removeDuplicates';
import { removeAdjacentToValue } from '@writetome51/array-remove-adjacent-to-value/removeAdjacentToValue';
import { IAdjacentToValueInfo } from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';
import { removeFilteredResults } from '@writetome51/array-remove-filtered-results';


export class PublicArrayItemRemover extends PublicArrayContainer {


	constructor(data: any[] = []) {
		super(data);
	}


	// These functions modify the array and return the class instance.


	// index can be negative or positive.
	item(index): this {
		return this.returnThis_after(removeItem(index, this.data));
	}


	// startingIndex can be negative or positive.
	adjacentAt(startingIndex, numItemsToRemove): this {
		return this.returnThis_after(removeAdjacentAt(startingIndex, numItemsToRemove, this.data));
	}


	// info = {value: anyExceptObject,  offset: integer,  howMany: integer greater than zero}
	adjacentToValue(info: IAdjacentToValueInfo): this {
		return this.returnThis_after(removeAdjacentToValue(info, this.data));
	}


	head(numItemsToRemove): this {
		return this.returnThis_after(removeHead(numItemsToRemove, this.data));
	}


	tail(numItemsToRemove): this {
		return this.returnThis_after(removeTail(numItemsToRemove, this.data));
	}


	between(numItemsToKeepAtEachEnd): this {
		return this.returnThis_after(removeBetween(numItemsToKeepAtEachEnd, this.data));
	}


	// value cannot be object (that applies to all functions here with a parameter called 'value').
	firstOf(value): this {
		return this.returnThis_after(removeFirstOf(value, this.data));
	}


	// values cannot contain object (that applies to all functions here with a parameter
	// called 'values').
	firstOfEach(values: any[]): this {
		return this.returnThis_after(removeFirstOfEach(values, this.data));
	}


	allOf(value): this {
		return this.returnThis_after(removeAllOf(value, this.data));
	}


	allOfEach(values: any[]): this {
		return this.returnThis_after(removeAllOfEach(values, this.data));
	}


	allAfterFirst(value: any): this {
		return this.returnThis_after(removeAllAfterFirst(value, this.data));
	}


	allBeforeFirst(value: any): this {
		return this.returnThis_after(removeAllBeforeFirst(value, this.data));
	}


	allAfterLast(value): this {
		return this.returnThis_after(removeAllAfterLast(value, this.data));
	}


	allBeforeLast(value): this {
		return this.returnThis_after(removeAllBeforeLast(value, this.data));
	}


	duplicates(): this {
		return this.returnThis_after(removeDuplicates(this.data));
	}


	byTest(testFunction: (currentItem, currentIndex?, array?) => boolean): this {
		return this.returnThis_after(removeFilteredResults(testFunction, this.data));
	}


	byType(type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'): this {
		errorIfNotString(type);
		// @ts-ignore
		type = type.toLowerCase();
		if (type === 'array') return this.byTest((item) => isArray(item));

		else return this.byTest((item) => typeof item === type);
	}


}
