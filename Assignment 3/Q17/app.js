var data=[]
var no=+prompt('Number of data you are putting. Enter a number')
for(i=0;i<no;i++){
    data[i]=prompt(`Enter item no ${i+1}`)
}
document.write('Devices:<br>')
document.write(data,'<br><br>')
for(j=0;j<no;j++){
    document.write('Out:<br>')
    document.write(data[j],'<br>')
}