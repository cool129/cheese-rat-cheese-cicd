import { describe, it, expect } from 'vitest';
import { calculateWinner, checkDraw } from '../utils/gameLogic';

describe('Game Logic', () => {
  describe('calculateWinner', () => {
    it('should return null when there is no winner', () => {
      const board = [null, null, null, null, null, null, null, null, null];
      expect(calculateWinner(board)).toBeNull();
    });

    it('should detect horizontal win for 🐁', () => {
      const board = ['🐁', '🐁', '🐁', null, '🧀', '🧀', null, null, null];
      const result = calculateWinner(board);
      expect(result).not.toBeNull();
      expect(result?.winner).toBe('🐁');
      expect(result?.line).toEqual([0, 1, 2]);
    });

    it('should detect vertical win for 🧀', () => {
      const board = ['🐁', '🧀', '🐁', null, '🧀', '🐁', null, 'O', null];
      const result = calculateWinner(board);
      expect(result).not.toBeNull();
      expect(result?.winner).toBe('O');
      expect(result?.line).toEqual([1, 4, 7]);
    });

    it('should detect diagonal win', () => {
      const board = ['🐁', '🧀', '🧀', null, '🐁', '🧀', null, null, 'X'];
      const result = calculateWinner(board);
      expect(result).not.toBeNull();
      expect(result?.winner).toBe('🐁');
      expect(result?.line).toEqual([0, 4, 8]);
    });
  });

  describe('checkDraw', () => {
    it('should return false when board is not full', () => {
      const board = ['🐁', '🧀', '🐁', '🧀', null, '🐁', '🧀', '🐁', '🧀'];
      expect(checkDraw(board)).toBe(false);
    });

    it('should return false when there is a winner', () => {
      const board = ['🐁', '🐁', '🐁', '🧀', '🧀', null, null, null, null];
      expect(checkDraw(board)).toBe(false);
    });

    it('should return true when board is full with no winner', () => {
      const board = ['🐁', '🧀', '🐁', '🧀', '🧀', '🧀', '🧀', '🐁', '🐁'];
      expect(checkDraw(board)).toBe(true);
    });
  });
});
