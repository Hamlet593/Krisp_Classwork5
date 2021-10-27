/*Write Pagination object that will get an array and pageSize, then will return the following.

● nextPage
● prevPage
● firstPage
● lastPage
● goToPage
● getPageItems

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

Pagination.init(alphabetArray, 4);

Pagination.getPageItems(); // ["a", "b", "c", "d"]
Pagination.nextPage(); // add the current page by one

Pagination.getPageItems(); // ["e", "f", "g", "h"]

Pagination.nextPage().nextPage(); // the ability to call chainable

Pagination.goToPage(3); // current page must be set to 3*/

const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");

const pagination = {
  init(myArr, size){
    this.arr = myArr;
    this.page = size;
    this.size = size;
    this.start = 0;
  },
  
  
  prevPage(){
    this.page -= this.size;
    this.start -= this.size;
    return this
  },
  
  nextPage(){
    this.page += this.size;
    this.start += this.size;
    return this;
  },
  
  firstPage(){
    this.start = 0;
    this.page = this.size;
  },
  
  lastPage(){
    this.start = Math.floor(this.arr.length / this.size) * this.size;
    this.page = this.arr.length;
  },
  
  goToPage(newSetPage){
    this.start = (this.size * newSetPage) - this.size;
    this.page = this.start + this.size;
  },
  
  getPageItems(){
    let newArr = [];
    for(let i = this.start; i < this.page; i++){
      newArr.push(this.arr[i])
    }
    return newArr;
  },
};

pagination.init(alphabetArray, 4);

pagination.getPageItems()