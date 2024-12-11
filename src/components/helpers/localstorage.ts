function setPath(path:string):void{
localStorage.setItem("path",path)
}

function getPath():string | null{
return localStorage.getItem("path")
}

export {setPath,getPath}