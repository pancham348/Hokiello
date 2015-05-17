TrelloClone.Views.CardsShow = Backbone.View.extend({
	
	template: JST["cards/show"],
	
    // events: {
//
// 	},
  
	initialize: function(options){
		this.open = false;
		this.listenTo(this.model, "sync", this.render);
	},
	
	render: function(){
		var renderedContent = this.template({ card: this.model });
		this.$el.html(renderedContent);
		return this;
	}
});