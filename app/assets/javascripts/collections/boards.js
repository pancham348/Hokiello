TrelloClone.Collections.Boards = Backbone.Collection.extend({
	url: 'api/boards',
  model: TrelloClone.Models.Board,
  getOrFetch: function(id){
	  var model = this.get(id);
	  var that = this
		if(model){
			model.fetch();
		}else{
			model = new TrelloClone.Models.Board({id: id});
			model.fetch({
				success: function(){
					that.add(model)
				}
			})
			
		}
		
		return model;
	}
	
});
TrelloClone.Collections.boards = new TrelloClone.Collections.Boards;