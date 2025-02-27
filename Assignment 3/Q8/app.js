var arr=['SSC','HSC','BCS','BS','BCOM','MS','M.Phil','PhD']
document.write('Qualifications:<br>')
for(i=0;i<arr.length;i++){
    document.write(`${i+1})${arr[i]}<br>`)
}