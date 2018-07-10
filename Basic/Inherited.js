//寄生组合式继承
function inheritObject(o) {
    function F() { }
    F.prototype = o;
    return new F();
}