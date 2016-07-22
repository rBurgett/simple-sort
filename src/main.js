const CollatorPolyfill = function(locale) {
    this._locale = locale;
};
CollatorPolyfill.prototype.compare = function(a, b) {
    return a.localeCompare(b, this._locale);
};

const Sorter = function(locale) {
    this.intCol = (Intl && Intl.Collator) ? new Intl.Collator(locale) : new CollatorPolyfill(locale);
};

Sorter.prototype._sort = function(arr, d) {
    return arr
        .concat()
        .sort((a, b) => a === b ? 0 : a > b ? (d * 1) : (d * -1));
};
Sorter.prototype.sortAsc = function(arr) {
    return this._sort(arr, 1);
};
Sorter.prototype.sortDes = function(arr) {
    return this._sort(arr, -1);
};

Sorter.prototype._sortFunc = function(d) {
    return (a, b) => a === b ? 0 : a > b ? (d * 1) : (d * -1);
};
Sorter.prototype.sortAscFunc = function() {
    return this._sortFunc(1);
};
Sorter.prototype.sortDesFunc = function() {
    return this._sortFunc(-1);
};

Sorter.prototype._sortByProp = function(arr, prop, d) {
    return arr
        .concat()
        .sort((a, b) => a[prop] === b[prop] ? 0 : a[prop] > b[prop] ? (d * 1) : (d * -1));
};
Sorter.prototype.sortByPropAsc = function(arr, prop) {
    return this._sortByProp(arr, prop, 1);
};
Sorter.prototype.sortByPropDes = function(arr, prop) {
    return this._sortByProp(arr, prop, -1);
};

Sorter.prototype._sortByPropFunc = function(prop, d) {
    return (a, b) => a[prop] === b[prop] ? 0 : a[prop] > b[prop] ? (d * 1) : (d * -1);
};
Sorter.prototype.sortByPropAscFunc = function(prop) {
    return this._sortByPropFunc(prop, 1);
};
Sorter.prototype.sortByPropDesFunc = function(prop) {
    return this._sortByPropFunc(prop, -1);
};

Sorter.prototype._localeSort = function(arr, d) {
    return arr
        .concat()
        .sort((a, b) => d * this.intCol.compare(a, b));
};
Sorter.prototype.localeSortAsc = function(arr) {
    return this._localeSort(arr, 1);
};
Sorter.prototype.localeSortDes = function(arr) {
    return this._localeSort(arr, -1);
};

Sorter.prototype._localeSortFunc = function(d) {
    return (a, b) => d * this.intCol.compare(a, b);
};
Sorter.prototype.localeSortAscFunc = function() {
    return this._localeSortFunc(1);
};
Sorter.prototype.localeSortDesFunc = function() {
    return this._localeSortFunc(-1);
};

Sorter.prototype._localeSortByProp = function(arr, prop, d) {
    return arr
        .concat()
        .sort((a, b) => d * this.intCol.compare(a[prop], b[prop]));
};
Sorter.prototype.localeSortByPropAsc = function(arr, prop) {
    return this._localeSortByProp(arr, prop, 1);
};
Sorter.prototype.localeSortByPropDes = function(arr, prop) {
    return this._localeSortByProp(arr, prop, -1);
};

Sorter.prototype._localeSortByPropFunc = function(prop, d) {
    return (a, b) => d * this.intCol.compare(a[prop], b[prop]);
};
Sorter.prototype.localeSortByPropAscFunc = function(prop) {
    return this._localeSortByPropFunc(prop, 1);
};
Sorter.prototype.localeSortByPropDesFunc = function(prop) {
    return this._localeSortByPropFunc(prop, -1);
};

export default Sorter;
