---
layout: splash
excerpt: "Exploring, Monitoring, and Explaining complex AI pipelines"
classes: wide
---

<link rel="stylesheet" href="{{ '/assets/css/carousel.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/index-extras.css' | relative_url }}">

<h1 class="text-center splash__title">{{ site.data.index_content.title }}</h1>
<h3 class="text-center splash__subtitle"><em>{{ site.data.index_content.subtitle }}</em></h3>

<h2 class="text-left">{{site.data.index_content.headers.about}}</h2>
{% for paragraph in site.data.index_content.about %}
<p class="lead">{{ paragraph }}</p>
{% endfor %}

<div class="image-block text-center">
  <img class="image--medium image--center" src="{{ site.data.index_content.images[0].src }}" alt="">
  <p class="small"> {{ site.data.index_content.images[0].caption }} </p>
</div>

<h2>{{site.data.index_content.headers.features}}</h2>
<div class="feature-section">
  {% for category in site.data.index_content.features %}
    <div class="feature-card">
      <h3 >{{ category[0] }}</h3>
      <ul>
        {% for item in category[1] %}
          <li>{{ item }}</li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>

<div id="carousel" class="carousel-container">

  {% assign imgs = site.data.index_content.images | slice: 1, 2 %}
  {% for img in imgs %}
    <div class="carousel-slide {% if forloop.first %}active{% else %}inactive{% endif %} ">
      <img class="image--large image--center" src="{{ img.src }}" alt="">
      <p class="small">{{ img.caption }}</p>
    </div>
  {% endfor %}

  <button onclick="plusSlides(-1)" class="carousel-button carousel-button-left">&#10094;</button>
  <button onclick="plusSlides(1)" class="carousel-button carousel-button-right">&#10095;</button>
</div>

<h2 class="text-left">{{site.data.index_content.headers.technical}}</h2>
{% for item in site.data.index_content.technical %}
<p class="lead">{{ item }}</p>
{% endfor %}

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

<script src="{{ '/assets/js/carousel.js' | relative_url }}"></script>
<script src="{{ '/assets/js/external-links.js' | relative_url }}"></script>
