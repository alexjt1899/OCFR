app = new Vue({
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
     }
   },

   methods:{
     fetchUser(){
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
    	this.certList.push(json[0]);
    	this.newCertification = this.newCertificationData();
    })

    .then( this.fetchUser());

    console.log("Creating (POSTing)...!");
    console.log(this.newCertification);
    this.fetchUser();
  },

  newCertificationData() {
    return{
      CertID: "",
      CertName: "",
      CerAgency: "",
      CertLength:"",
      CertDescription:""
    }
  }

  },
  created() {
    this.fetchUser();
  }
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
