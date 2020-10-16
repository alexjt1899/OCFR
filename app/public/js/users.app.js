var app = new Vue({
	el: '#userProfile',
	data: {


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

			});
		}
	}
})
