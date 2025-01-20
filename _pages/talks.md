---
layout: page
permalink: /talks/
title: Talks
description: List of my presentations with link to the slides
nav: true
nav_order: 3
---

<div id="talks">
{% assign sorted_talks = site.talks | sort: "date" %}
{% for talk in sorted_talks reversed %}

<div class="row">
    <div class="col-sm-2 abbr">
        <span class="badge">{{ talk.date | date: "%d/%m/%Y" }}</span>
    </div>
    <div id="{{entry.key}}" class="col-sm-10 paper">
        <a href="{{ talk.url | relative_url }}">{{talk.title}}</a>
        <p>{{talk.description}}</p>
    </div>
</div>
{% endfor %}
</div>