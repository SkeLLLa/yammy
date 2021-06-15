import { describe, test, expect } from '@jest/globals';
import { run } from '../src/cli';

describe('cli', () => {
  describe('run', () => {
    test('exports run', () => {
      expect(run).toBeDefined();
    });
  });
});
