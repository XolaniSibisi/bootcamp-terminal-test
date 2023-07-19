import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe('Test my yearsAgo function' , function(){
    it("It should return 47 years if the number of years passed is 1976." , function(){
        assert.equal(47, yearsAgo(1976));
    });

    it("It should return 23 years if the number of years passed is 2000." , function(){
        assert.equal(23, yearsAgo(2000));
    });
});