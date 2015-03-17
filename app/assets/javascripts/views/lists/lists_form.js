TrelloClone.Views.ListsForm = Backbone.View.extend({
  
	  
	  events: {
	  	"submit form" : "submitForm"
	  },
	  
	  template: JST["lists/form"],
	  
	  render: function(){
		  var content = this.template({list: new TrelloClone.Models.List(), board: this.model});
		  this.$el.html(content);
	  	  return this;
	  },
	  
	  submitForm: function(event){
		  var view = this;
		  event.preventDefault();
		  // var formData = $(event.currentTarget).serializeJSON();
 // 		  debugger;
 // 		  var list = new TrelloClone.Models.List(formData);
 // 			  list.save({},{
 // 				  sucess: function() {
 // 				  view.model.lists().add(list);
 // 				  view.render();
 // 			  	}
 // 			  });
	 	this.model.lists().create ({
	 		title: $("#list_title").val(),
			board_id: this.model.id
	 	})
			  
	  }

});
