var arr = ['a','a','b']
/*
{number in array : count}
*/
var map = {};

for(var i = 0; i < arr.length;i++){
    if(arr[i] in map){
        map[arr[i]]++;
    }else {
        map[arr[i]] = 1;
    }
}

console.log(map)

map['a'] = 1