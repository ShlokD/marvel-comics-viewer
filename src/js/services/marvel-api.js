import MD5 from 'crypto-js/md5';

export class MarvelAPIService {
  constructor(store, config) {
    this.store = store;
    this.config = config;
  }

  fetchData() {
    const ts = new Date().getTime();
    const key = `${ts}${this.config.privateKey}${this.config.publicKey}`;
    const hash = MD5(key).toString();
    const url = `${this.config.url}?apikey=${this.config.publicKey}&ts=${ts}&hash=${hash}`;
    const options = { method: 'GET', cache: 'default', mode: 'cors' };

    return window.fetch(url, options)
      .then(resp => resp.json())
      .then(respJSON => this.store.setData(respJSON))
      .catch(err => this.store.setError(err));
  }
};
