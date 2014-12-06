var quicksort = function(arr){
    if(arr.length==0){
        return arr;
    }
    var pivot = arr[0];
    var left = [];
    var right = [];
    for(var i=1; i<arr.length; i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quicksort(left).concat(pivot, quicksort(right));
}

var mergesort = (function(){
    var sort = function(arr){    
        if(arr.length<=1){
            return arr;
        }
        var half = Math.ceil(arr.length/2);
        var left = arr.slice(0, half);    
        var right = arr.slice(half, arr.length);
        return merge(sort(left), sort(right));
    };
    var merge = function(left, right){
        var result = [];     
        while(left.length || right.length) {     
            if(left.length && right.length) {     
                if(left[0] < right[0]) {
                    result.push(left.shift());
                } else {
                    result.push(right.shift());
                }     
            } else if (left.length) {
                result.push(left.shift());
            } else {
                result.push(right.shift());
            }
        } 
        return result; 
    };    
    return sort;
}());

var heapsort = (function(){
    var sort = function(array) {
        var size = array.length;
        var temp;
        buildMaxHeap(array);
        for (var i = array.length - 1; i > 0; i--) {
            temp = array[0];
            array[0] = array[i];
            array[i] = temp;
            size--;
            heapify(array, 0, size);
        }
        return array;
    };
    function buildMaxHeap(array) {
        for (var i = Math.floor(array.length / 2); i >= 0; i--) {
            heapify(array, i, array.length);
        }
        return array;
    };
    function heapify(array, index, heapSize) {
        var left = 2 * index + 1;
        var right = 2 * index + 2;
        var largest = index;
        if (left < heapSize && array[left] > array[index]){
            largest = left;
        }
        if (right < heapSize && array[right] > array[largest]){
            largest = right;
        }
        if (largest !== index) {
            var temp = array[index];
            array[index] = array[largest];
            array[largest] = temp;
            heapify(array, largest, heapSize);
        }
    };
    return sort;
}());

// Fisher-Yates algorithm
var shuffle = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var arr = [];
for(var i=0; i<10; i++){
    arr.push(Math.floor(Math.random()*100)+1);
}
srr = shuffle(arr);
document.write('<br /><pre>');
document.write('array:     ', arr);
document.write("\n\n");
document.write('quicksort: ', quicksort(arr));
document.write("\n");
document.write('mergesort: ', mergesort(arr));
document.write("\n");
document.write('heapsort:  ', heapsort(arr));
document.write('</pre><br />');