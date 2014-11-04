ImageWall.Collections.Cards = Backbone.Collection.extend({
    model: ImageWall.Models.Card,
    url: "https://api.getchute.com/v2/albums/aus6kwrg/assets?type=image&tags=surf",
    parse: function (response) {
      if(response.checklists) {
      this.checklists().set(response.checklists, { parse: true });
      delete response.checklists;
    }
      return response;
    }
  });
ImageWall.Collections.cards = new ImageWall.Collections.Cards  

