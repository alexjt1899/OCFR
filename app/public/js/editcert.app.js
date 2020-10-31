var randomCert = new Vue({
  el: '#randomCert',
  data: {
    certList: [],
    newCertification: {},
    choose: {
      CertID: "",
      CertName: "",
      CerAgency: "",
      CertLength: "",
      CertDescription: ""
    }
  },
  methods: {
    fetchCertificate() {
      fetch('api/Certification/index.php')
      .then(response => response.json())
      .then(json => { randomCert.certList = json })
    },

    editCertification() {
      fetch('api/Certification/edit.php', {
        method:'POST',
        body: JSON.stringify(this.newCertification),
        headers:{
          "Content-Type": "application/json; charset=utf-8"
        }
        })
        .then( response => response.text() )

        this.handleData();
      },

      handleData() {
        this.newCertification = {
          CertID: ""
        }
      }
  },
  created() {
    this.fetchCertificate();
  }
});

function success() {
  alert("Click OK if you want to edit the certification");
  window.location.href = "Certificatelist.html";
}
