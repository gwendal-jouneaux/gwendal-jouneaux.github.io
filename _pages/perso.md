---
layout: page
permalink: /perso/
title: Page personelles
description: Liste des pages personelles (not for work)
nav: false
---

{% for pageperso in site.perso %}

<div class="row">
    <div class="col-sm-12">
        <a href="{{ pageperso.url | relative_url }}">{{pageperso.title}}</a>
        <p>{{pageperso.description}}</p>
    </div>
</div>
{% endfor %}