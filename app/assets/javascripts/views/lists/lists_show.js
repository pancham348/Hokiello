TrelloClone.Views.ListsShow = Backbone.CompositeView.extend({

    template: JST['lists/show'],
	
    events: {
		"click .new-card-div" : "showCardForm",
		"click .card-destroy" : "destroyCard"
	},
	
	initialize: function(options){
		this.open = false;
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(
			this.model.cards(), "add", this.addCard
		);
		this.listenTo(
			this.model.cards(), "remove", this.render
		);
		
	},
	
	render: function(){
		var renderedContent = this.template({ list: this.model, board: this.board });
		this.$el.html(renderedContent);
		//this.attachSubviews()
		this.addCardForm();
  	  $cardForm = this.$el.find(".new-card-form")
  	  $cardForm.hide();
	  this.renderCards();
		return this;
	},
	
  	addCard: function(card){
  		var cardsShow = new TrelloClone.Views.CardsShow({model: card});
			this.addSubview(".cards", cardsShow);
  	},
	
    showCardForm: function(){
  	  $form = this.$el.find(".new-card-form")
  	  $form.toggle(500);
    },
	
	addCardForm: function(){
  		var cardsForm = new TrelloClone.Views.CardsForm({model: this.model, list: this.model});
  		this.addSubview(".card-form", cardsForm);
	},
	
	renderCards: function(){
		this.model.cards().each(this.addCard.bind(this));
		var $card = this.$el.find(".cards");
		$card.sortable({
			items: ".card-item",
			placeholder: "ui-state-highlight"
		});
	},
	
	destroyCard: function(event){
	  	  //event.preventDefault();
	  	  var cardId = $(event.currentTarget).data("id");
		  var cards = this.model.cards()
		  var deletedCard = cards.get(cardId)
	  	  deletedCard.destroy()
	    }
});
