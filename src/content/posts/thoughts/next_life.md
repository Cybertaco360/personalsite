---
title: "Thoughts on Next Life"
published: 2026-11-02
updated: 2026-11-02
description: "Ideas coming from a simple question."
cover: "/assets/images/thumbnails/3.png"
coverInContent: false
category: ["thoughts"]
tags: ["thoughts", "math"]
lang: "en"
pinned: false
draft: false
comment: true
---

:::warning
This page is an analysis on a basic thought. I do not intend on correcting religious beliefs or personal stories.
:::

_Do you believe in next life?_

### Introduction

The premise is actually rather similar to an essay prompt, specifically the one of the 1999 全国高考扩招卷's essay prompt of _"If memories could transfer..."_, it's a simple question but with nearly infinite branches. Thus analysis:

### Values and Probability.

Before anything is mentioned, I should clarify that every person is different in this way of their values, so we let a human be generalized as "$H$" with infinite dimensions to look from, we can roughly model this into:

$$
v:\mathcal H\to\mathbb R^I, |I|\geq 3, \forall H\in\mathcal H,\quad \forall a,b,c\in I, (a\neq b\land b\neq c\land a\neq c) \\
\Longrightarrow \pi_{abc}(v(H))\in\mathbb R^3.
$$

Once again, this is a rough model because the problem that occurs is if two people possess identical $a,b,c$, then they are technically indistinguishable under this model. However, let's use this into what I believe should model a person's decision on the original question.

Suppose in the original question you have 2 factors being: "Being with them in this life", and "There existing another life". Technically the question is a psychological question but I prefer modelling it out. And in a really rough model, you should consider then 3 factors, not just 2 because the probability of being with them in that second life is a different probability that should be considered separate from the first (you could technically consider them identical if you believe time is the difference but I digress this model stands regardless since then you'd just be considering there existing another life as some arbitrary coefficient which I'm not inherently against). We should then define $P(x)$ as the probability function that most people know, but in this case it projects a belief to a probability value, and thus carry over the initial model's a,b,c and represent them as follows:

- $H_a$: A person's belief of being with them this life.
- $H_b$: A person's belief that there exists another life.
- $H_c$: A person's belief that they will be with them in this next life.

We can now define that value function of in this context what would make a person believe that they should do it in their next life (with some epsilon error value that measures everything else):
$$
\exist\epsilon>0, P(H_a) < (| P(H_b) \times P(H_c) | \pm \epsilon)
$$

If the inequality holds true, then it would appear the person does indeed believe that there's a better chance of being with a specific other in their next life than their current one. But does this answer the original question? Absolutely not, it's a rough mathematical model on how the answer to this question is subjective to a person's values. But in a sense these 3 values aren't constant, they're changing.

### Contrapositive?

In a sense, there's a different way of mapping this, not really using probability but instead using statements in the same sense. Given this scenario:
$$
\text{"A person's belief of being with them this life"} < |\text{"A person's belief that there exists another life."}\times\text{"A person's belief that they will be with them in this next life."}| \pm \epsilon \implies \text{"person believe that they should wait to do it in their next life."}
$$
Knowing this we can define a contrapositive statement that if true, proves that the original statement also holds true:
$$
\forall \epsilon > 0, \neg\text{"A person's belief of being with them this life"} > \neg|\text{"A person's belief that there exists another life."}\times\text{"A person's belief that they will be with them in this next life."}| \mp \epsilon \\
\Longrightarrow \neg\text{"person believe that they should wait to do it in their next life."}
$$

This is another model formed from that contrapositive statement which in actual english asks: "If a person doesn't believe that they have a chance of being with them in this life compared to believing that there's no second life, and there's no suggested idea of being with them in such life, then that implies that the person doesn't believe that they should wait for their next life." The model formed from contrapositive still considers that there are some other values to be considered though I'm lazy and will simply throw them into the non-zero epsilon assuming the person isn't a simpleton and sets it to zero. But reading this statement in plain english most people are probably going to question whether or not this is common sense? And by that I would also agree. So for my lack of a way of describing a philisophical proof, this statement should be true by common sense, other cases where it aren't true you could blame it on error values thus $\epsilon$ being another factor.

Q.E.D.

### Conclusion

I know this was really informal but this was merely a thought that came to mind. Modelling a thought is like sketching something from mind so hopefully this wasn't too bad. Corrections are always welcome.