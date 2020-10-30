var randomCert = new Vue({
  el: '#randomCert',
  data: {
    certList: [],
    certification: {}
  },
  methods: {
    fetchCertificate() {
      fetch('api/Certification/index.php')
      .then(response => response.json())
      .then(json => { randomCert.certList = json })
    },

    deleteCertification() {
      fetch('api/Certification/delete.php', {
        method:'POST',
        body: JSON.stringify(this.certification),
        headers:{
          "Content-Type": "application/json; charset=utf-8"
        }
        })
        .then( response => response.text() )

        this.handleData();
      },

      handleData() {
        this.certification = {
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
