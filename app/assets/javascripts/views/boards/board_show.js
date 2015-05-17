TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({
		  
	template: JST["boards/show"],
	
    events: {
		"click .destroy" : "destroyList",
		"click #new-board-header" : "showForm"
	},
  	
	initialize: function (){
		this.listenTo(this.model, "add remove", this.render);
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
	  $collapseForm = this.$el.find("#new-list-form")
	  $collapseForm.hide();
		
		// this.$(".board-show-lists").sortable({
	// 		items: ".list-item"
	// 	});
		// var $card = this.$el.find(".cards");
	// 	$card.sortable({
	// 		items: ".card-item",
	// 		axis: "y"
	// 	});
  	return this;
  },
	
	addList: function(list){
		var listsShow = new TrelloClone.Views.ListsShow({model: list});
		this.addSubview(".board-show-lists", listsShow)
		this.$(".board-show-lists").sortable({
			items: ".list-item"
		});
	},
	
	addListForm: function(){
		var listsForm = new TrelloClone.Views.ListsForm({model: this.model, board: this.model});
		this.addSubview("#list-form", listsForm);
	},
	
	showForm: function(){
  	  $form = this.$el.find("#new-list-form")
  	  $form.toggle();
	},
	
  destroyList: function(event){
	  //event.preventDefault();
	  var listId = $(event.currentTarget).data("id");
  	var lists = this.model.lists()
  	var deletedList = lists.get(listId)
	  deletedList.destroy()
  }
	
})