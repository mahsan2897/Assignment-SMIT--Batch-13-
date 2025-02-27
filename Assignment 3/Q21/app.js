var arr=[]
arr[0]=[0,1,2,3]
arr[1]=[1,0,1,2]
arr[2]=[2,1,0,1]
for(i=0;i<arr.length;i++){
    for(j=0;j<arr[i].length;j++){
        document.write(`${arr[i][j]} `)
    }
    document.write('<br>')
}