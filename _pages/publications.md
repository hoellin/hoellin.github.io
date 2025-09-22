---
layout: default
permalink: /publications/
title: publications
years: [2025, 2023, 2020]
years_prep: [2024]
nav: true
nav_order: 1
subtitle: 
---

<!-- <h2>Preprints</h2>

<div class="publications">

{%- for y in page.years_prep %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f preprints -q @*[year={{y}}]* %}
{% endfor %}

</div> -->

<h2 data-i18n="titles.publications">Publications</h2>

<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
