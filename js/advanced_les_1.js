var simpleStr = "MyString";

var objectStr = new String("some string object");

function newLine(str) {
  document.write(str + "<br/>");
  document.write("============================<br/>");
}

newLine(simpleStr);

newLine(objectStr);

//добавить новые свойства и методы можно только объектам созданным через опратор new
objectStr.customProperty = 123;
document.write(objectStr.customProperty + "<br/>");

//добавить свойство в переменную simpleStr невозможно
simpleStr.customProperty2 = 123;
document.write(simpleStr.customProperty2);