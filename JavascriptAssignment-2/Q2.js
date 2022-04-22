async function loadUsers(){
    try{
    const result = await fetch("https://reqres.in/api/users?page=2");
    const users = await result.json();
     console.log(users);
    const mapp = new Map();
    const keys = Object.keys(users.data[0]);
    // console.log(keys);
    for(let i=0;i<keys.length;i++)
    {
        let arr = [];
    for(let j=0;j<users.data.length;j++)
    {
        arr = arr+ "    <br>    "+ users.data[j][keys[i]];
    }
    mapp.set(keys[i], arr);
    }
    //console.log(mapp);
    mapp.forEach((value,key) => {
        console.log(key + "  " +value);
    });
    document.getElementById("demo").innerHTML = "id : " + mapp.get("id") + "<br> email : " + mapp.get("email") + "<br> name : "+mapp.get("first_name");
    }
    catch(e){
        console.log("Error!!");
        console.log(e);
    }
}
document.getElementById("click").onclick = loadUsers;
// document.addEventListener("click",loadUsers);