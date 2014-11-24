TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  initialize: function() {
	    this.listenTo(this.collection, "sync remove change add", this.render)
	  },
  events:{
  	  "click .destroy" : "destroyBoard",
  },
  
  template: JST['boards/index'],
  
  render: function(){
	  console.log("rendering index");
	  var content = this.template({boards: this.collection});
	  this.$el.html(content);
	  return this;
  } ,
  
  destroyBoard: function(event){
	  event.preventDefault();
	  var $board = $(event.currentTarget);
	  var model = TrelloClone.Collections.boards.get($board.attr("data-id"))
	  model.destroy();
  }
  
});
