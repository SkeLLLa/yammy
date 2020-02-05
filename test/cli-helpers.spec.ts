import { getConfig } from '../src/cli-helpers';

describe('cli helpers', () => {
  describe('get config', () => {
    beforeAll(() => {
      const spy = jest.spyOn(process, 'cwd');
      spy.mockReturnValue(`${__dirname}`);
    });
    test('defaults', () => {
      expect(getConfig()).toEqual({ test: true });
    });
    test('relative path', () => {
      expect(getConfig('./.yammyrc.js')).toEqual({ test: true });
    });
    test('absolute path', () => {
      expect(getConfig(`${__dirname}/.yammyrc.js`)).toEqual({ test: true });
    });
    test('throws on missing file', () => {
      expect(() => {
        getConfig('./.wrong.js');
      }).toThrow();
    });
  });
});
