const fs=require('fs');
const path=require('path');
let types = {
    media: ["mp4", "mkv","mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function organizeFn(dirpath){
    let destPath;
    if(dirpath==undefined){
        console.log("Please Enter a Directory Path");
        return;
    }
    else{
        let doesExist=fs.existsSync(dirpath);
        // console.log(doesExist);

        if(doesExist){
            //create a organized file directory
            destPath=path.join(dirpath,"organized_files");
            if(fs.existsSync(destPath)==false){
                fs.mkdirSync(destPath);
            }else{
                console.log("The File is already Exists");
            }
        }else{
            console.log("Please Enter a Valid path")
        }
    }
    organize_helper(dirpath,destPath);
}



// funtion is used for organize the file
function organize_helper(src,dest){
let chileNames=fs.readdirSync(src)   //used to see how many file in a perticulare folder
// console.log(chileNames);   //give the file in a array

for(let i=0;i<chileNames.length;i++){
    let childAddress=path.join(src,chileNames[i]);
    let isFile=fs.lstatSync(childAddress).isFile()
    if(isFile==true){
        let fileCategory=getCategory(chileNames[i])
        console.log(chileNames[i]+"  Belongs to---->> "+fileCategory);
        sendfile(childAddress,dest,fileCategory);
    }
}

}
function getCategory(name){
    //find file extension
    let ext=path.extname(name);
    // console.log(ext);
    ext=ext.slice(1);
    // console.log(ext);

    for(let type in types){
        let ctypeArr=types[type]

        for(let i=0;i<ctypeArr.length;i++){
            if(ext==ctypeArr[i]){
                return type;
            }
        }
    }
    return "Others";

}
function sendfile(srcfilepath,dest,filecategory){
    let catpath=path.join(dest,filecategory);

    if(fs.existsSync(catpath)==false){
        fs.mkdirSync(catpath);
    }
    let filename=path.basename(srcfilepath);
    let destfilepath=path.join(catpath,filename);
    fs.copyFileSync(srcfilepath,destfilepath);
    fs.unlinkSync(srcfilepath);
    console.log(filename + "copy to file cata" + filecategory);
}


module.exports={
    organizekey : organizeFn
}