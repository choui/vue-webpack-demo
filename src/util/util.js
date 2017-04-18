/**
 * Created by admin on 2017/4/18.
 */

//随机交换数组内的元素位置
const shuffle = function(arr) {
   var newArr = arr.slice();
   var times = newArr.length;
    for(let i= 0;i<times;i++){
        let j = Math.floor(Math.random()*times);
        let temp = newArr[i];
        newArr[i] =  newArr[j];
        newArr[j] = temp;
    }
    return  newArr
};
export {
    shuffle
}