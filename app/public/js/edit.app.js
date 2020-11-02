var certVue = new Vue({
  el: '#certsPage',
  data: {
    certList: [],
    mainMenu: true,
    detailMenu: false,
    editNow: false,
    addNow: false,
    newCertForm: {},
    certificationDetails: [],
    memberDetails: []
  },
  methods: {
    getNewCertForm() {
      return {
        certName: "",
        duration: "",
        agency: ""
      }
    },
    getCertDetails( certificationID ) {
      mainMenu = false;
      detailMenu = true;
      fetch("api/certifications/?certificationID=".concat(certificationID))
      .then( response => response.json() )
      .then( json => {
        this.memberDetails = json;
        this.mainMenu = false;
        this.detailMenu = true;
        this.certificationDetails = this.memberDetails[0];
        console.log(json)}
      );
    },
    uploadEditedCert( certificationID ) {
      this.editNow = false;
      fetch('api/certifications/add.php', {
        method:'POST',
        body: JSON.stringify(this.certificationDetails),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.memberDetails = json;
        this.certificationDetails = this.memberDetails[0];
      });
    },
    addNewCert() {
      fetch('api/certifications/add.php', {
        method:'POST',
        body: JSON.stringify(this.newCertForm),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.certList = json;
        this.newCertForm = this.getNewCertForm();
        this.addNow = false;
      });
    },
    deleteCert( certificationID ) {
      fetch('api/certifications/remove.php', {
        method:'POST',
        body: JSON.stringify({certID: certificationID}),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.certList = json;
        this.newCertForm = this.getNewCertForm();
        this.addNow = false;
      });
    }
  },
  created() {
    fetch("api/certifications/")
    .then( response => response.json() )
    .then( json => {
      this.certList = json;
      this.newCertForm = this.getNewCertForm();
      console.log(json)}
    );
  }
})
