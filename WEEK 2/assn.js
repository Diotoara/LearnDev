const input = [1,2,3,4,5]

function fltr(n){
    if(n%2==0){
        return true;
    }
    else return false;
}

const x = input.filter(fltr);
console.log(x);
