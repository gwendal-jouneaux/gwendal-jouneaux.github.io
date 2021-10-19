---
layout: distill
title: On the content of this blog
description: Some explanation about what I want to do with this blog and how it is build
date: 2021-03-30
comments-issue: 2

tags:
  - Thoughts
  - Tools

authors:
  - name: Gwendal Jouneaux
    url: "https://www.gwendal-jouneaux.fr"
    affiliations:
      name: Univ. Rennes, Inria, IRISA

bibliography: first-post.bib
---


__Hello world!__ Welcome to my blog!

First thing first, let me introduce myself. 
My name is Gwendal Jouneaux and, at the time I write this post, I am a first-year Ph.D. Student in computer science at the University of Rennes (France)/Inria/IRISA. 
I graduated a few months ago from the <a href="https://esir.univ-rennes1.fr/en">ESIR</a><d-footnote>The <a href="https://esir.univ-rennes1.fr/en">engineering school</a> departement of the <a href="https://www.univ-rennes1.fr/">university of Rennes</a></d-footnote> and from the research in computer science master at the University of Rennes thanks to a double-diploma.

My Ph.D. is entitled **“Self-Adaptable Languages”** and is supervised by <a href="https://people.irisa.fr/Benoit.Combemale/" target="_blank">Benoit Combemale</a>, <a href="https://olivier.barais.fr/" target="_blank">Olivier Barais</a> and <a href="http://www.ece.mcgill.ca/~gmussb1/" target="_blank">Gunter Mussbacher</a>. 
In addition to SLE<d-footnote>Software Language Engineering</d-footnote>, MDE<d-footnote>Model-Driven Engineering</d-footnote>, and Self-Adaptive Systems, which are related to my Ph.D. subject, I’m also deeply interested in cross-cutting aspects of computer science like software performances and energy consumption.

## So... What about this blog ?

This blog is a place for me to talk informally about the subjects that I like (*i.e.* the topics mentionned above). 
There will be mainly three types of posts : Technical, Vulgarization and Thoughts.

### Technical

The first category, **Technical posts**, is a way for me to present tools, techniques or even implementations of everything that I found interesting.

For instance, I often work with tools like language workbenches, parser generators and eco-systems like the one of GraalVM.
Those are complex yet useful tools, and that's why I would like to present them, what you can do, what you can't and how I used them.

On the other hand, posts on techniques and implementations will regroup more conceptual things (*e.g.* algorithms, design patterns) and how they can be used to build funny/interesting/useful/whatever project you could have in mind.

In the end, those posts form the "How to ..." section of this blog.

### Vulgarization

### Thoughts

## Some information about how this blog run

### Distill


<div class="columns">
  <p class="l-body side">
  The posts of this blog are created using Distill<d-footnote><a href="https://distill.pub/guide/">https://distill.pub/guide/</a></d-footnote>, and is based on the Distill web framework<d-cite key="Distill_2020"></d-cite>.
  Distill propose a set of new HTML tags allowing to focus on writing the content rather than the way it is displayed. 
  These new tags are similar to common LaTeX commands such as cite from BiBTeX, footnote or code listings. 
  Additionally, Distill provide CSS classes to have wider content (_e.g._ images, tables, code listings), to put content on the side (two columns), or put notes in the margins.
  </p>

  <div class="l-body side">
    <d-code block language="javascript">
      var x = 25;
      function(x) {
        return x * x;
      }
    </d-code>
  </div>
</div>


Equation : $$ E = mc^2 $$.

<div class="l-body">
  <p>taille du text</p>
</div>

<div class="l-page">
  <p>Un peu plus large</p>
</div>

<div class="l-body-outset">
  <p>entre body et page</p>
</div>

<div class="l-gutter">
  <p>Here I used most of the concepts just mentionned as example</p>
</div>

<d-appendix>
