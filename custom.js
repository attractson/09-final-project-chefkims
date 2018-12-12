$( document ).ready(function(){
  var userFeed = new Instafeed({
    get: 'user',
    userId: '',
    limit: 12,
    resolution: 'standard_resolution',
    accessToken: '',
    sortBy: 'most-recent',
    template: '<div class = "gallery"><a href="{{image}}" titl="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a>',

  });
  userFeed.run();
});
