$( document ).ready(function(){
  var userFeed = new Instafeed({
    get: 'user',
    userId: '1627406569',
    limit: 12,
    resolution: 'standard_resolution',
    accessToken: '1627406569.1677ed0.a7827ca37f4f4e1e900972d070412179',
    sortBy: 'most-recent',
    template: '<div class = "gallery"><a href="{{image}}" titl="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a>',

  });
  userFeed.run();
});
