export class DOM {
  get(xPath) {
    return document.querySelector(xPath);
  }

  getAll(xPath) {
    return document.querySelectorAll(xPath);
  }

  append(destination, item) {
    this.get(destination).append(item);
  }

  importNode(node) {
    return document.importNode(node, true);
  }
};
