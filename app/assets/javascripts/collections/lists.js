TrelloClone.Collections.BoardLists = Backbone.Collection.extend({

  model: TrelloClone.Models.List,
	
  url: "api/lists",
	
	initialize: function(models, options){
		this.board = options.board;
	}

});

//TrelloClone.Collections.lists = new TrelloClone.Collections.BoardLists();