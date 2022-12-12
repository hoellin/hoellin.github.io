---
layout: page
title: Data Assimilation Networks
description: M2-practical on Data Assimilation Networks
img: assets/img/projects_preview/lorenz_40D.png
importance: 3
category: student-projects
---

## How to use this notebook?

You can fin the code of this project, together with other student practicals I have done during my master, [on my GitHub](https://github.com/hoellin/student-practicals/).

## What are Data Assimilation Networks?

Data Assimilation Networks (DANs) are a class of neural networks that are used to solve inverse problems. They are based on the idea of using a neural network to learn the (non necessarily linear) forward model of the problem, and then use the learned forward model to solve the inverse problem. This is a very interesting idea, as it allows to solve inverse problems without having to know the forward model. This is especially useful when the forward model is very complex, and it is not possible to derive it analytically.

## More details

See the pdf file in the repository (in French) for more details.
<header class="post-header">
<h1><a href="{{ page.cv_pdf | prepend: 'assets/pdf/TP_DAN.pdf' | relative_url}}" target="_blank" rel="noopener noreferrer"><i class="fas fa-file-pdf"></i></a></h1>
</header>