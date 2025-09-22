---
layout: page
title: Photography (legacy)
permalink: /photography-info/
published: false
---

<div class="container my-4">
  <div class="rounded p-3" style="background: var(--global-card-bg-color); border: 1px solid var(--global-divider-color);">
    <p style="margin: 0; color: var(--global-text-color);">
      I’m a PhD student in cosmological physics at the Institut d’Astrophysique de Paris. I work with the <a href="https://esa.int/Euclid/" class="underline pastel-link">Euclid Space Telescope</a> and develop statistical methods to answer some of the most fascinating questions in modern cosmology: What is dark energy, the mysterious component accelerating the Universe’s expansion? To what extent did neutrinos affect structure formation? If you want to know more about my research, feel free to <a class="underline pastel-link" href="https://hoellin.github.io/about/">visit my academic profile</a>. If you enjoy my photos, purchasing a print helps me focusing on my passions — also it’s an original gift idea —, I’d be deeply grateful. Any other enquiry? Contact me.
    </p>
  </div>

  <h5 class="mt-4">Selected works</h5>
  <div id="photo-samples" class="row"></div>

  <div class="mt-3 d-flex flex-wrap gap-2">
    <a class="btn btn-dark" href="/prints/">Explore Prints</a>
    <a class="btn btn-outline-dark" href="/portraits/">View Portraits</a>
    <a class="btn btn-link" href="mailto:hoellin.photo@gmail.com?subject=Photography%20Enquiry">Enquiries</a>
  </div>
</div>

<script src="/prints/works.js"></script>
<script>
(function(){
  try {
    var works = Array.isArray(window.__WORKS__) ? window.__WORKS__ : [];
    var container = document.getElementById('photo-samples');
    var n = Math.min(6, works.length);
    for (var i = 0; i < n; i++) {
      var w = works[i];
      var col = document.createElement('div');
      col.className = 'col-6 col-md-4 mb-3';
      col.innerHTML = '<a href="/prints/" class="d-block" aria-label="Go to Prints">'
        + '<img src="' + w.src + '" alt="' + (w.alt || w.title || 'Artwork') + '" class="img-fluid rounded"'
        + ' style="width:100%;height:auto;object-fit:cover;" />'
        + '</a>';
      container.appendChild(col);
    }
  } catch (e) {}
})();
</script>
