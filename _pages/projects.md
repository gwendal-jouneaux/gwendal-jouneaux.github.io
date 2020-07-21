---
layout: page
title: Projects
permalink: /projects/
description: A growing collection of my projects.
nav: true
---

<div class="projects grid">

  {% assign sorted_projects = site.projects | sort: "date" %}
  {% for project in sorted_projects reversed %}
  {% if project.img %}
  <div class="grid-item grid-item--height2">
  {% else %}
  <div class="grid-item">
  {% endif %}
    {% if project.redirect %}
    <a href="{{ project.redirect }}" target="_blank">
    {% else %}
    <a href="{{ project.url | relative_url }}">
    {% endif %}
      <div class="card hoverable">
        {% if project.img %}
        <div class="image-container">
          <img src="{{ project.img | relative_url }}" alt="project thumbnail">
        </div>
        {% endif %}
        <div class="card-body">
          <h2 class="card-title">{{ project.title }}</h2>
          <p class="card-text">{{ project.description }}</p>
          <div class="row ml-1 mr-1 p-0 github-row">
            {% if project.github %}
            <div class="github-icon">
              <div class="icon" data-toggle="tooltip" title="Code Repository">
                <a href="{{ project.github }}" target="_blank">See it on Github&nbsp;<i class="fab fa-github gh-icon"></i></a>
              </div>
              {% if project.github_stars %}
              <span class="stars" data-toggle="tooltip" title="GitHub Stars">
                <i class="fas fa-star"></i>
                <span id="{{ project.github_stars }}-stars"></span>
              </span>
              {% endif %}
            </div>
            {% endif %}
          </div>
        </div>
      </div>
    </a>
  </div>
{% endfor %}

</div>
