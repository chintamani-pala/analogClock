let hourdiv=document.getElementById("hour")
let mindiv=document.getElementById("min")
let secdiv=document.getElementById("sec")

setInterval(()=>{
    let date=new Date;
    let hour=date.getHours()
    let min=date.getMinutes()
    let sec=date.getSeconds()
    let H_Niddle=30*hour+min/2
    let M_Niddle=6*min+sec/60
    let S_Niddle=6*sec
    hourdiv.style.transform=`rotate(${H_Niddle}deg)`
    mindiv.style.transform=`rotate(${M_Niddle}deg)`
    secdiv.style.transform=`rotate(${S_Niddle}deg)`
},1000)