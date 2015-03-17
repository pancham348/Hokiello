TrelloClone.Views.BoardsForm = Backbone.View.extend({
  
	  
	  events: {
	  	"click #new-form-button" : "submitForm"
	  },
	  
	  template: JST["boards/form"],
	  
	  render: function(){
		  var content = this.template({board: new TrelloClone.Models.Board()});
		  this.$el.html(content);
	  	  return this;
	  },
	  
	  submitForm: function(event){
		  event.preventDefault();
		  var formData = $("#new-board-form").serializeJSON();
		  var model = new TrelloClone.Models.Board(formData)
			  model.save();
		  TrelloClone.Collections.boards.add(model);
	  }

});

