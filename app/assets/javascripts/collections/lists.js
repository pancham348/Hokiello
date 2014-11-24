TrelloClone.Collections.BoardLists = Backbone.Collection.extend({

  model: TrelloClone.Models.List,
	
  url: function(){
		return this.board.url()
	},
	
	initialize: function(models, options){
		this.board = options.board;
	}

});
