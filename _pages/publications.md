---
layout: page
permalink: /publications/
title: Publications
description: Publications in reversed chronological order.
nav: true
nav_order: 2
years: [2020, 2021, 2023, 2024, 2025]
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% for y in page.years reversed %}
  <div class="row">
    <h2 class="year col-sm-1 order-sm-last order-first">{{y}}</h2>
      {% bibliography -f papers -q @*[year={{y}}]* %}
  </div>
{% endfor %}

</div>

