interface Container<T> {
  items: T[];
  addItem(item: T): void;
  getItem(index: number): T;
}

const numberContainer: Container<number> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

numberContainer.addItem(67);
numberContainer.addItem(83);
numberContainer.addItem(97);
console.log(numberContainer.getItem(1));

const stringContainer: Container<string> = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  getItem(index) {
    return this.items[index];
  },
};

stringContainer.addItem("Kevin");
stringContainer.addItem("Lisa");
stringContainer.addItem("Ben");
console.log(stringContainer.getItem(1));

// function getLastElement<T>(items: Container<T>["items"]): T {
//   return items[items.length - 1];
// }

// const getLastElement = function <T>(items: Container<T>["items"]): T {
//   return items[items.length - 1];
// };

const getLastElement = <T>(items: Container<T>["items"]): T => {
  return items[items.length - 1];
};

console.log(getLastElement(stringContainer.items));
console.log(getLastElement(numberContainer.items));
