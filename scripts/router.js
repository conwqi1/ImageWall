ImageWall.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$rootEl = options.$root
  },
  
  routes: {
    '': 'cardsIndex',
  },
  
  cardsIndex: function(){
    var collection = ImageWall.Collections.cards;
    collection.fetch();
    var view = new ImageWall.Views.CardsIndex({
      collection: ImageWall.Collections.cards
    });
    this._swapView(view);
  },
  
  _swapView: function(view){
   this._currentView && this._currentView.remove();
   this._currentView = view; 
   this.$rootEl.html(view.render().$el);
  }
});