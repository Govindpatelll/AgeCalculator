let inputDate=document.getElementById("date");

inputDate.max=new Date().toISOString().split("T")[0];

let result=document.getElementById("result")

let calculateAge=(()=>{
    let birthdate=new Date(inputDate.value);
    
    let d1=birthdate.getDate();
    let y1=birthdate.getFullYear();
    let m1=birthdate.getMonth()+1;


    let todaydate=new Date();
    
    let d2=todaydate.getDate();
    let y2=todaydate.getFullYear();
    let m2=todaydate.getMonth()+1;
  
   let y3,m3,d3;

   y3=y2-y1;

   if(m2>=m1){
    m3=m2-m1;
   } else{
    y3--;
    m3=12+m2-m1;
   }

   if(d2>=d1){
    d3=d2-d1;
   }else{
    m3--;
    d3=dateInMonth(y3,m3)-d2-d1;
   }

   let dateInMonth=((year,month)=>{
      return new Date(year,month,0).getDate();
   })


   result.innerHTML=`You are <span>${y3}</span> Year , <span>${m3}</span> Month and <span> ${d3} </span> days  Old`
   
})


document.querySelector("button").addEventListener("click",(()=>{
    calculateAge()
}))