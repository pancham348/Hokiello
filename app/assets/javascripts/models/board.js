TrelloClone.Models.Board = Backbone.Model.extend({
	urlRoot: "api/boards",
	// lists: function(){
// 		if(this._lists) {
// 			return this._lists;
// 		}else{
// 		    this._lists = new TrelloClone.Collections.Lists([],{board: this});
// 		    return this._lists;
//     	}
// 	},
//
// 	parse: function(response){
// 		this.lists().set(response.lists, {parse: true})
// 	},
	
	
});
