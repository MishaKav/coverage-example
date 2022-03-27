import { expect, test, describe } from '@jest/globals';
import { sum } from '../src/sum';
import { sumBranch } from '../src/sumBranch';
import { sumBranch2 } from '../src/sumBranch2';
import { sumStmts } from '../src/sumStmts';

describe('show basic examples', () => {
  test('sum', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('sumBranch', () => {
    expect(sumBranch(1, 2)).toBe(3);
  });

  test('sumBranch2', () => {
    expect(sumBranch2(0, 0)).toBe(0);
  });

  test('sumStmts', () => {
    expect(sumStmts(1, 2)).toBe(3);
    // expect(sumStmts(2, 1)).toBe(3);
  });
});
