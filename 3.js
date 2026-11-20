function counter(){
    let count=0;
    return{
        increment: function(){
            count++;
        },
        decrement: function(){
            count--;

        },
        reset: function(){
            count=0;

        },
        getValue: function(){
            return count;
        }
    };
}
let c=counter();
c.increment();
c.increment();
c.increment();
console.log(c.getValue());

c.decrement();
console.log(c.getValue());
c.reset();
console.log(c.getValue());
