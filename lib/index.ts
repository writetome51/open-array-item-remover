import { PublicArrayContainer } from '@writetome51/public-array-container';
import { _publicArrayContainer_byType_implementation }
	from '@writetome51/public-array-container-by-type-implementation';
import { removeAllOf, removeAllOfEach, removeFirstOf, removeFirstOfEach }
	from '@writetome51/array-remove-all-of-first-of';
import { removeAdjacentAt } from '@writetome51/array-remove-adjacent-at';
import { removeByIndex } from '@writetome51/array-remove-by-index';
import { removeByIndexes } from '@writetome51/array-remove-by-indexes';
import { removeHead, removeTail } from '@writetome51/array-remove-head-tail';
import { removeBetween } from '@writetome51/array-remove-between';
import { removeAllAfterFirst, removeAllAfterLast } from '@writetome51/array-remove-all-after';
import { removeAllBeforeFirst, removeAllBeforeLast } from '@writetome51/array-remove-all-before';
import { removeDuplicates } from '@writetome51/array-remove-duplicates';
import { removeAdjacentToValue } from '@writetome51/array-remove-adjacent-to-value';
import { removeByTest } from '@writetome51/array-remove-by-test';
import { IAdjacentToValueInfo } from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';


export class PublicArrayRemover extends PublicArrayContainer {


	// These functions modify the array and return the class instance.


	// index can be negative or positive.
	byIndex(index): this {
		return this._returnThis_after(removeByIndex(index, this.data));
	}


	// indexes can be negative or positive.
	byIndexes(indexes): this {
		return this._returnThis_after(removeByIndexes(indexes, this.data));
	}


	// startingIndex can be negative or positive.
	adjacentAt(startingIndex, numItemsToRemove): this {
		return this._returnThis_after(removeAdjacentAt(startingIndex, numItemsToRemove, this.data));
	}


	// info = {value: anyExceptObject,  offset: integer,  howMany: integer greater than zero}
	adjacentToValue(info: IAdjacentToValueInfo): this {
		return this._returnThis_after(removeAdjacentToValue(info, this.data));
	}


	head(numItemsToRemove): this {
		return this._returnThis_after(removeHead(numItemsToRemove, this.data));
	}


	tail(numItemsToRemove): this {
		return this._returnThis_after(removeTail(numItemsToRemove, this.data));
	}


	between(numItemsToKeepAtEachEnd): this {
		return this._returnThis_after(removeBetween(numItemsToKeepAtEachEnd, this.data));
	}


	// value cannot be object (that applies to all functions here with a parameter called 'value').
	firstOf(value): this {
		return this._returnThis_after(removeFirstOf(value, this.data));
	}


	// values cannot contain object (that applies to all functions here with a parameter
	// called 'values'). Arrays are ok, as long as they don't contain objects.
	firstOfEach(values: any[]): this {
		return this._returnThis_after(removeFirstOfEach(values, this.data));
	}


	allOf(value): this {
		return this._returnThis_after(removeAllOf(value, this.data));
	}


	allOfEach(values: any[]): this {
		return this._returnThis_after(removeAllOfEach(values, this.data));
	}


	allAfterFirst(value: any): this {
		return this._returnThis_after(removeAllAfterFirst(value, this.data));
	}


	allBeforeFirst(value: any): this {
		return this._returnThis_after(removeAllBeforeFirst(value, this.data));
	}


	allAfterLast(value): this {
		return this._returnThis_after(removeAllAfterLast(value, this.data));
	}


	allBeforeLast(value): this {
		return this._returnThis_after(removeAllBeforeLast(value, this.data));
	}


	duplicates(): this {
		return this._returnThis_after(removeDuplicates(this.data));
	}


	byTest(testFunction: (currentItem, currentIndex?, array?) => boolean): this {
		return this._returnThis_after(removeByTest(testFunction, this.data));
	}


	byType(
		type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined' | 'null'
	): this {

		return _publicArrayContainer_byType_implementation(type, this);
	}


}
