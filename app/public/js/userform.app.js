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
    },

    userdetailList: [{
            id:'',
            Name:''



    }],

    activeUser:{
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

      })
      .then( this.fetchUser());

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
    },

    fetchUserdetail(){
      fetch('api/userdetail/index.php')
      .then(response => response.json())
      .then(json => {
        this.userdetailList=json;
        console.log('Detail List:')
        console.log(this.userdetailList);

      });
    },

    updateUser( evt ){
      fetch('api/user/updateuser.php', {
        method: 'POST',
        body: JSON.stringify(this.activeUser),
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        }
      })
      .then( response => response.json() )
      .then( json => {
        console.log("Returned from post:", json);
      });
    }

  },
    // https://stackoverflow.com/questions/15547198/export-html-table-to-csv this is taken from answer 2 on the page

  created() {
    this.fetchUser();
    this.fetchUserdetail();
  }
});
