var randomUser = new Vue({
  el: '#randomUser',
  data: {
    usersList: [],
    user: {}
  },
  methods: {
    fetchUser() {
      fetch('api/user/get.php')
      .then(response => response.json())
      .then(json => { randomUser.usersList = json })
    },

    deleteUser() {
      fetch('api/user/delete.php', {
        method:'POST',
        body: JSON.stringify(this.user),
        headers:{
          "Content-Type": "application/json; charset=utf-8"
        }
        })
        .then( response => response.text() )

        this.handleData();
      },

      handleData() {
        this.user = {
          EmployeeID: ""
        }
      }
  },
  created() {
    this.fetchUser();
  }
});

function success() {
  alert("Click OK if you want to delete the member");
  window.location.href = "NewUser.html";
}
