var cityNames=[]
var no=+prompt('Enter no of cities')
for(i=0;i<no;i++){
    cityNames[i]=prompt(`Enter city no ${i+1}`)
}
document.write('Cities List:','<br>')
document.write(cityNames,'<br><br>')
document.write('Selected Cities List:','<br>')
var choice1=+prompt('Enter start point of copy')
var choice2=+prompt('Enter end point copy')
var selectedNames=cityNames.slice(choice1,choice2+1)
document.write(selectedNames)