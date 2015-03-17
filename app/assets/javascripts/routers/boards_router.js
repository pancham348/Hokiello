TrelloClone.Routers.Boards = Backbone.Router.extend({
	initialize: function(){
		this.$rootEl = $('#main');
	},
	
	routes: {
		"" : "boardIndex",
		"boards/:id" : "boardShow"
	},
	
	boardIndex: function (){
		var index = new TrelloClone.Views.BoardsIndex({collection: TrelloClone.Collections.boards});
		var newForm = new TrelloClone.Views.BoardsForm();
		TrelloClone.Collections.boards.fetch();
		
		this._swapView(index);
	},
	
	boardShow: function(id){
		var board = TrelloClone.Collections.boards.getOrFetch(id);
		var showBoard = new TrelloClone.Views.BoardsShow({model: board});
		this._swapView(showBoard);
 	},
	
	_swapView: function(view){
		if(this.currentView){
			this.currentView.remove();
		}
		this.currentView = view;
		this.$rootEl.empty();
		view.delegateEvents();
		this.$rootEl.html(view.render().$el);
	}	
	
});
