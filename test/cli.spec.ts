import { run } from '../src/cli';

describe('cli', () => {
  describe('run', () => {
    test('exports run', () => {
      expect(run).toBeDefined();
    });
  });
});
