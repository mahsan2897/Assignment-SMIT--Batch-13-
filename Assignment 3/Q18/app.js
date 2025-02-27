var arr=[]
arr[0]='Keyboard'
arr[1]='Mouse'
arr[2]='Printer'
arr[3]='Monitor'
document.write(`Devices:<br> ${arr} <br>`)
for(i=arr.length-1;i>=0;i--){
    document.write(`Out:<br> ${arr[i]} <br>`)
}