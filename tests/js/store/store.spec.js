
import { Store } from '../../../src/js/store';

describe('Comics Store', () => {
  let store;

  beforeEach(() => {
    store = new Store();
  });

  it('should set initial data', () => {
    expect(store.getResults()).to.deep.equal({});
  });

  it('should be able to get and set results', () => {
    store.setResults([{ foo: 'bar' }]);
    expect(store.getResults()).to.deep.equal([{ foo: 'bar' }]);
  });

  it('should set results from data object', () => {
    store.setData({ data: { results: [{ foo: 'bar' }] } });
    expect(store.getResults()).to.deep.equal([{ foo: 'bar' }]);
  });
});
