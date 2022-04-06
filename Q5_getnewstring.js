// JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string

document.getElementById("btn5").onclick=getTheString;
function getTheString()
{
    let str = document.getElementById("inputbox5").value;
    if((str[0]=="P" || str[0]=="p")&& (str[1]=="y" || str[1]=="Y"))
    {
        document.writeln("This string has Py in it : \n" + str);
    }
    else
    {
        let temp;
        temp = "Py" + str;
        document.writeln("Adding Py string before the given string : \n" + temp);
    }
}
// console.log("Adding Py string before the given string \n" + getTheString("YTHON"));