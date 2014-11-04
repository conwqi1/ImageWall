window.ImageWall = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new ImageWall.Routers.Router({$root: $('#chute')})
    Backbone.history.start();
  }
};