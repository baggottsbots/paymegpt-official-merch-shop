document.addEventListener('DOMContentLoaded', function() {
    var frame = document.getElementById('iframe-container');
    var loader = document.getElementById('loading-indicator');

    frame.addEventListener('load', function() {
      loader.style.display = 'none';
    });

    setTimeout(function() {
      if (loader.style.display !== 'none') {
        loader.style.display = 'none';
      }
    }, 5000);

    frame.addEventListener('error', function() {
      loader.innerHTML = '<div style="text-align:center"><p class="err">Unable to load the PayMeGPT Shop</p><p class="err-sub">Please check your connection and try again.</p></div>';
    });
  });