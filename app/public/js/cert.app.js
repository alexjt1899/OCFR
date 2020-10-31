var randomCert = new Vue({
  el: "#randomCert",
   data:{
    certList: [{
        CertID:"",
        CertName:"",
        CerAgency:"",
        CertLength:"",
        CertDescription:""
    }],
     newCertification: {
        CertID:"",
        CertName:"",
        CerAgency:"",
        CertLength:"",
        CertDescription:""
      },

      certdetailList: [{
        ID:''
        Name:''

      }]
    },

    created() {
      this.fetchCertificate();
        this.fetchCertdetail();
    },

   methods:{

     DoQueryStuff() {
       
     }

     newCertificationData() {
       return {
         CertID: "",
         CertName: "",
         CerAgency: "",
         CertLength:"",
         CertDescription:""
       }
     },

    fetchCertificate(){
      fetch('api/Certification/index.php')
      .then(response => response.json())
      .then(json => {
        this.certList=json;
        console.log(this.certList);
      });
    },
    createCertification()	{
      fetch('api/Certification/post.php', {
        method:'POST',
        body: JSON.stringify(this.newCertification),
        headers: {
      	   "Content-Type": "application/json; charset=utf-8"
         }
       })
      .then( response => response.json() )
      .then( json => {
    	    console.log("Returned from post:", json);
	        this.certList = json;
    	    this.newCertification = this.newCertificationData();
        });
      },

      fetchCertdetail(){
        fetch('api/certdetail/index.php')
        .then(response => response.json())
        .then(json => {
          this.certdetailList=json;
          console.log(this.certdetailList);
        });
      }

    },

});


  // created() {
  // fetch("api/Certification/")
  // .then(response => response.json())
  // .then( json => {
  // this.Certification = json;
  // console.log(json)}
  // );
  // }
  // });
//     createUser(){
//      this.newCertification.CertID = (this.newCertification.)
//     }
//   }
//
// })
