function CreateConnection() {
  // this.connect = () => {
  //   console.log(this);
  // };
  this.connect = function () {
    console.log('connect!');
  };
}

function testConnection() {
  console.log('test connection...');
  new CreateConnection().connect();
}


if(module.parent) {
  module.exports = CreateConnection;
}
else {
  testConnection();
}

