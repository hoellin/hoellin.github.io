---
layout: page
title: sparse reconstruction
description: Small M1-practical on sparse reconstruction in Julia.
img: assets/img/projects_preview/cameraman.png
importance: 4
category: student-projects
---

## How to use this notebook?

You can fin this notebook along with other student practicals I have done during my master [on my GitHub](https://github.com/hoellin/student-practicals/).

## General framework

The aim of this tutorial is to show that standard optimization techniques can be used to recover signals that admit a parsimonious representation in a certain base, i.e. involving a small number of coefficients.

## Problem I

We are interested in the reconstruction of a vector $$x$$ (here a greyscale image) using the values of random combinations of certain pixels. The combinations are represented by a $$\Phi$$ matrix.

A first approach consists in solving the problem

$$
\min_x \frac{1}{2} ||\Phi x-y||_2^2
$$

Yet, we see in the notebook that the solution obtained using the normal equations is not good. We use compressed sensing techniques to solve the issue.

## Problem II

We are interested in the problem

$$
\hspace{5cm} (\mathcal{P})\quad \min_{x\in \mathbb{R}^n}f(x) = \frac{1}{2}\Vert H x-y \Vert_W^2+\lambda \Vert x \Vert_1
$$

with $$y\in \mathbb{R}^m$$ an observation of the signal to reconstruct, $$H\in \mathcal{M}_{m,n}(\mathbb{R})$$, $$W\in \mathcal{M}_{m}(\mathbb{R})$$ symmetric positive definite. The matrix $$W$$ introduces a weighting on the components of the residual.

We compare the performance of the following algorithms:
- the baseline subgradient algorithm
- the proximal gradient algorithm
- the FISTA algorithm
