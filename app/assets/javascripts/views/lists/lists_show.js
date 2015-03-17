TrelloClone.Views.ListsShow = Backbone.CompositeView.extend({

    template: JST['lists/show'],
	
    events: {
		"click button.destroy" : "destroyList",
	},
  
	initialize: function(options){
		this.open = false;
		this.listenTo(
			this.model.cards(), "add", this.addCard
		);
		this.model.cards().each(this.addCard.bind(this))
	},
	
	render: function(){
		var renderedContent = this.template({ list: this.model, board: this.board });
		this.$el.html(renderedContent);
		// this.attachSubviews()
		return this;
	},
	
  	addCard: function(card){
  		var cardsShow = new TrelloClone.Views.CardsShow({model: card});
		this.addSubview(".cards", cardsShow);
  	}

});
