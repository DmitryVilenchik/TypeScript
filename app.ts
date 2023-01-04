//for (let i=0; i<3; i++) {
//    setTimeout(()=> console.log(i));
//}
//let a=10;
//console.log(`a=${a}`);

//variables !!!
let hello="world";
hello="10";
let b;
b=10;
b="abc";
let c: string;
c="bcd";
c="dima";
function getRandomNumber(min: any, max: number):number {
    //return 10;
    return min+Math.floor(min+Math.random()* (max-min+1));
}

function shiftCipher(str: string, shift: number=1): string {
    //a+1=b; b+1=c; ...z+1=a
    //for each lower case letter (a-z) you should perform code asci
    //on a given shift
    //in cycle of a lower letters
    //'z'+2='b';
    //exp 
    //shiftCipher("abz.", 3) => "dec."

    //shiftDecipher(str: string, shift: number):string
    //a-1=z, b-1=a ...
    //shiftDecipher("abc..", 1) => "zab.."
    return "";
}