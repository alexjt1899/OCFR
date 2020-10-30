 var app = new Vue({
  el: "#expCert",
   data:{
    Certification: [{
        Person_certID:"",
        CertName:"",
       Name:"",
       CertLength:"",
       ExpDate:""
     }],

   methods:{


  created(){
    fetch("api/Certification/expiredReport.php")
    .then(response => response.json())
    .then( json => {
      this.Certification = json;
      console.log(json)}
    )
  },}
}
});
//     createUser(){
//      this.newCertification.CertID = (this.newCertification.)
//     }
//   }
//
// })
