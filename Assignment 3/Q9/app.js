var arr=[]
arr[0]='Avengers:Age of Ultron'
arr[1]='Spectre'
arr[2]='Jurassic World'
arr[3]='Inside Out'
document.write('<h1>Top Movies of 2015</h1>')
for(i=0;i<arr.length;i++){
    document.write(`${i+1})${arr[i]}<br>`)
}
document.write(`<h3>Length of array: ${arr.length}</h3>`)