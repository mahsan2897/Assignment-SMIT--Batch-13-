var arr=['Cena','Roman','Brock']
var score=[300,350,280]
var total=500
for(i=0;i<arr.length;i++){
    document.write(`Score of ${arr[i]} is ${score[i]}. Percentage: ${Math.round(score[i]/total*100)}% <br>`)
}