TrelloClone.Views.CardsShow = Backbone.View.extend({
	
	template: JST["cards/show"],
	
    events: {
		"click button.destroy" : "destroyCard",
	},
  
	initialize: function(options){
		this.open = false;
		this.listenTo(this.model, "change", this.render);
	},
	
	render: function(){
		var renderedContent = this.template({ card: this.model });
		this.$el.html(renderedContent);
		return this;
	}
});