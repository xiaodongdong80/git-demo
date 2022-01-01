function ajax(type,url,data){
    let xhr=new XMLHttpRequest();
    xhr.onreadystatechange=new Promise((resolve,reject)=>{
        if(xhr.readyState==4&&xhr.status==200){
            let result=xhr.responseText;
            if(result!=null){
                let arr=JSON.parse(result);
                resolve(arr)
            }else{
                reject()
            }
        }
    });
    if(type=="get"&&data!==undefined){
        url+="?"+data;
    }
    xhr.open(type,url,true);
    if(type=="post"){
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(data);
    }else{
        xhr.send(null);
    }
}
