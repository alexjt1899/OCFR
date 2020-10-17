 waitingApp = new Vue({
  el: '#randomCert',
   data:{
//     Certification: [{
//       CertID:'',
//       CertName:'',
//       CerAgency:'',
//       CertLength:'',
//       CertDescription:''
//     }],
     newCertification:{
      CertID:'',
      CertName:'',
       CerAgenc:'',
       CertLength:'',
       CertDescription:''
     }
   },
   methods:{
     fetchUser(){
       fetch('api/member/')
       .then(response => response.json())
      .then(json => {
        this.users=json;
         console.log(this.Certification);


         //Alex Added stuff Here
         CreateCertification()	{
       			fetch('api/Certification/',{
       				method:'POST',
       				body: JSON.stringify(this.newCert),
       				headers: {
       					"Content-Type": "application/json; charset=utf-8"
       				}
       			})
       			.then( response.json() )
       			.then( json => {
       					console.log("returned from post:", json);
       					this.newCert.push(json[0]);
       					this.newCert = this.newCertData();
       			});
       			console.log("creating (POSTing)")
       			console.log(this.newCert);

       	},

       	newCertData() {
       			return{
       				CertID: "",
       				CertName: "",
       				CerAgency: "",
       				CertLength:"",
       				CertDescription:""
       			}
       	}


       	}
      

       });
     },
//     createUser(){
//      this.newCertification.CertID = (this.newCertification.)
//     }
//   }
//
// })
