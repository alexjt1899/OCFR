var app = new Vue({
	el: '#userProfile',
	data: {
		userName: ' John Doe ',
		userEmail: 'jdoe@iu.edu',
		userBday: 'Bday',
		userAge: 'Age',
		userCountry: 'Country',
		userPic: '',
		userThumbnail:'',

	},
	created() {
		this.fetchUser();
	},

	methods: {
		fetchUser: function(){
			fetch('https://randomuser.me/api')
			.then(response => response.json())
			.then(data =>  {
				var userData = data.results[0];
				console.log(userData);
				this.userName = userData.name.first + " " + userData.name.last;
				this.userEmail = userData.email;
				this.userBday = userData.registered.date.substring(0,10);
				this.userAge = userData.registered.age;
				this.userCountry = userData.location.country;
				this.userPic = userData.picture.large;
				this.userThumbnail = userData.picture.thumbnail;
			});
		}
	}
})
