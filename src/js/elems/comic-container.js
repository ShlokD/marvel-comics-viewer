import get from 'lodash/get';
import { DOM } from '../dom.js';

export class ComicContainer {
  constructor() {
    this.dom = new DOM();
    this.createComic = this.createComic.bind(this);
  }

  createComic(comic) {
    const title = get(comic, 'title', '');
    const price = get(comic, 'prices[0].price', 0).toFixed(2);
    const thumbnail = get(comic, 'thumbnail', {});
    const imgSrc = `${thumbnail.path || ''}.${thumbnail.extension || ''}`;

    const template = this.dom.get('#comics-template');
    const card = this.dom.importNode(template.content.querySelector('.comic-card'));
    card.querySelector('.comic-title').textContent = title;
    card.querySelector('.comic-price').textContent = `$ ${price}`;
    card.querySelector('.comic-img').src = imgSrc;
    return card;
  }

  populate(comicsData = []) {
    const comicsFragment = new document.DocumentFragment();
    comicsData.forEach((comic) => comicsFragment.appendChild(this.createComic(comic)));
    this.dom.append('#comics-content', comicsFragment);
  }
}
