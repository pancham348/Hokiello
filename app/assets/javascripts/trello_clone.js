window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
	
	  new TrelloClone.Routers.Boards({
				  $rootEl: $("#main")
				});
	  Backbone.history.start();
  }
};


