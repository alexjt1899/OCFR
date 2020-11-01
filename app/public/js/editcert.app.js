var randomCert = new Vue({
  el: '#EditCert',
  data: {
    certList: [{
      CertID: "",
      CertName: "",
      CerAgency: "",
      CertLength: "",
      CertDescription: ""
  }  ],


    newCertification: {
      CertName: "",
      CerAgency: "",
      CertLength: "",
      CertDescription: ""

    },
    EditedCert: {
      CertID: "",
      CertName: "",
      CerAgency: "",
      CertLength: "",
      CertDescription: ""
    },

SelectedID: "12"

  },
  methods: {

    printID(){
      this.EditedCert.CertID=this.SelectedID
      console.log(this.EditedCert.CertID)

    },

    fetchCertificate() {
      fetch('api/Certification/index.php')
      .then(response => response.json())
      .then(json => { randomCert.certList = json })
      console.log(this.certList);
    },

    editCertification() {

      this.EditedCert.CertID=this.SelectedID;
      fetch('api/Certification/edit.php', {
        method:'POST',
        body: JSON.stringify(this.EditedCert),
        headers:{
          "Content-Type": "application/json; charset=utf-8"
        }
        })
        .then( response => response.text() )

        console.log(this.EditedCert)

    //    this.handleData();
      },

    //  handleData() {
//        this.newCertification = {
    //      CertID: ""
      //  }
    //  }
 },
  created() {
    this.fetchCertificate();


  }
});

function success() {
  alert("Click OK if you want to edit the certification");
  window.location.href = "Certificatelist.html";
}
