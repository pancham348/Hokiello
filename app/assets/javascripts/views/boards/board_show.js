TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({
		  
	template: JST["boards/show"],
	
    events: {
		"click .destroy" : "destroyList",
	},
  	
	initialize: function (){
		this.listenTo(this.model, "sync remove", this.render);
		this.listenTo(
			this.model.lists(), "add", this.addList
		);
		this.listenTo(
			this.model.lists(), "remove", this.render
		);
		$collapse = this.$el.find(".collapse")
		$collapse.collapse();
		view = this
	},
	
  	render: function(){
	  var content = this.template({board: this.model});
	  this.$el.html(content);
	  this.model.lists().each(this.addList.bind(this));
	  this.addListForm();
  	  return this;
  },
	
	addList: function(list){
		var listsShow = new TrelloClone.Views.ListsShow({model: list});
		this.addSubview("#board-show-lists", listsShow)
	},
	
  	addListForm: function(){
  		var listsForm = new TrelloClone.Views.ListsForm({model: this.model, board: this.model});
  		this.addSubview("#list-form", listsForm);
  	},
	
    destroyList: function(event){
  	  //event.preventDefault();
  	  var listId = $(event.currentTarget).data("id");
	  var lists = this.model.lists()
	  var deletedList = lists.get(listId)
  	  deletedList.destroy()
    }
	
})