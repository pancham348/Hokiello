TrelloClone.Views.BoardsShow = Backbone.CompositeView.extend({
	  
	template: JST["boards/show"],
	
  	render: function(){
	  var content = this.template({board: this.model});
	  this.$el.html(content);
	  this.attachSubviews()
  	  return this;
  },

	initialize: function (){
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(
			this.model.lists(), "add", this.addList
		);
		this.model.lists().each(this.addList.bind(this))
		//var listNewView
	},
	
	addList: function(list){
		var listsShow = new TrelloClone.Views.ListsShow({model: list});
		this.addSubview(".lists", listsShow)
	},
  
	
})