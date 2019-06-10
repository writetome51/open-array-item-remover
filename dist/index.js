"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var public_array_container_1 = require("@writetome51/public-array-container");
var public_array_container_by_type_implementation_1 = require("@writetome51/public-array-container-by-type-implementation");
var array_remove_all_of_first_of_1 = require("@writetome51/array-remove-all-of-first-of");
var array_remove_adjacent_at_1 = require("@writetome51/array-remove-adjacent-at");
var array_remove_by_index_1 = require("@writetome51/array-remove-by-index");
var array_remove_by_indexes_1 = require("@writetome51/array-remove-by-indexes");
var array_remove_head_tail_1 = require("@writetome51/array-remove-head-tail");
var array_remove_between_1 = require("@writetome51/array-remove-between");
var array_remove_all_after_1 = require("@writetome51/array-remove-all-after");
var array_remove_all_before_1 = require("@writetome51/array-remove-all-before");
var array_remove_duplicates_1 = require("@writetome51/array-remove-duplicates");
var array_remove_adjacent_to_value_1 = require("@writetome51/array-remove-adjacent-to-value");
var array_remove_by_test_1 = require("@writetome51/array-remove-by-test");
var PublicArrayRemover = /** @class */ (function (_super) {
    __extends(PublicArrayRemover, _super);
    function PublicArrayRemover() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // These functions modify the array and return the class instance.
    // index can be negative or positive.
    PublicArrayRemover.prototype.byIndex = function (index) {
        return this._returnThis_after(array_remove_by_index_1.removeByIndex(index, this.data));
    };
    // indexes can be negative or positive.
    PublicArrayRemover.prototype.byIndexes = function (indexes) {
        return this._returnThis_after(array_remove_by_indexes_1.removeByIndexes(indexes, this.data));
    };
    // startingIndex can be negative or positive.
    PublicArrayRemover.prototype.adjacentAt = function (startingIndex, numItemsToRemove) {
        return this._returnThis_after(array_remove_adjacent_at_1.removeAdjacentAt(startingIndex, numItemsToRemove, this.data));
    };
    // info = {value: anyExceptObject,  offset: integer,  howMany: integer greater than zero}
    PublicArrayRemover.prototype.adjacentToValue = function (info) {
        return this._returnThis_after(array_remove_adjacent_to_value_1.removeAdjacentToValue(info, this.data));
    };
    PublicArrayRemover.prototype.head = function (numItemsToRemove) {
        return this._returnThis_after(array_remove_head_tail_1.removeHead(numItemsToRemove, this.data));
    };
    PublicArrayRemover.prototype.tail = function (numItemsToRemove) {
        return this._returnThis_after(array_remove_head_tail_1.removeTail(numItemsToRemove, this.data));
    };
    PublicArrayRemover.prototype.between = function (numItemsToKeepAtEachEnd) {
        return this._returnThis_after(array_remove_between_1.removeBetween(numItemsToKeepAtEachEnd, this.data));
    };
    // value cannot be object (that applies to all functions here with a parameter called 'value').
    PublicArrayRemover.prototype.firstOf = function (value) {
        return this._returnThis_after(array_remove_all_of_first_of_1.removeFirstOf(value, this.data));
    };
    // values cannot contain object (that applies to all functions here with a parameter
    // called 'values'). Arrays are ok, as long as they don't contain objects.
    PublicArrayRemover.prototype.firstOfEach = function (values) {
        return this._returnThis_after(array_remove_all_of_first_of_1.removeFirstOfEach(values, this.data));
    };
    PublicArrayRemover.prototype.allOf = function (value) {
        return this._returnThis_after(array_remove_all_of_first_of_1.removeAllOf(value, this.data));
    };
    PublicArrayRemover.prototype.allOfEach = function (values) {
        return this._returnThis_after(array_remove_all_of_first_of_1.removeAllOfEach(values, this.data));
    };
    PublicArrayRemover.prototype.allAfterFirst = function (value) {
        return this._returnThis_after(array_remove_all_after_1.removeAllAfterFirst(value, this.data));
    };
    PublicArrayRemover.prototype.allBeforeFirst = function (value) {
        return this._returnThis_after(array_remove_all_before_1.removeAllBeforeFirst(value, this.data));
    };
    PublicArrayRemover.prototype.allAfterLast = function (value) {
        return this._returnThis_after(array_remove_all_after_1.removeAllAfterLast(value, this.data));
    };
    PublicArrayRemover.prototype.allBeforeLast = function (value) {
        return this._returnThis_after(array_remove_all_before_1.removeAllBeforeLast(value, this.data));
    };
    PublicArrayRemover.prototype.duplicates = function () {
        return this._returnThis_after(array_remove_duplicates_1.removeDuplicates(this.data));
    };
    PublicArrayRemover.prototype.byTest = function (testFunction) {
        return this._returnThis_after(array_remove_by_test_1.removeByTest(testFunction, this.data));
    };
    PublicArrayRemover.prototype.byType = function (type) {
        return public_array_container_by_type_implementation_1._publicArrayContainer_byType_implementation(type, this);
    };
    return PublicArrayRemover;
}(public_array_container_1.PublicArrayContainer));
exports.PublicArrayRemover = PublicArrayRemover;
