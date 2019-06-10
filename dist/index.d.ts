import { PublicArrayContainer } from '@writetome51/public-array-container';
import { IAdjacentToValueInfo } from '@writetome51/adjacent-to-value-info-interface/IAdjacentToValueInfo';


export declare class PublicArrayRemover extends PublicArrayContainer {

	
	byIndex(index: number): this;


	byIndexes(indexes: number[]): this;


	adjacentAt(startingIndex: number, numItemsToRemove: number): this;


	adjacentToValue(info: IAdjacentToValueInfo): this;


	head(numItemsToRemove: number): this;


	tail(numItemsToRemove: number): this;


	between(numItemsToKeepAtEachEnd: number): this;


	firstOf(value: any): this;


	firstOfEach(values: any[]): this;


	allOf(value: any): this;


	allOfEach(values: any[]): this;


	allAfterFirst(value: any): this;


	allBeforeFirst(value: any): this;


	allAfterLast(value: any): this;


	allBeforeLast(value: any): this;


	duplicates(): this;


	byTest(testFunction: (currentItem: any, currentIndex?: number, array?: any[]) => boolean): this;


	byType(
		type: 'object' | 'array' | 'number' | 'string' | 'boolean' | 'function' | 'undefined' | 'null'
	): this;

}
