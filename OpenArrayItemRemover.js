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
var OpenArrayContainer_1 = require("@writetome51/open-array-container/OpenArrayContainer");
var removeAllOf_removeAllOfEach_1 = require("@writetome51/array-remove-all-of-first-of/removeAllOf_removeAllOfEach");
var removeFirstOf_removeFirstOfEach_1 = require("@writetome51/array-remove-all-of-first-of/removeFirstOf_removeFirstOfEach");
var removeAdjacentAt_1 = require("@writetome51/array-removers-basic/removeAdjacentAt");
var removeItem_1 = require("@writetome51/array-removers-basic/removeItem");
var removeHead_1 = require("@writetome51/array-removers-basic/removeHead");
var removeTail_1 = require("@writetome51/array-removers-basic/removeTail");
var removeMiddle_1 = require("@writetome51/array-removers-basic/removeMiddle");
var removeAllAfterFirst_1 = require("@writetome51/array-remove-all-after-before/removeAllAfterFirst");
var removeAllAfterLast_1 = require("@writetome51/array-remove-all-after-before/removeAllAfterLast");
var removeAllBeforeFirst_1 = require("@writetome51/array-remove-all-after-before/removeAllBeforeFirst");
var removeAllBeforeLast_1 = require("@writetome51/array-remove-all-after-before/removeAllBeforeLast");
var removeDuplicates_1 = require("@writetome51/array-remove-duplicates/removeDuplicates");
var removeAdjacentToValue_1 = require("@writetome51/array-remove-adjacent-to-value/removeAdjacentToValue");
var OpenArrayItemRemover = /** @class */ (function (_super) {
    __extends(OpenArrayItemRemover, _super);
    function OpenArrayItemRemover(data) {
        if (data === void 0) { data = []; }
        return _super.call(this, data) || this;
    }
    // These functions modify the array and return the class instance.
    // index can be negative or positive.
    OpenArrayItemRemover.prototype.item = function (index) {
        return this.returnThis_after(removeItem_1.removeItem(index, this.data));
    };
    // startingIndex can be negative or positive.
    OpenArrayItemRemover.prototype.adjacentAt = function (startingIndex, numItemsToRemove) {
        return this.returnThis_after(removeAdjacentAt_1.removeAdjacentAt(startingIndex, numItemsToRemove, this.data));
    };
    // info = {value: anyExceptObject, offset: number, howMany: number}
    OpenArrayItemRemover.prototype.adjacentToValue = function (info) {
        return this.returnThis_after(removeAdjacentToValue_1.removeAdjacentToValue(info, this.data));
    };
    OpenArrayItemRemover.prototype.head = function (numItemsToRemove) {
        return this.returnThis_after(removeHead_1.removeHead(numItemsToRemove, this.data));
    };
    OpenArrayItemRemover.prototype.tail = function (numItemsToRemove) {
        return this.returnThis_after(removeTail_1.removeTail(numItemsToRemove, this.data));
    };
    OpenArrayItemRemover.prototype.middle = function (numItemsToKeepAtEachEnd) {
        return this.returnThis_after(removeMiddle_1.removeMiddle(numItemsToKeepAtEachEnd, this.data));
    };
    // value cannot be object.
    OpenArrayItemRemover.prototype.firstOf = function (value) {
        return this.returnThis_after(removeFirstOf_removeFirstOfEach_1.removeFirstOf(value, this.data));
    };
    OpenArrayItemRemover.prototype.firstOfEach = function (values) {
        return this.returnThis_after(removeFirstOf_removeFirstOfEach_1.removeFirstOfEach(values, this.data));
    };
    // value cannot be object.
    OpenArrayItemRemover.prototype.allOf = function (value) {
        return this.returnThis_after(removeAllOf_removeAllOfEach_1.removeAllOf(value, this.data));
    };
    OpenArrayItemRemover.prototype.allOfEach = function (values) {
        return this.returnThis_after(removeAllOf_removeAllOfEach_1.removeAllOfEach(values, this.data));
    };
    // value cannot be object.
    OpenArrayItemRemover.prototype.allAfterFirst = function (value) {
        return this.returnThis_after(removeAllAfterFirst_1.removeAllAfterFirst(value, this.data));
    };
    // value cannot be object.
    OpenArrayItemRemover.prototype.allBeforeFirst = function (value) {
        return this.returnThis_after(removeAllBeforeFirst_1.removeAllBeforeFirst(value, this.data));
    };
    OpenArrayItemRemover.prototype.allAfterLast = function (value) {
        return this.returnThis_after(removeAllAfterLast_1.removeAllAfterLast(value, this.data));
    };
    OpenArrayItemRemover.prototype.allBeforeLast = function (value) {
        return this.returnThis_after(removeAllBeforeLast_1.removeAllBeforeLast(value, this.data));
    };
    OpenArrayItemRemover.prototype.duplicates = function () {
        return this.returnThis_after(removeDuplicates_1.removeDuplicates(this.data));
    };
    return OpenArrayItemRemover;
}(OpenArrayContainer_1.OpenArrayContainer));
exports.OpenArrayItemRemover = OpenArrayItemRemover;
