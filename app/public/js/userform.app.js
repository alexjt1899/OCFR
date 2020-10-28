app = new Vue({
  el: '#users',
  data: {
    usersList: [{
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
    newUser: {
      EmployeeID: '',
      firstName: '',
      lastName:''
    }
  },

  methods:{
    fetchUser(){
      fetch('api/user/')
      .then(response => response.json())
      .then(json => {
        this.userList=json;
        console.log(this.userList);
      });
    },

    createUser() {
      fetch('api/user/post.php', {
        method:'POST',
        body: JSON.stringify(this.newUser),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
        this.userList = json;
        this.newUser = this.newUserData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newUser);
    },
    newUserData() {
      return {
        EmployeeID: "",
        firstName: "",
        lastName:""
      }
    }

  },
  created() {
    this.fetchUser();
  }
});
