var arr=[]
for(i=0;i<=3;i++){
    arr[i]=prompt(`Enter movie no ${i+1}`)
}
document.write('<h4>Top movies of 2015</h4><br>')
for(j=0;j<=3;j++){
    document.write(`${j+1}) ${arr[j]}<br>`)
}
document.write('<br>')
document.write(`<h4>Length of the array: ${arr.length}</h4>`)
document.write('<br><br>')
var arr1=[]
for(k=0;k<=3;k++){
    arr1[k]=prompt(`Enter your favourite car no ${k+1}`)
}
document.write('<h4>Favorite Cars</h4><br>')
document.write(arr1)
document.write('<br><br>')
document.write('First index of the array: 0<br>')
document.write(`Car at first index of the array: ${arr1[0]}<br>`)
document.write(`Last index of the array: ${(arr1.length)-1}<br>`)
document.write(`Car at last index of the array: ${arr1[(arr1.length)-1]}<br>`)
document.write('<br><br>')
var arr2=[]
var arr3=[]
document.write('<h4>Result</h4><br>')
for(l=0;l<=2;l++){
    arr2[l]=prompt(`Enter name of student ${l+1}`)
    arr3[l]=+prompt(`Enter score of ${arr2[l]}`)
    document.write(`Score of ${arr2[l]} is ${arr3[l]}. Percentage: ${(((arr3[l])/500)*100).toFixed(2)}%<br>`)
}