import { expect } from 'chai';
import { sum, sub, multi, div } from '../src/utils';


describe('Calculator', () => {
  describe('Smoke tests', () => {
    it('should exist the method sum', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('should exist the method sub', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('should exist the method multi', () => {
      expect(multi).to.exist;
      expect(multi).to.be.a('function');
    });

    it('should exist the method div', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });
  });

  describe('Sum', () => {
    it('should return 4 when sum(2,2)', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });

  describe('Sub', () => {
    it('should return 4 when sub(6,2)', () => {
      expect(sub(6, 2)).to.be.equal(4);
    });
  });

  describe('Multi', () => {
    it('should return 4 when multi(2,2)', () => {
      expect(multi(2, 2)).to.be.equal(4);
    });
  });

  describe('Div', () => {
    it('should return 4 when div(8,2)', () => {
      expect(div(8, 2)).to.be.equal(4);
    });

    it('should return `Not allowed to divide per zero` when divide by 0', () => {
      expect(div(8, 0)).to.be.equal('Not allowed to divide per zero!');
    });
  });
});
