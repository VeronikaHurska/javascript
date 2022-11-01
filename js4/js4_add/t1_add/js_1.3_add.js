let arr = [1,4,666,-545,'sdsfdf','sdad',false,true,'weew',23,true];
for (let i = 0; i < arr.length; i++) {
    if( typeof(arr[i]) === 'number' ){
        console.log(arr[i] + ' this is number')
    }else if(typeof(arr[i]) === 'string' ){
        console.log(arr[i] + ' this is string')
    }else{
        console.log(arr[i] + ' this is boolean')
    }
}