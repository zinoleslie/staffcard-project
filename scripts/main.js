const  staffElem = 
[
{

    Name:"name: zino leslie",
    dob:"Date: 12/4/2026",
    position:"SOFT-WARE DEV",
    picImage:"./images/propic.jpg",
    IDnumber:"Id Num:",
    profileAge:"age: 30",
    
},
{

    Name:"name: zino",
    dob:"Date: 12/4/2026",
    position:"SOFT-WARE DEV",
    picImage:"./images/propic.jpg",
    IDnumber:"Id Num:",
    profileAge:30,
},
{

    Name:"name: zino",
    dob:"Date: 12/4/2026",
    position:"SOFT-WARE DEV",
    picImage:"./images/propic.jpg",
    IDnumber:"Id Num:",
    profileAge:34
},
{

    Name:"name: zino",
    dob:"Date: 12/4/2026",
    position:"SOFT-WARE DEV",
    picImage:"./images/propic.jpg",
    IDnumber:"Id Num:",
    profileAge:44,
},
]

//id card section......
let staffbox = document.getElementById("ID-CARD");


for(i = 0; i < staffElem.length;i++) {
    let boxCard = document.createElement("div");
    boxCard.setAttribute("class","deCARD");
    staffbox.appendChild(boxCard);

    //create the company box

    let Compbox = document.createElement("div");
    Compbox.setAttribute("class","seprator");
    boxCard.appendChild(Compbox);

    //give the company name

    let compName = document.createElement("h2");
    compName.setAttribute("class","style-1");
    compName.innerHTML="GoMyCode";
    Compbox.appendChild(compName);

    //create the box for info

    let information = document.createElement("div");
    information.setAttribute("class","contentcrd");
    boxCard.appendChild(information);

    //add image 

    let imgcontainer = document.createElement("img");
    imgcontainer.setAttribute("class","picframe");
    imgcontainer.src= staffElem[i].picImage;
    information.appendChild(imgcontainer);

    //create the profession

    let postcont = document.createElement("h3");
    postcont.setAttribute("class","");
    postcont.innerHTML = staffElem[i].position;
    information.appendChild(postcont);
     
    //create the user info

    let profilename= document.createElement("h4");
    profilename.innerHTML = staffElem[i].Name;
    profilename.setAttribute("class","text-2");
    information.appendChild(profilename);

    //create the id number

    let idprofile = document.createElement("h4");
    idprofile.innerHTML= staffElem[i].IDnumber;
    idprofile.setAttribute("class","text-2");
    information.appendChild(idprofile);

    //create the date of birth

    let birthinput = document.createElement("h4");
    birthinput.innerHTML= staffElem[i].dob;
    birthinput.setAttribute("class","text-2");
    information.appendChild(birthinput);
    
    //create the age

    let agetext = document.createElement("h4");
    agetext.innerHTML=staffElem[i].profileAge;
    agetext.setAttribute("class","text-2");
    information.appendChild(agetext);

    //craee the last styled box beneath

    let buttombox = document.createElement("div");
    buttombox.setAttribute("class","bttom");
    boxCard.appendChild(buttombox);



}