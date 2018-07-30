import MD5 from 'crypto-js/md5';
import Config from '../configs';

export class MarvelAPIService {
  constructor(store) {
    this.store = store;
  }

  fetchData() {
    const ts = new Date().getTime();
    const key = `${ts}${Config.privateKey}${Config.publicKey}`;
    const hash = MD5(key).toString();
    const url = `${Config.url}?apikey=${Config.publicKey}&ts=${ts}&hash=${hash}`;
    const options = { method: 'GET', cache: 'default', mode: 'cors' };

    return window.fetch(url, options)
      .then(resp => resp.json())
      .then(respJSON => this.store.setData(respJSON))
      .catch(err => this.store.setError(err));
  }
};
