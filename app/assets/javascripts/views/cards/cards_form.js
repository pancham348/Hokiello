TrelloClone.Views.CardsForm = Backbone.View.extend({
  
	  
	  events: {
	  	"submit form" : "submitForm"
	  },
	  
	  template: JST["cards/form"],
	  
	  render: function(){
		  var content = this.template({card: new TrelloClone.Models.Card(), list: this.model});
		  this.$el.html(content);
	  	  return this;
	  },
	  
	  submitForm: function(event){
		  var view = this;
		  event.preventDefault();
	 	this.model.cards().create ({
	 		title: $("#card_title").val(),
			list_id: this.model.id
	 	})
			  
	  }

});