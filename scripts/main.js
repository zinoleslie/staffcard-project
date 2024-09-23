let formStorage= [

]

function submitInfo(e) {
   e.preventDefault();  //to prevent auto submit

   let newobj= {
      profilenames: formcard.profilenames.value,
      position: formcard.position.value,
      dob: formcard.dob.value,
      IDnumber: formcard.IDnumber.value,
      Imagespic: formcard.Imagespic.value,
      DateofJ: formcard.DateofJ.value,
   }

   formStorage.push(newobj);
   console.log(formStorage);
   document.forms[0].reset();
   loopform();
}

let IDCARDs = document.getElementById("ID-CARD");

//create a function for the loop
function loopform() {

   IDCARDs.innerHTML='';

for(i = 0; i < formStorage.length; i++) {
   let boxcard = document.createElement("div");
   boxcard.setAttribute("class","deCARD");
   IDCARDs.appendChild(boxcard);

   //companyname container
   let company = document.createElement("div");
   company.setAttribute("class","seprator");
   boxcard.appendChild(company);

   // the company name
   let companyname = document.createElement("h2");
   companyname.setAttribute("class","style-1");
   companyname.innerHTML="GoMyCode";
   company.appendChild(companyname);

   //the information section
   let infoSec = document.createElement("div");
   infoSec.setAttribute("class","contentcrd");
   company.appendChild(infoSec);

   //image section
   let imgsec = document.createElement("img");
   imgsec.setAttribute("class","picframe");
   imgsec.src=formStorage[i].Imagespic;
   infoSec.appendChild(imgsec);

   //
   let staffPost = document.createElement("h3");
   staffPost.setAttribute("class","text-1");
   staffPost.innerHTML=  formStorage[i].position;
   infoSec.appendChild(staffPost);

    //
    let staffname = document.createElement("h4");
    staffname.setAttribute("class","text-3");
    staffname.innerHTML="Names:  " + formStorage[i].profilenames;
    infoSec.appendChild(staffname);

   //
   let dateinfo = document.createElement("h4");
   dateinfo.setAttribute("class","text-2");
   dateinfo.innerHTML="DOB:  " + formStorage[i].dob;
   infoSec.appendChild(dateinfo);

   //
   let staffID = document.createElement("h4");
   staffID.setAttribute("class","text-2");
   staffID.innerHTML ="ID Num: " +formStorage[i].IDnumber;
   infoSec.appendChild(staffID);

   //
   let joindate = document.createElement("h4");
   joindate.setAttribute("class","text-2");
   joindate.innerHTML="DOJ:  " + formStorage[i].DateofJ;
   infoSec.appendChild(joindate);

   //
   let footercard = document.createElement("div");
   footercard.setAttribute("class","bttom");
   boxcard.appendChild(footercard);

   //
   let footertext = document.createElement("h5");
   footertext.innerHTML="copyright @2016 'gomycode'";
   footertext.setAttribute("class","foottext")
   footercard.appendChild(footertext);
}
}

const submitbtn = document.getElementById("formcard");
submitbtn.addEventListener("submit", submitInfo )