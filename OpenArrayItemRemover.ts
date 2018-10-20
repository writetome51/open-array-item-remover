import { OpenArrayContainer } from '@writetome51/open-array-container/OpenArrayContainer';
import { removeAllOf, removeAllOfEach }
	from '@writetome51/array-remove-all-of-first-of/removeAllOf_removeAllOfEach';
import { removeFirstOf, removeFirstOfEach }
	from '@writetome51/array-remove-all-of-first-of/removeFirstOf_removeFirstOfEach';
import { removeAdjacentAt } from '@writetome51/array-removers-basic/removeAdjacentAt';
import { removeItem } from '@writetome51/array-removers-basic/removeItem';
import { removeHead } from '@writetome51/array-removers-basic/removeHead';
import { removeTail } from '@writetome51/array-removers-basic/removeTail';
import { removeMiddle } from '@writetome51/array-removers-basic/removeMiddle';
import { removeAllAfterFirst } from '@writetome51/array-remove-all-after-before/removeAllAfterFirst';
import { removeAllAfterLast } from '@writetome51/array-remove-all-after-before/removeAllAfterLast';
import { removeAllBeforeFirst } from '@writetome51/array-remove-all-after-before/removeAllBeforeFirst';
import { removeAllBeforeLast } from '@writetome51/array-remove-all-after-before/removeAllBeforeLast';
import { removeDuplicates } from '@writetome51/array-remove-duplicates/removeDuplicates';
import { removeAdjacentToValue } from '@writetome51/array-remove-adjacent-to-value/removeAdjacentToValue';
import { IAdjacentToValueInfo } from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';


export class OpenArrayItemRemover extends OpenArrayContainer {


	constructor(data = []) {
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


	// info = {value: anyExceptObject, offset: number, howMany: number}
	adjacentToValue(info: IAdjacentToValueInfo): this {
		return this.returnThis_after(removeAdjacentToValue(info, this.data));
	}


	head(numItemsToRemove): this {
		return this.returnThis_after(removeHead(numItemsToRemove, this.data));
	}


	tail(numItemsToRemove): this {
		return this.returnThis_after(removeTail(numItemsToRemove, this.data));
	}


	middle(numItemsToKeepAtEachEnd): this {
		return this.returnThis_after(removeMiddle(numItemsToKeepAtEachEnd, this.data));
	}


	// value cannot be object.
	firstOf(value): this {
		return this.returnThis_after(removeFirstOf(value, this.data));
	}


	firstOfEach(values: any[]): this {
		return this.returnThis_after(removeFirstOfEach(values, this.data));
	}


	// value cannot be object.
	allOf(value): this {
		return this.returnThis_after(removeAllOf(value, this.data));
	}


	allOfEach(values: any[]): this {
		return this.returnThis_after(removeAllOfEach(values, this.data));
	}


	// value cannot be object.
	allAfterFirst(value: any): this {
		return this.returnThis_after(removeAllAfterFirst(value, this.data));
	}


	// value cannot be object.
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


	// testFunction has same signature as callback passed to array.filter():
	byTest(testFunction): this {
		return this.returnThis_after(getAndRemoveFilteredResults(testFunction, this.data));
	}


	byType(type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'): any[] {
		if (type === 'array') {
			return this.byTest((item) => {
				return (isArray(item));
			});
		}
		else {
			return this.byTest((item) => {
				return (typeof item === type);
			});
		}
	}



}
