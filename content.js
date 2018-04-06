console.log("hello to content.js page");
let filenames=[
    "IMG-20180325-WA0002.jpg"

]

let img=document.getElementsByTagName("img");
for(let imgs of img){   
    let file="image/"+filenames[0];
     let url = chrome.extension.getURL(file);
     imgs.src=url;
    console.log(url);
    
}



