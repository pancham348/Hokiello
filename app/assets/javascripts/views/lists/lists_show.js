TrelloClone.Views.ListsShow = Backbone.CompositeView.extend({

    template: JST['lists/show'],
	
    events: {
		"click .destroy" : "destroyCard",
		"click .new-card-div" : "showCardForm"
	},
	
	initialize: function(options){
		this.open = false;
		this.listenTo(this.model, "sync remove", this.render);
		this.listenTo(
			this.model.cards(), "add", this.addCard
		);
		this.listenTo(
			this.model.cards(), "remove", this.render
		);
		this.model.cards().each(this.addCard.bind(this))
	},
	
	render: function(){
		var renderedContent = this.template({ list: this.model, board: this.board });
		this.$el.html(renderedContent);
		//this.attachSubviews()
		this.addCardForm();
  	  $cardForm = this.$el.find(".new-card-form")
  	  $cardForm.hide();
		return this;
	},
	
  	addCard: function(card){
  		var cardsShow = new TrelloClone.Views.CardsShow({model: card});
		this.addSubview(".cards", cardsShow);
  	},
	
    showCardForm: function(){
  	  $form = this.$el.find(".new-card-form")
  	  $form.toggle();
    },
	
	addCardForm: function(){
  		var cardsForm = new TrelloClone.Views.CardsForm({model: this.model, list: this.model});
  		this.addSubview(".card-form", cardsForm);
	},
	
    destroyCard: function(event){
  	  //event.preventDefault();
  	  var cardId = $(event.currentTarget).data("id");
	  var cards = this.model.cards()
	  var deletedCard = cards.get(cardId)
  	  deletedCard.destroy()
    }
	
});
