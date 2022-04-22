class resourceCallersample {
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

class recallersample extends resourceCallersample
{
    constructor(url){
        super(url);
    }
    async mappedfunctionsample(){
        const result1 = await super.getvals().then(response =>{return response});
        const mapp = new Map();
        const keys = Object.keys(result1.data[0]);
        let arr = [];
        for(let j=0;j<keys.length;j++)
        {
            arr = "    <br>    "+ result1.data[0][keys[j]];
            mapp.set(keys[j], arr);
        }
        document.getElementById("demo1").innerHTML = mapp.get("id") + mapp.get("email")+mapp.get("first_name")+mapp.get("last_name");
    }
}
recall = new recallersample('https://reqres.in/api/users');
recall.mappedfunctionsample();
