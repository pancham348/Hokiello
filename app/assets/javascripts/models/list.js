TrelloClone.Models.List = Backbone.Model.extend({
	urlRoot: "api/boards",
	cards: function(){

		this._cards = this._cards ||
			new TrelloClone.Collections.BoardLists([],{board: this});
		return this._cards;
   
	},
	
	parse: function(response){
		
		if(this.cards){
			this.cards().set(response.cards, {parse: true})
			delete response.cards;
		}
		return response;
	}
});
