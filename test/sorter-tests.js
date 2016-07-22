import 'should';

import Sorter from '../src/main.js';

const myStrArr = ['c', 'e', 'a', 'b', 'd', 'f'];
const myNumArr = [1,5,9,4,3,7];
const objNumArr = [{num:1},{num:5},{num:9},{num:4},{num:3},{num:7}];
const objStrArr = [{str:'c'},{str:'e'},{str:'a'},{str:'b'},{str:'d'},{str:'f'}];

describe('Sorter', () => {

    const sorter = new Sorter('en');

    it('should be a function', () => {
        Sorter.should.be.a.Function();
    });

    describe('sorting methods', () => {
        describe('sortAsc method', () => {
            it('should sort an array of values into ascending order', () => {
                sorter.sortAsc(myNumArr).should.eql([1,3,4,5,7,9]);
            });
        });

        describe('sortDes method', () => {
            it('should sort an array of values into descending order', () => {
                sorter.sortDes(myNumArr).should.eql([9,7,5,4,3,1]);
            });
        });

        describe('sortByPropAsc method', () => {
            it('should sort an array of object into ascending order by a certain property', () => {
                sorter.sortByPropAsc(objNumArr, 'num').should.eql([{num:1},{num:3},{num:4},{num:5},{num:7},{num:9}]);
            });
        });

        describe('sortDes method', () => {
            it('should sort an array of object into descending order by a certain property', () => {
                sorter.sortByPropDes(objNumArr, 'num').should.eql([{num:9},{num:7},{num:5},{num:4},{num:3},{num:1}]);
            });
        });

        describe('localeSortAsc method', () => {
            it('should sort an array of values into ascending order', () => {
                sorter.localeSortAsc(myStrArr).should.eql(['a','b','c','d','e','f']);
            });
        });

        describe('localeSortDes method', () => {
            it('should sort an array of values into descending order', () => {
                sorter.localeSortDes(myStrArr).should.eql(['f','e','d','c','b','a']);
            });
        });

        describe('localeSortByPropAsc method', () => {
            it('should sort an array of objects into ascending order by a certain property', () => {
                sorter.localeSortByPropAsc(objStrArr, 'str').should.eql([{str:'a'},{str:'b'},{str:'c'},{str:'d'},{str:'e'},{str:'f'}]);
            });
        });

        describe('localeSortByPropDes method', () => {
            it('should sort an array of objects into descending order by a certain property', () => {
                sorter.localeSortByPropDes(objStrArr, 'str').should.eql([{str:'f'},{str:'e'},{str:'d'},{str:'c'},{str:'b'},{str:'a'}]);
            });
        });
    });

    describe('sort function returning methods', () => {
        describe('sortAscFunc method', () => {
            it('should return a function', () => {
                sorter.sortAscFunc().should.be.a.Function();
            });
            describe('the returned function', () => {
                it('should be able to sort an array of values into ascending order', () => {
                    myNumArr
                        .concat()
                        .sort(sorter.sortAscFunc()).should.eql([1,3,4,5,7,9]);
                });
            });
        });

        describe('sortDesFunc method', () => {
            it('should return a function', () => {
                sorter.sortDesFunc().should.be.a.Function();
            });
            describe('the returned function', () => {
                it('should be able to sort an array of values into descending order', () => {
                    myNumArr
                        .concat()
                        .sort(sorter.sortDesFunc()).should.eql([9,7,5,4,3,1]);
                });
            });
        });

        describe('sortByPropAscFunc method', () => {
            it('should return a function', () => {
                sorter.sortByPropAscFunc('num').should.be.a.Function();
            });
            describe('the returned function', () => {
                it('should be able to sort an array of objects into ascending order by a certain property', () => {
                    objNumArr
                        .concat()
                        .sort(sorter.sortByPropAscFunc('num')).should.eql([{num:1},{num:3},{num:4},{num:5},{num:7},{num:9}]);
                });
            });
        });

        describe('sortByPropDesFunc method', () => {
            it('should return a function', () => {
                sorter.sortByPropDesFunc('num').should.be.a.Function();
            });
            describe('the returned function', () => {
                it('should be able to sort an array of objects into descending order by a certain property', () => {
                    objNumArr
                        .concat()
                        .sort(sorter.sortByPropDesFunc('num')).should.eql([{num:9},{num:7},{num:5},{num:4},{num:3},{num:1}]);
                });
            });
        });
    });

});
