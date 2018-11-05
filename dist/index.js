"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isArray_notArray_1 = require("basic-data-handling/isArray_notArray");
var errorIfNotString_1 = require("basic-data-handling/errorIfNotString");
var public_array_container_1 = require("@writetome51/public-array-container");
var array_remove_all_of_first_of_1 = require("@writetome51/array-remove-all-of-first-of");
var array_remove_all_of_first_of_2 = require("@writetome51/array-remove-all-of-first-of");
var removeAdjacentAt_1 = require("@writetome51/array-remove-adjacent-at/removeAdjacentAt");
var array_remove_by_index_1 = require("@writetome51/array-remove-by-index");
var array_remove_by_indexes_1 = require("@writetome51/array-remove-by-indexes");
var removeHead_1 = require("@writetome51/array-remove-head-tail/removeHead");
var removeTail_1 = require("@writetome51/array-remove-head-tail/removeTail");
var array_remove_between_1 = require("@writetome51/array-remove-between");
var array_remove_all_after_before_1 = require("@writetome51/array-remove-all-after-before");
var array_remove_all_after_before_2 = require("@writetome51/array-remove-all-after-before");
var array_remove_all_after_before_3 = require("@writetome51/array-remove-all-after-before");
var array_remove_all_after_before_4 = require("@writetome51/array-remove-all-after-before");
var removeDuplicates_1 = require("@writetome51/array-remove-duplicates/removeDuplicates");
var removeAdjacentToValue_1 = require("@writetome51/array-remove-adjacent-to-value/removeAdjacentToValue");
var array_remove_filtered_results_1 = require("@writetome51/array-remove-filtered-results");
var PublicArrayItemRemover = /** @class */ (function (_super) {
    __extends(PublicArrayItemRemover, _super);
    function PublicArrayItemRemover(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    // These functions modify the array and return the class instance.
    // index can be negative or positive.
    PublicArrayItemRemover.prototype.byIndex = function (index) {
        return this.returnThis_after(array_remove_by_index_1.removeByIndex(index, this.data));
    };
    // indexes can be negative or positive.
    PublicArrayItemRemover.prototype.byIndexes = function (indexes) {
        return this.returnThis_after(array_remove_by_indexes_1.removeByIndexes(indexes, this.data));
    };
    // startingIndex can be negative or positive.
    PublicArrayItemRemover.prototype.adjacentAt = function (startingIndex, numItemsToRemove) {
        return this.returnThis_after(removeAdjacentAt_1.removeAdjacentAt(startingIndex, numItemsToRemove, this.data));
    };
    // info = {value: anyExceptObject,  offset: integer,  howMany: integer greater than zero}
    PublicArrayItemRemover.prototype.adjacentToValue = function (info) {
        return this.returnThis_after(removeAdjacentToValue_1.removeAdjacentToValue(info, this.data));
    };
    PublicArrayItemRemover.prototype.head = function (numItemsToRemove) {
        return this.returnThis_after(removeHead_1.removeHead(numItemsToRemove, this.data));
    };
    PublicArrayItemRemover.prototype.tail = function (numItemsToRemove) {
        return this.returnThis_after(removeTail_1.removeTail(numItemsToRemove, this.data));
    };
    PublicArrayItemRemover.prototype.between = function (numItemsToKeepAtEachEnd) {
        return this.returnThis_after(array_remove_between_1.removeBetween(numItemsToKeepAtEachEnd, this.data));
    };
    // value cannot be object (that applies to all functions here with a parameter called 'value').
    PublicArrayItemRemover.prototype.firstOf = function (value) {
        return this.returnThis_after(array_remove_all_of_first_of_2.removeFirstOf(value, this.data));
    };
    // values cannot contain object (that applies to all functions here with a parameter
    // called 'values').
    PublicArrayItemRemover.prototype.firstOfEach = function (values) {
        return this.returnThis_after(array_remove_all_of_first_of_2.removeFirstOfEach(values, this.data));
    };
    PublicArrayItemRemover.prototype.allOf = function (value) {
        return this.returnThis_after(array_remove_all_of_first_of_1.removeAllOf(value, this.data));
    };
    PublicArrayItemRemover.prototype.allOfEach = function (values) {
        return this.returnThis_after(array_remove_all_of_first_of_1.removeAllOfEach(values, this.data));
    };
    PublicArrayItemRemover.prototype.allAfterFirst = function (value) {
        return this.returnThis_after(array_remove_all_after_before_1.removeAllAfterFirst(value, this.data));
    };
    PublicArrayItemRemover.prototype.allBeforeFirst = function (value) {
        return this.returnThis_after(array_remove_all_after_before_3.removeAllBeforeFirst(value, this.data));
    };
    PublicArrayItemRemover.prototype.allAfterLast = function (value) {
        return this.returnThis_after(array_remove_all_after_before_2.removeAllAfterLast(value, this.data));
    };
    PublicArrayItemRemover.prototype.allBeforeLast = function (value) {
        return this.returnThis_after(array_remove_all_after_before_4.removeAllBeforeLast(value, this.data));
    };
    PublicArrayItemRemover.prototype.duplicates = function () {
        return this.returnThis_after(removeDuplicates_1.removeDuplicates(this.data));
    };
    PublicArrayItemRemover.prototype.byTest = function (testFunction) {
        return this.returnThis_after(array_remove_filtered_results_1.removeFilteredResults(testFunction, this.data));
    };
    PublicArrayItemRemover.prototype.byType = function (type) {
        errorIfNotString_1.errorIfNotString(type);
        // @ts-ignore
        type = type.toLowerCase();
        if (type === 'array')
            return this.byTest(function (item) { return isArray_notArray_1.isArray(item); });
        else
            return this.byTest(function (item) { return typeof item === type; });
    };
    return PublicArrayItemRemover;
}(public_array_container_1.PublicArrayContainer));
exports.PublicArrayItemRemover = PublicArrayItemRemover;
//
//
