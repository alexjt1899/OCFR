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
       CerAgency:'',
       CertLength:'',
       CertDescription:''
     }
   },
   methods:{
     fetchCertification(){
       fetch('api/member/')
       .then(response => response.json())
      .then(json => {
        this.users=json;
         console.log(this.users);


         //Alex Added stuff Here
         createCertification()	{
       			fetch('api/member/post.php/',{
       				method:'POST',
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
       				CertID: '',
       				CertName: '',
       				CerAgency: '',
       				CertLength:'',
       				CertDescription:''
       			}
       	}
      },
  created(){
    this.fetchCertification();
  }
});
//     createUser(){
//      this.newCertification.CertID = (this.newCertification.)
//     }
//   }
//
// })
