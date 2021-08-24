function dis(num) 
{
    document.getElementById("display").textContent += num;
}
function solve()
{
    let x = document.getElementById("display").textContent;
    // eval fun evaluates the string ("6 + 5")
    document.getElementById("display").innerHTML = eval(x);
}
function clr() 
{
    document.getElementById("display").innerHTML = "";
}