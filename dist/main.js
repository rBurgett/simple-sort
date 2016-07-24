"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var CollatorPolyfill = function CollatorPolyfill(locale) {
    this._locale = locale;
};
CollatorPolyfill.prototype.compare = function (a, b) {
    return a.localeCompare(b, this._locale);
};

/**
 * Constructs a sorter instance.
 * @constructor Sorter
 * @param {string} [locale] - the locale to sort by (e.g. 'en-US')
 */
var Sorter = function Sorter(locale) {
    this.intCol = Intl && Intl.Collator ? new Intl.Collator(locale) : new CollatorPolyfill(locale);
};

Sorter.prototype._sort = function (arr, d) {
    return arr.concat().sort(function (a, b) {
        return a === b ? 0 : a > b ? d * 1 : d * -1;
    });
};

/**
 * Sorts values in ascending order.
 * @param {Array} arr - Array of value to sort
 * @returns {Array} a new sorted Array
 */
Sorter.prototype.sortAsc = function (arr) {
    return this._sort(arr, 1);
};

/**
 * Sorts values in descending order.
 * @param {Array} arr - Array of value to sort
 * @returns {Array} a new sorted Array
 */
Sorter.prototype.sortDes = function (arr) {
    return this._sort(arr, -1);
};

Sorter.prototype._sortFunc = function (d) {
    return function (a, b) {
        return a === b ? 0 : a > b ? d * 1 : d * -1;
    };
};

/**
 * Constructs a function to sort values in ascending order.
 * @returns {Function}
 */
Sorter.prototype.sortAscFunc = function () {
    return this._sortFunc(1);
};

/**
 * Constructs a function to sort values in descending order.
 * @returns {Function}
 */
Sorter.prototype.sortDesFunc = function () {
    return this._sortFunc(-1);
};

Sorter.prototype._sortByProp = function (arr, prop, d) {
    return arr.concat().sort(function (a, b) {
        return a[prop] === b[prop] ? 0 : a[prop] > b[prop] ? d * 1 : d * -1;
    });
};

/**
 * Sorts an Array of objects into ascending order by a certain property.
 * @param {Array} arr - Array of objects to sort
 * @param {string} prop - property to sort by
 * @returns {Array} a new sorted Array
 */
Sorter.prototype.sortByPropAsc = function (arr, prop) {
    return this._sortByProp(arr, prop, 1);
};

/**
 * Sorts an Array of objects into descending order by a certain property.
 * @param {Array} arr - Array of objects to sort
 * @param {string} prop - property to sort by
 * @returns {Array} a new sorted Array
 */
Sorter.prototype.sortByPropDes = function (arr, prop) {
    return this._sortByProp(arr, prop, -1);
};

Sorter.prototype._sortByPropFunc = function (prop, d) {
    return function (a, b) {
        return a[prop] === b[prop] ? 0 : a[prop] > b[prop] ? d * 1 : d * -1;
    };
};

/**
 * Constructs a function to sort values in ascending order by a certain property.
 * @param {string} prop - property to sort by
 * @returns {Function}
 */
Sorter.prototype.sortByPropAscFunc = function (prop) {
    return this._sortByPropFunc(prop, 1);
};

/**
 * Constructs a function to sort values in descending order by a certain property.
 * @param {string} prop - property to sort by
 * @returns {Function}
 */
Sorter.prototype.sortByPropDesFunc = function (prop) {
    return this._sortByPropFunc(prop, -1);
};

Sorter.prototype._localeSort = function (arr, d) {
    var _this = this;

    return arr.concat().sort(function (a, b) {
        return d * _this.intCol.compare(a, b);
    });
};

/**
 * Sorts values by locale in ascending order.
 * @param {Array} arr - Array of value to sort
 * @returns {Array} a new sorted Array
 */
Sorter.prototype.localeSortAsc = function (arr) {
    return this._localeSort(arr, 1);
};

/**
 * Sorts values by locale in descending order.
 * @param {Array} arr - Array of value to sort
 * @returns {Array} a new sorted Array
 */
Sorter.prototype.localeSortDes = function (arr) {
    return this._localeSort(arr, -1);
};

Sorter.prototype._localeSortFunc = function (d) {
    var _this2 = this;

    return function (a, b) {
        return d * _this2.intCol.compare(a, b);
    };
};

/**
 * Constructs a function to sort values by locale in ascending order.
 * @returns {Function}
 */
Sorter.prototype.localeSortAscFunc = function () {
    return this._localeSortFunc(1);
};

/**
 * Constructs a function to sort values by locale in descending order.
 * @returns {Function}
 */
Sorter.prototype.localeSortDesFunc = function () {
    return this._localeSortFunc(-1);
};

Sorter.prototype._localeSortByProp = function (arr, prop, d) {
    var _this3 = this;

    return arr.concat().sort(function (a, b) {
        return d * _this3.intCol.compare(a[prop], b[prop]);
    });
};

/**
 * Sorts an Array of objects by locale into ascending order by a certain property.
 * @param {Array} arr - Array of objects to sort
 * @param {string} prop - property to sort by
 * @returns {Array} a new sorted Array
 */
Sorter.prototype.localeSortByPropAsc = function (arr, prop) {
    return this._localeSortByProp(arr, prop, 1);
};

/**
 * Sorts an Array of objects by locale into descending order by a certain property.
 * @param {Array} arr - Array of objects to sort
 * @param {string} prop - property to sort by
 * @returns {Array} a new sorted Array
 */
Sorter.prototype.localeSortByPropDes = function (arr, prop) {
    return this._localeSortByProp(arr, prop, -1);
};

Sorter.prototype._localeSortByPropFunc = function (prop, d) {
    var _this4 = this;

    return function (a, b) {
        return d * _this4.intCol.compare(a[prop], b[prop]);
    };
};

/**
 * Constructs a function to sort values by locale in ascending order by a certain property.
 * @param {string} prop - property to sort by
 * @returns {Function}
 */
Sorter.prototype.localeSortByPropAscFunc = function (prop) {
    return this._localeSortByPropFunc(prop, 1);
};

/**
 * Constructs a function to sort values by locale in descending order by a certain property.
 * @param {string} prop - property to sort by
 * @returns {Function}
 */
Sorter.prototype.localeSortByPropDesFunc = function (prop) {
    return this._localeSortByPropFunc(prop, -1);
};

exports.default = Sorter;