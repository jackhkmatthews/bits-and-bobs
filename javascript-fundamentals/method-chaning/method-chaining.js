var obj = function() {
  this.i = 0;

  this.add = (i) => {
    this.i += i;
    return this;
  };

  this.subtract = (i) => {
    this.i -= i;
    return this;
  };

  this.print = () => {
    console.log(this.i);
    return this;
  };
};

var x = new obj();

x.add(3).subtract(1).print();