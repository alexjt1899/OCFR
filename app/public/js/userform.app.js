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
    }
  },

  methods:{
    fetchUser(){
      fetch('api/user/get.php')
      .then(response => response.json())
      .then(json => {
        this.usersList=json;
        console.log(this.usersList);
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
        this.usersList.push(json[0]);
        this.newUser = this.newUserData();
        //this.usersList = json;
        //this.newUser = this.newUserData();
      });

      console.log("Creating (POSTing)...!");
      console.log(this.newUser);
      this.fetchUser();
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
