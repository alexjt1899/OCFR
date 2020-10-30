 var app = new Vue({
  el: "#expCert",
   data:{
    CertificationList: [{
        Person_certID:"",
        CertName:"",
       Name:"",
       CertLength:"",
       ExpDate:""
     }]
   },

   methods:{
fetchCert(){
  fetch("api/Certification/expiredReport.php")
  .then(response => response.json())
  .then( json => {
    this.CertificationList = json;
    console.log(json)})
},

created() {
this.fetchCert;
console.log("WORK");
}

}


});
//     createUser(){
//      this.newCertification.CertID = (this.newCertification.)
//     }
//   }
//
// })
