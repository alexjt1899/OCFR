var randomUser = new Vue({
  el: '#EditUser',
  data: {
    userList: [{
      EmployeeID: "",
      firstName: "",
      lastName: "",
      radioNumber: "",
      stationNumber: "",
      isActive: "",
      phone: "",
      email: "",
      address: "",
      gender: "",
      startDate: "",
      Position: ""
    }],
    User: {
      EmployeeID: "",
      firstName: "",
      lastName: "",
      radioNumber: "",
      stationNumber: "",
      isActive: "",
      phone: "",
      email: "",
      address: "",
      gender: "",
      startDate: "",
      Position: ""
    },
      activeUser: null
    },
    computed: {
      activeEmployeeID() {
        return this.activeUser ? this.activeUser.EmployeeID : ''
      },
      activefirstName() {
        return this.activeUser ? this.activeUser.firstName: ''
      },
      activelastName() {
        return this.activeUser ? this.activeUser.lastName: ''
      },
      activeradioNumber() {
        return this.activeUser ? this.activeUser.radioNumber: ''
      },
      activestationNumber() {
        return this.activeUser ? this.activeUser.stationNumber: ''
      },
      activeisActive() {
        return this.activeUser ? this.activeUser.isActive: ''
      },
      activephone() {
        return this.activeUser ? this.activeUser.phone: ''
      },
      activeemail() {
        return this.activeUser ? this.activeUser.email: ''
      },
      activeaddress() {
        return this.activeUser ? this.activeUser.address: ''
      },
      activegender() {
        return this.activeUser ? this.activeUser.gender: ''
      },
      activestartDate() {
        return this.activeUser ? this.activeUser.startDate: ''
      },
      activePosition() {
        return this.activeUser ? this.activeUser.Position: ''
      }
    },
    methods: {
      fetchUser() {
        fetch('api/user/get.php')
        .then(response => response.json())
        .then(json => { randomUser.member = json})
      },
      handleEditUserForm() {
        fetch('api/user/updateuser.php', {
          method:'POST',
          body: JSON.stringify(this.User),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })

        .then( response => response.text() )

        this.handleData();
      },
        handleData() {
          this.User = {
            EmployeeID: ""
          }
        }
    },
    created() {
      this.fetchMembers();
    }
    });



        handleUpdateMemberForm() {
          fetch('api/members/updatemembers.php', {
            method:'POST',
            body: JSON.stringify(this.User),
            headers: {
              "Content-Type": "application/json; charset=utf-8"
            }
          })
          .then( response => response.text() )

          this.handleData();
        },
          handleData() {
            this.User = {
              EmployeeID: ""
            }
          }
      },
      created() {
        this.fetchUser();
      }
    });
