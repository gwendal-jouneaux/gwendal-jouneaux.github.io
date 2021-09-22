---
layout: page
permalink: /publications/
title: Publications
description: Publications in reversed chronological order.
years: [2020, 2021]
nav: true
---

<div class="publications">

{% for y in page.years reversed %}
  <div class="row">
    <h2 class="year col-sm-1 order-sm-last order-first">{{y}}</h2>
      {% bibliography -f papers -q @*[year={{y}}]* %}
  </div>
{% endfor %}

</div>
