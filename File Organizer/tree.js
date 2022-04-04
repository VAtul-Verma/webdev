
const fs=require('fs');
const path=require('path');
function treeFn(dirpath){
    if(dirpath==undefined){
        console.log("Please enter a vaild Path");
    }else{
        let doesExist=fs.existsSync(dirpath);
        if(doesExist){
            treehelper(dirpath," ");
        }

    }
}


function treehelper(targetpath,indent){
    let isfile=fs.lstatSync(targetpath).isFile();
    if(isfile==true){
        let filename=path.basename(targetpath);
        console.log(indent + "├──" +filename);
    }
    else{
        let dirname=path.basename(targetpath);
        console.log(indent + "└──" + dirname);

        let children=fs.readdirSync(targetpath);

        for(let i=0;i<children.length;i++){
            let chidpath=path.join(targetpath,children[i]);
            treehelper(chidpath,indent+'\t');
        }

    }
}

module.exports={
    treeKey:treeFn 
}   