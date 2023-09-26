function drawCircle(radius){
    return {
        radius,
        x: 5,
        y: 6,
        draw: function(){
            console.log("drawing...");
        }
    }
}

const circle1 = drawCircle(10);
console.log(circle1)

function CircleCons(radius){
    this.radius = radius;
    this.color = "green"
    this.draw = function(){
        console.log("drawing by constructor")
    }
}
const circle2 = new CircleCons(20);
circle2.content = "this is circle"
delete circle2.color
console.log(circle2)

for (let key in circle2){
    console.log(key, circle2[key]);
}

for (let key of Object.keys(circle2)){
    console.log(key);
}

const circle3 = Object.assign({
    add: "add key"
}, circle2, circle1)
console.log(circle3);

const circle4 = { ...circle2 }
console.log(circle4);