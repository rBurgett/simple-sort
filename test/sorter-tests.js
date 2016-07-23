// import fs from 'fs';
// import path from 'path';
import 'should';

import Sorter from '../src/main.js';

const myStrArr = ['c','e','a','b','d','e','f'];
const myNumArr = [1,5,7,4,3,9,7];
const objNumArr = [{num:1},{num:5},{num:7},{num:4},{num:3},{num:9},{num:7}];
const objStrArr = [{str:'c'},{str:'e'},{str:'a'},{str:'b'},{str:'d'},{str:'e'},{str:'f'}];

describe('Sorter', () => {

    const sorter = new Sorter('en');

    it('should be a function', () => {
        Sorter.should.be.a.Function();
    });

    describe('sorting methods', () => {
        describe('sortAsc method', () => {
            it('should sort an array of values into ascending order', () => {
                sorter.sortAsc(myNumArr).should.eql([1,3,4,5,7,7,9]);
            });
        });

        describe('sortDes method', () => {
            it('should sort an array of values into descending order', () => {
                sorter.sortDes(myNumArr).should.eql([9,7,7,5,4,3,1]);
            });
        });

        describe('sortByPropAsc method', () => {
            it('should sort an array of object into ascending order by a certain property', () => {
                sorter.sortByPropAsc(objNumArr, 'num').should.eql([{num:1},{num:3},{num:4},{num:5},{num:7},{num:7},{num:9}]);
            });
        });

        describe('sortDes method', () => {
            it('should sort an array of object into descending order by a certain property', () => {
                sorter.sortByPropDes(objNumArr, 'num').should.eql([{num:9},{num:7},{num:7},{num:5},{num:4},{num:3},{num:1}]);
            });
        });

        describe('localeSortAsc method', () => {
            it('should sort an array of values into ascending order', () => {
                sorter.localeSortAsc(myStrArr).should.eql(['a','b','c','d','e','e','f']);
            });
        });

        describe('localeSortDes method', () => {
            it('should sort an array of values into descending order', () => {
                sorter.localeSortDes(myStrArr).should.eql(['f','e','e','d','c','b','a']);
            });
        });

        describe('localeSortByPropAsc method', () => {
            it('should sort an array of objects into ascending order by a certain property', () => {
                sorter.localeSortByPropAsc(objStrArr, 'str').should.eql([{str:'a'},{str:'b'},{str:'c'},{str:'d'},{str:'e'},{str:'e'},{str:'f'}]);
            });
        });

        describe('localeSortByPropDes method', () => {
            it('should sort an array of objects into descending order by a certain property', () => {
                sorter.localeSortByPropDes(objStrArr, 'str').should.eql([{str:'f'},{str:'e'},{str:'e'},{str:'d'},{str:'c'},{str:'b'},{str:'a'}]);
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
                        .sort(sorter.sortAscFunc()).should.eql([1,3,4,5,7,7,9]);
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
                        .sort(sorter.sortDesFunc()).should.eql([9,7,7,5,4,3,1]);
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
                        .sort(sorter.sortByPropAscFunc('num')).should.eql([{num:1},{num:3},{num:4},{num:5},{num:7},{num:7},{num:9}]);
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
                        .sort(sorter.sortByPropDesFunc('num')).should.eql([{num:9},{num:7},{num:7},{num:5},{num:4},{num:3},{num:1}]);
                });
            });
        });

        describe('localeSortAscFunc method', () => {
            it('should return a function', () => {
                sorter.localeSortAscFunc().should.be.a.Function();
            });
            describe('the returned function', () => {
                it('should be able to sort an array of values into ascending order', () => {
                    myStrArr
                        .concat()
                        .sort(sorter.localeSortAscFunc()).should.eql(['a','b','c','d','e','e','f']);
                });
            });
        });

        describe('localeSortDesFunc method', () => {
            it('should return a function', () => {
                sorter.localeSortDesFunc().should.be.a.Function();
            });
            describe('the returned function', () => {
                it('should be able to sort an array of values into descending order', () => {
                    myStrArr
                        .concat()
                        .sort(sorter.localeSortDesFunc()).should.eql(['f','e','e','d','c','b','a']);
                });
            });
        });

        describe('localeSortByPropAscFunc method', () => {
            it('should return a function', () => {
                sorter.localeSortByPropAscFunc().should.be.a.Function();
            });
            describe('the returned function', () => {
                it('should be able to sort an array of values into ascending order', () => {
                    objStrArr
                        .concat()
                        .sort(sorter.localeSortByPropAscFunc('str')).should.eql([{str:'a'},{str:'b'},{str:'c'},{str:'d'},{str:'e'},{str:'e'},{str:'f'}]);
                });
            });
        });

        describe('localeSortByPropDesFunc method', () => {
            it('should return a function', () => {
                sorter.localeSortByPropDesFunc().should.be.a.Function();
            });
            describe('the returned function', () => {
                it('should be able to sort an array of values into descending order', () => {
                    objStrArr
                        .concat()
                        .sort(sorter.localeSortByPropDesFunc('str')).should.eql([{str:'f'},{str:'e'},{str:'e'},{str:'d'},{str:'c'},{str:'b'},{str:'a'}]);
                });
            });
        });

    });

    // describe('speed comparison with localeCompare()', function() {
    //
    //     this.timeout(30000);
    //
    //     const bigWordArray = JSON.parse(fs.readFileSync(path.join('test', 'words.json'), 'utf8'));
    //
    //     describe('localeCompare()', () => {
    //         it('should take a long time', () => {
    //             const sortedWordArray = bigWordArray
    //                 .concat()
    //                 .sort((a, b) => a.localeCompare(b, 'en'));
    //             sortedWordArray.should.be.an.Array();
    //         });
    //     });
    //
    //     describe('localeSortAscFunc', () => {
    //         it('should take a much shorter time', () => {
    //             const sortedWordArray = bigWordArray
    //                 .concat()
    //                 .sort(sorter.localeSortAscFunc());
    //             sortedWordArray.should.be.an.Array();
    //         });
    //     });
    //
    // });

});
