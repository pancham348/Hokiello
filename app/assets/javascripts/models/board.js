TrelloClone.Models.Board = Backbone.Model.extend({
	urlRoot: "api/boards",
	lists: function(){

		this._lists = this._lists ||
			new TrelloClone.Collections.BoardLists([],{board: this});
		return this._lists;
   
	},
	
	parse: function(response){
		
		if(this.lists){
			this.lists().set(response.lists, {parse: true})
			delete response.lists;
		}
		return response;
	}

	
});