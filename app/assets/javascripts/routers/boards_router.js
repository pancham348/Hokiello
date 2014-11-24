TrelloClone.Routers.Boards = Backbone.Router.extend({
	routes: {
		"" : "boardIndex",
		"boards/:id" : "boardShow"
	},
	
	boardIndex: function (){
		var index = new TrelloClone.Views.BoardsIndex({collection: TrelloClone.Collections.boards});
		var newForm = new TrelloClone.Views.BoardsForm();
		TrelloClone.Collections.boards.fetch();
		$("#content").html(index.render().$el);
		$("#content").append(newForm.render().$el);
	},
	
	boardShow: function(id){
		var board = TrelloClone.Collections.boards.getOrFetch(id);
		var showBoard = new TrelloClone.Views.BoardsShow({model: board});
		// TrelloClone.Collections.boards.fetch();
	// 	board.lists().fetch();
		$("#content").html(showBoard.render().$el);
 	},
	
	
});
