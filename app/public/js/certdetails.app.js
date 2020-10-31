var certdetail = new Vue({
  el: "#certdetail",
   data:{
    certdetailList: [{
        Person_certID:"",
        CertID: '',
        EmployeeID:''
    }]
    },

    created() {
      this.fetchCertdetail();
    },

   methods:{
     newCertdetailData() {
       return {
         Person_certID:"",
         CertID: '',
         EmployeeID:''
       }
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
