function func1(a,b,c){
    return a+b+c;
}
function func2(a,b,c){
    a = [a,b,c];
    return a.sort((x, y) => x - y);
}
function func3(a){
    return (reverseString(a.toUpperCase()) == a.toUpperCase()? true:false);
}
function func4(a,b){
    if (a==null||a==undefined||b==null||b==undefined){
        return "erro";
    }
    else if(a.includes(b)){
        return "é um subconjunto";
    }
    else{
        return "não e um subconjunto";
    }
}
function func5(d){
    s=["sun","mon","tue","wen","thu","fri", "sat"];
    return s[d.getDay()];
}