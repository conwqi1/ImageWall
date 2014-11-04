  ImageWall.Views.CardsIndex = Backbone.View.extend({
    template: _.template($('#card-template').html()),
    
    initialize: function(){
      this.collection = new Cards;
      this.collection.fetch({
        success: function(){
          this.render()
        }.bind(this)
      });
      this.listenTo(this.collection, "sync", this.render);
    }, 
    
    render: function(){
      var renderContent = this.template({
        cards: this.collection
      });
      this.$el.html(renderContent);
      return this;
    }, 
  });