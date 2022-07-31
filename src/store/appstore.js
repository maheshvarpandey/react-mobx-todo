import { makeObservable, observable, action } from
  'mobx';
class MyStore {
  input = ''
  toDoList = [];
  constructor() {
    makeObservable(this, {
      input: observable,
      toDoList: observable,
      changeInput: action,
      pushIntoToDo: action,
      deleteItem: action
    })
  }

  changeInput(str) {
    this.input = str;
  }
  pushIntoToDo(item) {
    this.toDoList.push(item);
  }


  deleteItem(id) {
    let newArr = this.toDoList.filter(item => {
      return item.id !== id
    });
    this.toDoList = newArr;
  }

}
const myStore1 = new MyStore();
export { myStore1 };