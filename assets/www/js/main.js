var app = {

	initialize : function() {
		var self = this;
		this.store = new MemoryStore(function() {
			$('body').html(new HomeView(self.store).render().el);
			$('body').html(new HomeView(self.store).findByName());
		});
	},

	showAlert : function(message, title) {
		if (navigator.notification) {
			navigator.notification.alert(message, null, title, 'OK');
		} else {
			alert(title ? (title + ": " + message) : message);
		}
	}

};

app.initialize();