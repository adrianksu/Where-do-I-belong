function getIndexToIns(arr, num) {
 arr.sort(function(a,b){
   return a-b;
   });
 let arr2 = arr.filter(val => val < num);
  return arr2.length;
}
getIndexToIns([40, 60], 50);
