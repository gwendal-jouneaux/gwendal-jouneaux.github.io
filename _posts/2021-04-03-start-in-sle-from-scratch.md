---
layout: distill
title: Start in Software Language Engineering from Scratch.
description: My thoughts about how to make a student learn SLE while knowing almost nothing about programming.
date: 2020-04-03
comments-issue: 3

authors:
  - name: Gwendal Jouneaux
    url: "https://www.gwendal-jouneaux.fr"
    affiliations:
      name: Univ. Rennes, Inria, IRISA

bibliography: sle-from-scratch.bib
---

## Usefull templates

<d-cite key="DSL_Biblio_2000"></d-cite>

Footnote<d-footnote>This will become a hoverable footnote.</d-footnote>
 
<d-code block language="javascript">
  var x = 25;
  function(x) {
    return x * x;
  }
</d-code>

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
  <p>Note dans la marge</p>
</div>

## Start of the post (TITLE TO REMOVE)

Préambule expliquant de quoi parle le post
Rassurer sur le fait que je ne pense pas que cela soit une méthode adapté pour l'enseignement classique



## Introduction

### Context

Parler du cas de Jean-loup.
Expliquer son background
State of the art de ses connaissances

### Objective

donner les connaissance pour un stage dans le domaine du sle
  - Definir le SLE son but
  - Comprendre les concepts
  - Comprendre les enjeux

Donner les capacité pour un stage dans le domaine du sle :
  - etre capable de lire et écrire une syntaxe abstraite
  - etre capable de lire et écrire une syntaxe concrete
  - etre capable d'écrire un interpreteur avec plusieurs patterns
  - etre capable d'écrire un transpiler
  - etre capable d'effectuer des transformation model-to-model
  - etre capable de faire de raisonner sur les types (type system)

### Constraints

Basic knowledge
time constraints
fun constraint
build correct foundation

## Approach : Project driven learning

### Step 1 : Let's create a calculator

Based only on Integers
Inversed polish notation
Interpreter using interpreter pattern 
No symbols (only constants and operators)

#### Structure the concepts used by the calculator

Make the student create a correct inheritance structure for expressions

#### Manage intermediate result as run-time values

Make the student create explicit classes that represent the run-time values

#### From text to objects

create a function that instanciate previous classes to represent the textual expression

#### Processing the expressions

use the classic interpreter pattern approach 
A first operational semantics benefiting from the object-oriented paradigm known by the student

#### Take a step back and map the concepts

Link the creation of the class representing language concepts to the concept of meta-model
link Run-time values to type systems
link text-to-model with lexing and parsing
Present the idea of operational semantics as the operationalization of language concepts


### Step 2 : Adding further skills to the CV

#### Represent relations through UML class diagrams

#### Type systems and model consistency

#### Lexers and Parsers : Let's be concrete

Post of L Tratt and Tiark Rompf

#### Semantics : Pattern to operationalize

### Step 3 : Software language handcrafting

For this step we will change the language to emphasis the need of methodology
We will now use a classical syntax for expressions 
In addition to integer, the calculator will process double and 2D vectors

#### Build the meta-model of the language from UML specification

Make the student search a correct meta-model and present it in the form of an UML class diagram
<div class="l-gutter">
  <p>Note : Here I force the student to use the visitor pattern because multiple visitor will be implemented in the future</p>
</div>

Implements the classes and interfaces

#### Implement the lexer/parser