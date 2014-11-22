TrelloClone.Collections.Boards = Backbone.Collection.extend({
	url: 'api/boards',
  model: TrelloClone.Models.Board,
  getOrFetch: function(id){
	  var model = this.get(id);
		if(model){
			model.fetch()
			return model
		}else{
			model = new TrelloClone.Models.Board({id: id});
			model.fetch()
			return model;
		}
	}
	
});
TrelloClone.Collections.boards = new TrelloClone.Collections.Boards();