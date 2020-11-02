var app = new Vue({
  el: '#DeleteCert',
  data: {
    certList: [],
    certification: {},

    activecert:{
      CertID:"",
      CertName:"",
      CerAgency:"",
      CertLength:"",
      CertDescription:""
    }
  },



  methods: {
    fetchCertificate() {
      fetch('api/Certification/index.php')
      .then(response => response.json())
      .then(json => {this.certList = json })
    },

    deleteCertification() {
      fetch('api/Certification/delete.php', {
        method:'POST',
        body: JSON.stringify(this.activecert),
        headers:{
          "Content-Type": "application/json; charset=utf-8"
        }
        })
        .then( response => response.text() )
        this.handleData();
        console.log("Fetching...");
        this.fetchCertificate();
      },

      handleData() {
        this.activecert = {
          CertID: ""
        }
      }
  },
  created() {
    this.fetchCertificate();
  }
});

function success() {
  alert("Click OK if you want to delete the certification");
  window.location.href = "Certificatelist.html";
}
