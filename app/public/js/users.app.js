var app = new Vue({
	el: '#userProfile',
	data: {
		members: [{
			firstName: '',
			lastName: '',
			station:''

		}]


	},


	methods: {
		fetchUser: function(){
			fetch('api/member/')
			.then(response => response.json())
			.then(json =>  {
				this.member =json;
				console.log(this.member);

			});
		}
		created() {
			this.fetchUser();
		},

	}
})
