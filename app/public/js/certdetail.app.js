var Certdetail = new Vue({
  el: '#Certdetail',
  data: {
    CertDetailList: [
      {
        EmployeeID: '',
        firstName: '',
        lastName:'',
        radioNumber:'',
      	stationNumber:'',
      	isActive:'',
      	phone:'',
      	email:'',
      	address:'',
      	gender:'',
      	startDate:'',
      	Position:'',
      	CertExpiration:''
      }],
  },
  methods: {
    fetchDetail() {
      fetch('api/certdetail/index.php')
      .then(response => response.json())
      .then(json => { randomCert.CertDetailList = json })
    }

    // deleteCertification() {
    //   fetch('api/Certification/delete.php', {
    //     method:'POST',
    //     body: JSON.stringify(this.certification),
    //     headers:{
    //       "Content-Type": "application/json; charset=utf-8"
    //     }
    //     })
    //     .then( response => response.text() )
    //
    //     this.handleData();
    //   },

      // handleData() {
      //   this.certification = {
      //     CertID: ""
      //   }
      // }
  },
  created() {
    this.fetchDetail();
  }
});
