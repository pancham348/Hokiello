TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({
  initialize: function() {
	  this.listenTo(this.collection, "sync remove change add", this.render)
	  this.addBoardForm();
	  },
  events:{
  	  "click .destroy" : "destroyBoard",
	  "click #new-board-div" : "showForm"
  },
  
  template: JST['boards/index'],
  
  render: function(){
	  var content = this.template({boards: this.collection});
	  this.$el.html(content);
	// $("#content").append(newForm.render().$el);
	  this.addBoardForm();
	  $collapseForm = this.$el.find("#new-board-form")
	  $collapseForm.hide();
	  return this;
  } ,
  
  addBoardForm: function(){
	var boardForm = new TrelloClone.Views.BoardsForm();
	this.addSubview("#index-form", boardForm)
  },
  
  showForm: function(){
	  $form = this.$el.find("#new-board-form")
	  $form.toggle(500);
  },

  destroyBoard: function(event){
	  event.preventDefault();
	  var $board = $(event.currentTarget);
	  var model = TrelloClone.Collections.boards.get($board.attr("data-id"))
	  model.destroy();
  }
  
});
