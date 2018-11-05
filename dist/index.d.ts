import { PublicArrayContainer } from '@writetome51/public-array-container';
import { IAdjacentToValueInfo } from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';


export declare class PublicArrayItemRemover extends PublicArrayContainer {
	constructor(data?: any[]);


	byIndex(index: any): this;


	byIndexes(indexes: any): this;


	adjacentAt(startingIndex: any, numItemsToRemove: any): this;


	adjacentToValue(info: IAdjacentToValueInfo): this;


	head(numItemsToRemove: any): this;


	tail(numItemsToRemove: any): this;


	between(numItemsToKeepAtEachEnd: any): this;


	firstOf(value: any): this;


	firstOfEach(values: any[]): this;


	allOf(value: any): this;


	allOfEach(values: any[]): this;


	allAfterFirst(value: any): this;


	allBeforeFirst(value: any): this;


	allAfterLast(value: any): this;


	allBeforeLast(value: any): this;


	duplicates(): this;


	byTest(testFunction: (currentItem: any, currentIndex?: any, array?: any) => boolean): this;


	byType(type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined'): this;
}
