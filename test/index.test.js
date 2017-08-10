import {expect} from 'chai';
import {isCellAlive} from '../index';

describe('isCellAlive', () => {
  context('given a live cell', () => {
    it('dies when it has fewer than 2 living neighbors', () => {
      expect(isCellAlive(true, [false])).to.be.false;
      expect(isCellAlive(true, [true, false])).to.be.false;
    });
    it('is alive if it has 2 or 3 living neighbors', () => {
      expect(isCellAlive(true, [true, true, false])).to.be.true;
      expect(isCellAlive(true, [true, true, true, false])).to.be.true;
    });
    it('dies when it has more than 3 living neighbors', () => {
      expect(isCellAlive(true, [true, true, false, true, true])).to.be.false;
    });
  });
  context('given a dead cell', () => {
    it('becomes alive if and only if it has exactly 3 living neighbors', () => {
      expect(isCellAlive(false, [true, false])).to.be.false;
      expect(isCellAlive(false, [true, true, false])).to.be.false;
      expect(isCellAlive(false, [true, true, true, false])).to.be.true;
      expect(isCellAlive(false, [true, true, true, true, false])).to.be.false;
    });
  });
});
