//通过闭包实现
var Book = (function () {
    var bookNum = 0;
    function checkBoox(name) { }

    //返回构造函数
    return function (newId, newName, newPrice) {
        //特权方法
        this.getName = function () { };
        this.getPrice = function () { };
        this.setName = function () { };
        this.setPrice = function () { };
        //公共属性
        this.id = newId;
        //公有方法
        this.copy = function () { };
        bookNum++;
        if (bookNum > 100) {
            throw new Error('我们仅出售100本书');
        }
        //构造器
        this.setName(name);
        this.setPrice(newPrice);
    }
})();

Book.prototype = {
    //静态公有属性
    isJSBook: false,
    //静态公有方法
    display: function () { }
}