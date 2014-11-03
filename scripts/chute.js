// aus6kwrg

$(function(){
// card model
  var Card = Backbone.Model.extend({
    urlRoot: "",
    defaults: function(){
      
    },
    parse: function (response) {
      if(response.checklists) {
        this.checklists().set(response.checklists, { parse: true });
        delete response.checklists;
      }
      return response;
    }
  });
  
// cards collection
  var Cards = Backbone.Collection.extend({
    model: Card,
    localStorage: new Backbone.LocalStorage("chute"),
    url: "https://api.getchute.com/v2/albums/aus6kwrg/assets?type=image&tags=surf",
    getOrFetch: function(id){
       var card = this.get(id);
       var cards = this;
       if(!card){
         card = new Card({id: id});
         card.fetch({
           success: function(){
             cards.add(card);
           }
         });
       }else{
         card.fetch();
       }
       return card;
     }
  });
  
  var cards = new Cards;
  
// cards view
  var CardsView = Backbone.View.extend({
    template: _.template($('#card-template').html()),
    
    initialize: function(){
      this.collection = new Cards;
      this.collection.fetch({
        success: function(){
          this.render()
        }.bind(this)
      });
      this.listenTo(this.model, "sync", this.render);
    }, 
    
    render: function(){
      var renderContent = this.template({
        cards: this.collection
      });
      this.$el.html(renderContent);
      return this;
    }, 
  });
  
// app view
  var AppView = Backbone.View.extend({
    el: $("#chute"),
    
  })
  
  var App = new AppView;
})