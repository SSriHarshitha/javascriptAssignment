class resourceCaller {
    constructor(url){
        this.url=url;
    }
async getvals(){
    return await fetch(this.url)
    .then((response) => response.json())
    .catch(error => console.warn(error));
  }
}
// call = new resourceCallersample('https://reqres.in/api/users');
//  call.getvals().then(response => console.log(response));

class resourceCallerChild extends resourceCaller
{
    constructor(url){
        super(url);
    }
    async mappedfunction(){
        const result1 = await super.getvals().then(response =>{return response});
        const mapp = new Map();
        const keys = Object.keys(result1.data[0]);
        let arr = [];
        for(let i=0;i<result1.data.length;i++)
        {
            arr = [];
        for(let j=0;j<keys.length;j++)
        {
            arr = arr+ "    <br>    "+ result1.data[j][keys[i]];
        }
        mapp.set(keys[i], arr);
        }
        console.log(mapp);
        document.getElementById("demo1").innerHTML= mapp.get("id") + mapp.get("email") + mapp.get("first_name");
    }
}
recall = new resourceCallerChild('https://reqres.in/api/users');
 recall.mappedfunction();