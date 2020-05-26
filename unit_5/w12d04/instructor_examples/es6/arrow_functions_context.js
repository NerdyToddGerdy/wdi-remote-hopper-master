console.log('ES6 practice: arrow functions context');

const obj = {
  name: 'my object',
  runTask() {
    setInterval(() => {
      console.log('this within setInterval: ', this);
    }, 1000)  
  }
}

obj.runTask();


