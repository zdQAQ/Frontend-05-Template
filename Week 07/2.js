function stringToNumber(str, radix){
    let num = 0;
    if(/^0b[01]+$/.test(str)){
        let arr = str.split("").splice(2)
        num = parseInt(arr.join(""), 2)
    }else if(/^0x[0-9a-fA-F]+$/.test(str)){
        let arr = str.split("").splice(2)
        num = parseInt(arr.join(""), 16)
    }else if(/^\d+$/.test(str)){
        num = parseInt(str, 10)
    }else{
        throw new Error("str is not a valid format")
    }
    return num.toString(radix)
}

function numberToString(){
    const radixMap = {
        2: 'ob',
        8: '0o',
        10: '',
        16: '0x'
    };
    let sign = num < 0 ? '-' :'';
    return sign + (radix ? radixMap[radix] + Math.abs(num).toString(radix) : Math.abs(num).toString(radix));
}