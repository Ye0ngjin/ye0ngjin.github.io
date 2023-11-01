---
layout: archive
permalink: tags/Test
author_profile: true
sidebar_main: true
---

{% for pg in site.pages %}
{% if pg.permalink == page.permalink %}
  {% assign title = pg.permalink | remove_first: 'tags/' %}

  ***
  #{{title}}
  {% assign posts = site.tags[title] %}
  {% for post in posts %}
    {% include archive-single2.html type=page.entries_layout %}
  {% endfor %}
  {% endif %}
{% endfor %}
