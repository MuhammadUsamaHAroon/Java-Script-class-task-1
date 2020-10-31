var qualification=prompt("Your Qualification")
var year=+prompt("Your years of Service")
var salary=+prompt("Your current Salary")
var bsbonus=10000
var totalsalaryofbs=salary+bsbonus
var msbonus=15000
var totalsalaryofms=salary+msbonus
var msbonus1=20000
var totalsalaryofms1=salary+msbonus1

if(qualification==="Bachelors" && year<=10){
    alert("Your Current Salary with Bonus is "+totalsalaryofbs+"K")
}

else if(qualification==="Masters" && year>10){
    alert("Your Current Salary with Bonus is "+totalsalaryofms+"K")
}
else if(qualification==="Masters" && salary>=20000){
    alert("Your Current Salary with Bonus is "+totalsalaryofms1+"K")
}
