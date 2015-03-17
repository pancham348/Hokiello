TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  initialize: function() {
	  this.listenTo(this.collection, "sync remove change add", this.render)
	  this.addBoardForm();
	  },
  events:{
  	  "click .destroy" : "destroyBoard",
  },
  
  template: JST['boards/index'],
  
  render: function(){
	  var content = this.template({boards: this.collection});
	  this.$el.html(content);
	// $("#content").append(newForm.render().$el);
	this.addBoardForm();
	  return this;
  } ,
  
  addBoardForm: function(){
	var boardForm = new TrelloClone.Views.BoardsForm();
	this.addSubview("#index-form", boardForm)
  },
  
  destroyBoard: function(event){
	  event.preventDefault();
	  var $board = $(event.currentTarget);
	  var model = TrelloClone.Collections.boards.get($board.attr("data-id"))
	  model.destroy();
  }
  
});
