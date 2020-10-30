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
			fetch('api/user/get.php')
			.then(response => response.json())
			.then(json =>  {
				this.members =json;
				console.log(this.members);

			});
		},

		created() {
			this.fetchUser();

	}}
});
