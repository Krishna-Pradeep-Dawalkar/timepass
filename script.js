console.log("this is xml tut");

let fetchbtn=document.getElementById("fetchbtn");
fetchbtn.addEventListener("click",clickbuttonfunction);

function clickbuttonfunction(){
    console.log("button clicked");
    let xhr=new XMLHttpRequest();
    //get TO get data from somewhere either it be local drive ki koi file or it may be kisi web page ka koi data
    //xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1",true);
   
    xhr.open("POST","http://dummy.restapiexample.com/api/v1/create",true);
    xhr.getResponseHeader("content-type",'application/json');

    xhr.onprogress=function(){
        console.log("{On progress");
    }

    xhr.onload=function(){
        if(this.status===200){
        console.log(this.responseText);
        }
        else{
            console.error("Some error occured");
        }
    }
    params=`{"name":"test1","salary":"123","age":"23"}`;
    xhr.send(params);
}

let popbtn=document.getElementById("popbtn");
popbtn.addEventListener("click",popbuttonfunction);

function popbuttonfunction(){
    console.log("popultae button clicked");
    let xhr=new XMLHttpRequest();
    //get TO get data from somewhere either it be local drive ki koi file or it may be kisi web page ka koi data
    //xhr.open("GET","https://jsonplaceholder.typicode.com/todos/1",true);
   
    xhr.open("GET","http://dummy.restapiexample.com/api/v1/employees",true);
  
    
    xhr.onload=function(){
        console.log(this.status);
        if(this.status === 200){
        let obj=JSON.parse(this.responseText);
        console.log(obj);
        let lst=document.getElementById("list");
        console.log(lst);
        str ="";
        for (key in obj){
            str +=`<li>${obj[key].employee_name }</li>`;
        }
        lst.innerHTML=str;
        }
        else{
            console.error("Soem error occured");
        }
    }
  
    
    xhr.send();
    console.log("we are fetching employees")
}

let f=document.getElementById("fruit");
f.addEventListener('click',fruitsclick);

function fruitsclick(){
    let xhr=new XMLHttpRequest();
    xhr.open("GET","fruit.txt",true);
    xhr.onload=function(){
        if(this.status===200){
        //console.log(this.responseText);
        let a=this.responseText;
        let flst=document.getElementById("flist");
        let s="";
        s=`<li>${a }</li>`;
        flst.innerHTML=s;
        }
        else{
            console.log("some error occured");
        }
    }
    xhr.send();
}

let v=document.getElementById("vegetable");
v.addEventListener('click',vegesclick);

function vegesclick(){
    let xhr=new XMLHttpRequest();
    xhr.open("GET","vege.txt",true);
    xhr.onload=function(){
        if(this.status===200){
            let a=this.responseText;
            let vlst=document.getElementById("vlist");
            let s="";
            s=`<li>${a }</li>`;
            vlst.innerHTML=s;
            
        }
        else{
            console.log("some error occured");
        }
    }
    xhr.send();
}

