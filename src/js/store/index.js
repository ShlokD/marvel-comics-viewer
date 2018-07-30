import get from 'lodash/get';

export class Store {
  constructor() {
    this.results = {};
  }

  setResults(results) {
    this.results = results;
  }

  setError(err) {
    console.error(err);
  }

  setData(dataObj) {
    this.setResults(get(dataObj, 'data.results', {}));
  }

  getResults() {
    return this.results;
  }
}
