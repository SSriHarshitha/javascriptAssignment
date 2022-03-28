// JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string
function getTheString(str)
{
    if((str[0]=="P" || str[0]=="p")&& (str[1]=="y" || str[1]=="Y"))
    {
        return str;
    }
    else
    {
        let temp;
        temp = "Py" + str;
        return temp;
    }
}
console.log("Adding Py string before the given string \n" + getTheString("YTHON"));