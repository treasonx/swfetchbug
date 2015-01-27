(function () {
  navigator.serviceWorker.register('./worker.js').then(function(registration) {
    console.log('ServiceWorker with scope: ', registration.scope);
  }, function (err) {
    console.log('error loading worker');
    console.log(err);
  });
}(this));
