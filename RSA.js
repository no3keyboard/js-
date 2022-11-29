// import {jsencrypt} from 'https://passport.cnblogs.com/scripts/jsencrypt.min.js';
// import {} from './sha512.js';

const btnsha512 = document.getElementById('sha-512');
btnsha512.onclick = function sha512ToHash(){
    let m = document.getElementById('input_Message');
    var hashed;
    if(m.length){
        hashed == "数据空无法计算";
    }else{
        hashed = hex_sha512(m);
        hashed = hashed.slice(0,60);
    }
    document.getElementById('hash_Result').vlaue = hashed;
}