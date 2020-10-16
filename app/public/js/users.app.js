var app = new Vue({
	el: '#userProfile',
	data: {
		members: [{
			firstName: '',
			lastName: '',
			station:''

		}]


	},
	created() {
		this.fetchUser();
	},

	methods: {
		fetchUser: function(){
			fetch('api/member/')
			.then(response => response.json())
			.then(json =>  {
				this.members =json;
				console.log(this.);

			});
		}
	}
})
