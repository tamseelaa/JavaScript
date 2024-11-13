let x,y,z;
x=parseInt(prompt("Enter 1st integer: "))
y=parseInt(prompt("Enter 2nd integer: "))
z=parseInt(prompt("Enter 3rd integer: "))
sum=x+y+z
product=(x*y*z)
average=sum/3
//document.querySelector('#target').innerHTML = 'Sum of numbers: '+ sum ';''Product of numbers: '+ product ';' 'Average of numbers: '+ average;
document.querySelector("#target").innerHTML = "Sum: " + sum + " ; " + "Product: " + product + " ; " + "Average: " + average + " ; ";