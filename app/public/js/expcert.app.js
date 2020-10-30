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

   created() {
   this.fetchCert();
  console.log("Testing Created");

   },

   methods:{
fetchCert(){
  fetch("api/Certification/expiredReport.php")
  .then(response => response.json())
  .then( json => {
    this.CertificationList = json;
    console.log(json)})
}



}


});
