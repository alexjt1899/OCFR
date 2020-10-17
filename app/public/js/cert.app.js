 ver app = new Vue({
  el: "#randomCert",
   data:{
    Certification: [],
     newCertification:{
        CertID:"",
        CertName:"",
       CerAgency:"",
       CertLength:"",
       CertDescription:""
     }
   },

   methods:{
         //Alex Added stuff Here
         createCertification( evt )	{
       			fetch("api/member/post.php",{
       				method:"POST",
       				body: JSON.stringify(this.newCertification),
       				headers: {
       					"Content-Type": "application/json; charset=utf-8"
       				}
       			})
       			.then( response.json() )
       			.then( json => {
       					console.log("returned from post:", json);
       					this.newCertification.push(json[0]);
       					this.newCertification = this.newCertificationData();
       			});
       			console.log("Creating (POSTing)")
       			console.log(this.newCertification);

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
  created(){
    fetch("api/member/")
    .then(response => response.json())
    .then( json => {
      this.Certification = json;
      console.log(json)}
    );
    }
});
//     createUser(){
//      this.newCertification.CertID = (this.newCertification.)
//     }
//   }
//
// })
