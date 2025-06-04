---
layout: splash
excerpt: "Exploring, Monitoring, and Explaining complex AI pipelines"
classes: wide
---

<link rel="stylesheet" href="{{ '/assets/css/index-page.css' | relative_url }}">

<div class="full-width-section bg-blue">
  <div class="wide">
    <h1 class="text-center splash__title">{{ site.data.index_content.title }}</h1>
    <h3 class="text-center splash__subtitle"><em>{{ site.data.index_content.subtitle }}</em></h3>
    <div class="image-block text-center">
      <img class="image--medium image--center" src="{{ site.data.index_content.images[0].src }}" alt="">
      <p class="small" style="color: white"> {{ site.data.index_content.images[0].caption }} </p>
    </div>
  </div>
</div>


<h2 class="text-left">{{site.data.index_content.headers.about}}</h2>
{% for paragraph in site.data.index_content.about %}
<p class="lead">{{ paragraph }}</p>
{% endfor %}

<h2 class="text-left">{{site.data.index_content.headers.features}}</h2>
<div class="alternating-features">
  {% for feature in site.data.index_content.features %}
    {% assign index = forloop.index0 %}
    {% assign is_odd = index | modulo: 2 %}
    <div class="feature-row {% if is_odd == 1 %}reverse{% endif %}">
      <div class="feature-text">
        <h3>{{ feature.title }}</h3>
        <ul>
          {% for point in feature.points %}
            <li>{{ point }}</li>
          {% endfor %}
        </ul>
      </div>
      {% if feature.image %}
        <div class="feature-image">
          <img src="{{ feature.image }}" alt="{{ feature.caption }}">
          {% if feature.caption %}
          <p class="image-caption">{{ feature.caption }}</p>
          {% endif %}
        </div>
      {% endif %}
    </div>
  {% endfor %}
</div>

<div class="full-width-section bg-gray">
  <div class="wide">
    <h2 class="text-left">{{site.data.index_content.headers.technical}}</h2>
    {% for item in site.data.index_content.technical %}
      <p class="lead">{{ item }}</p>
    {% endfor %}
  </div>
</div>

<div class="full-width-section bg-blue" style="margin-bottom: -3rem;">
  <div class="wide">
    <h2 class="text-left">{{site.data.index_content.headers.involved}}</h2>
    {% for line in site.data.index_content.contact.intro_lines %}
      <p class="lead">{{ line }}</p>
    {% endfor %}

    <p><strong>{{site.data.index_content.contact.email_label}}</strong></p>
    <ul class="fa-ul">
      {% for email in site.data.index_content.contact.emails %}
      <li><i class="fa fa-envelope fa-li"></i><a href="mailto:{{ email }}">{{ email }}</a></li>
      {% endfor %}
    </ul>

    <p><strong>{{site.data.index_content.contact.repo_label}}</strong></p>
    <ul class="fa-ul">
      {% for repo in site.data.index_content.contact.repos %}
      <li><i class="fab fa-github fa-li"></i><a href="{{ repo[1] }}">{{ repo[0] }}</a></li>
      {% endfor %}
    </ul>
  </div>
</div>

<script src="{{ '/assets/js/external-links.js' | relative_url }}"></script>
