---

defaults: &defaults
  permalink: >
    {% if page.url contains 'tags/' %}
      /tags/{{ page.url | remove_first: 'tags/' }}
    {% elsif page.url contains 'tag/' %}
      /tag/{{ page.url | remove_first: 'tag/' }}
    {% endif }

title: <<: *defaults
layout: archive
#permalink: tags/예시
author_profile: true
sidebar_main: true
---

<!-- 공백이 포함되어 있는 카테고리 이름의 경우 site.tags['a b c'] 이런식으로! -->

***

{% assign posts = site.tags.*defaults %}
{% for post in posts %} {% include archive-single2.html type=page.entries_layout %} {% endfor %}
