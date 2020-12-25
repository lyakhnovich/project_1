function CreateConnection() {
  this.connect = () => {
    console.log('Connection established!')
  }
}

function testConnection() {
  console.log('test connection..');
  new CreateConnection().connect();
}

if(module.parent) {
  module.exports = CreateConnection;
}
else {
  testConnection();
}