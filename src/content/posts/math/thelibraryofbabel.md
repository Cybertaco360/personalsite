---
title: "A Noob's Analysis on The Library of Babel"
published: 2026-07-27
updated: 2026-07-27
description: "Analysis on the flaws of the art, translation, and ."
cover: "/assets/images/thumbnails/2.png"
coverInContent: false
category: ["math"]
tags: ["math"]
lang: "en"
pinned: false
draft: false
comment: true
---
:::warning
This article expresses a **casual** analysis on the book's design. It does not argue that Borge's writing or design is inaccurate, impossible, or insufficient, nor is it intended as criticism of any form to the original literature. Readers are welcome to disagree, this is not objective. Many translations of The Library of Babel are used, compared, and will all be linked at the end.
:::

*A small analysis I've wanted to write for a while. The Library of Babel some would argue is one of the most beautiful short literatures that challenged mathematics and computer science, I wouldn't disgree at all as it is beautiful despite the lexical gaps (ironic) which some may argue is intentional and others a flaw.*

### Introduction

The Library of Babel is a short story written by Argentine Author Jorge Luis Borges consisting of a universe in the form of a possibly indefinite library with inter-connected hexagonal rooms of bookshelves containing all possible 410-page books of a certain format and character set.

### Ventilation and Stairwells.

The original Spanish reads:
*"...con grandes pozos de ventilación en el medio..."* which means something like: *"...with great ventilation wells in the middle..."*

Later he specifies:

*"En el centro de cada hexágono hay un pozo de ventilación..."* or *"In the center of each hexagon is a ventilation shaft."*

This actually establishes a few mathematical (and physical) rules to be mentioned.

1. Every Hexagonal Room possesses:
 - 6 Walls
 - 2 Openings
 - 5 Bookshelves per wall
 - 32 Books per shelf
 - 1 Central vertical shaft
 - **1** Singular spiral stairwell

Given the Requirements of the room, we know that the symmetry of the room is effectively ruined by the singular stairwell. Two openings with 6 walls allow for 2 lines of symmetry. Given that the central vertical shaft and stairwell are two separate structures, central vertical shaft is in the center therefore can be split across infinite lines of symmetry while the spiral stairwell may be placed anywhere. Given that we interpret the architecture of the room as an **evenly-spaced cyclic pattern**:

$$
\gcd(6 \text{ walls},2 \text{ hallways},1 \text{ stairwell}) = 1 \text{ Possible line of symmetry}
$$
This isn't a sufficient calculation as we don't consider rotational symmetry and only reflective lines of symmetry. We can consider the following with two identical opposite openings which would be a cyclic pattern:
$$
(1,0,0,1,0,0)
$$
We can interpret this as a symmetry group with $C_2$, which is denoted by the number of surviving rotations. Now given into a more likely scenario of a singular off-centre staircase labelled distinctly might give:
$$
(S,0,0,O,0,0)
$$
This is a different problem since S and O are not interchangable, there exists only one possible line of symmetry now denoted by $C_1$ for a much more realistic scenario.

**Reminder:** The central vertical shaft does not affect this because it is invariant under every rotation about the centre. 

2. There exists verical visibility. If the shaft continues forever, then every gallery can theoretically see infinitely upwards and infinitely downwards through the central opening but there is never a mention of an end or a beginning to either sides of the shaft, but there does exist railings that are mentioned which most likely implies danger or some kind of unknown that is correlated with the vertical ventilation shafts.

3. The obvious part here is that given that they're ventilation shafts, air in the library comes from these shafts but there's no known machinery or anything that is mentioned in the text that would imply there is anything creating air and filtering out $CO_2$ from the librarians (unless the librarians don't exhale somehow).
4. Ventilation shafts do fix something being the vertical global coordinate system. 

Given that the coordinates of any room can be documented as:

$$
\exists(H_x, H_y, H_z) 
$$
s.t. $H_x, H_z$are some arbitrary values that identify the location of a given room on floor $H_y$.

The problem that the visibility of the ventilation shafts fix is indeed that $H_y$ component of floor number.

### Time and Permanance

*"O time thy pyramids."* as mentioned in multiple analysis' is a reference to Shakespeare's Sonnet 123 and I'm not going to pretend that I've read it, however I want to analyze the mention of pyramids to permanence here, because the existence of The Library of Babel is an attempt to challenge time itself by containing every possible text that exists, and will exist. We can simply imagine this using calculus.

Let's imply the existence of a possible knowledge in literature to time function $K(t)$. We know of the following given that there will **NOT** be the creation of more knowledge as:
$$
\frac{dK}{dt} < 0
$$
aka. a decreasing function while the library challenges this by setting the function of $K(t)$ to **constant**. Which most would know that if $K(t)$ was constant, then $K'(t) = 0$ which means that knowledge that does exists will never be lost, but a problem that we end up with is that information will never be lost, and every lost book already exists somewhere, but finding and retrieving now becomes nearly impossible.

### The Implicit Infinity and Cardinality?


*"The Library is a sphere whose exact center is any hexagon and whose circumference is unattainable."* (and many variations of such phrase.)

There exists every possible copy of a finite book in this library, but the thing is that the size of the library being infinite is **implicit,** meaning that there's many possible ways of representing the "circumference" of the library itself:

1. We simply interpret that *unattainable* implies *infinity* granted as the following in simpler terms (for some graph $G$):
$$
C = 2\pi r\text{, then } r\to\infty\implies C\to\infty\text{, since }C \propto r \text{, or rad}(G) = \infty
$$

2. We could interpret that *unattainable* describes an unreachable **finite** distance, we could represent this as something like a Poincare disk where we have a finite euclidean radius with an infinite hyperbolic radius. If we were to approximate the radius of the library $R$ with our current euclidean distance from the center of the library as $r$, we would see the following with distance function $d$:
$$
\forall r, \text{ s.t. } 0 \leq r < R\text{, } d(0, r) = 2\text{ artanh}(\frac{r}{R}) = \ln(\frac{R+r}{R-r})
$$
which means:
$$
\lim_{r\to R^-}d(0,r)=\infty
$$
Which means the the Library itself despite having a finite size $R$, possesses a boundary is unreachable by any finite amount of travel within its area since its intrinsic geometry effectively renders the boundary to be infinitely distant.

3. The library could have no boundary in graph distance explicitly. This is slightly absurd, but suppose we can represent the library as the following, and each node of the library being of size $R_v$:
$$
\exists V(H) \subseteq \R^n, L = \bigcup_{v\in V(H)}R_v
$$
We would imagine the **boundary** (we will denote a boundary operator $\partial$) of the convex hull of the library to be its boundary being $\partial\text{conv}(L)$.
if the library is infinite and its rooms extend throughout every direction of $\R^n$, then simply:
$$
\text{conv}(L) = \R^n
$$
for any finite library of identical condition then it would be $\text{conv}(L) \subset \R^n$
And we would reach:
$$
\partial conv(L) = \emptyset
$$
since the entire ambient space has no "topological" boundary.

Therefore, an idealized infinite Library could be regarded as a topilogically boundaryless geometric object.

### Magic of Probability

*"Others went mad ... The Vindications exist (I have seen two which refer to persons of the future, to persons who are perhaps not imaginary) but the searchers did not remember thatthe possibility of a man's finding his Vindication, or some treacherous variation thereof, can be computed as zero."*

Computed as zero, eh? That's not too far off of what would be the probability.

Supposed the following with a probability function $P$:
$$
P(E)=0
$$
Doesn't actually mean "impossible." Given that similar probability, it's actually identical to the following being a choice function:
$$
P(X\in[0,1]) = 1 \text{, while } P(X=\{x\})=0
$$
This is infact true for all individual values of $x \in [0,1]$

However though, that's not just it, considering that the probability of the most perfect description of your life's events being in a books is also as follows being "near zero" but not truly zero (using a reddit estimate for the number of books in the library itself as $N$):
$$
P(\text{correct book}) = \frac{1}{N} = \frac{1}{25^{1312000}} > 0
$$
Now because the book likes the blur alot of the distinctions, in this scenario we can actually model this using a tolerance $\epsilon > 0$!

We define the equivalence in probability when:
$$
|P(A) - P(B)| < \epsilon
$$
Which in the library shows this:
$$
|\frac{1}{N} - 0| = \frac{1}{N} < \epsilon
$$
Which for something like a numerical or computing tolerance we would have $\epsilon = 10^{-4}$, which would be millions of magnitudes greater than $\frac{1}{N}$. Actually computing $\frac{1}{N}$ would give us:
$$
\frac{1}{N} = 5.11 \times 10^{-1834098}
$$

This actually gives us this conclusion:
$$
A\not\equiv B \text{ but } A \approx_\epsilon B
$$

Because in theory both events actually are nearly impossible so their probabilities are approximately equal, however the logic behind the two operations aren't identical, therefore they are still logically inequivalent.

### Additional Information

Once again, I didn't come up with all of this, alot of this was searching in detail for ways of expressing these ideas. (I do not know that much about topology, I had to be corrected that the boundary of the convex hull wasn't identical to the convex hull itself.) 

But here are the sources and many translations of the original text:

- [Evergreen](https://sites.evergreen.edu/politicalshakespeares/wp-content/uploads/sites/226/2015/12/Borges-The-Library-of-Babel.pdf)
- [maskofreason](https://maskofreason.wordpress.com/wp-content/uploads/2011/02/the-library-of-babel-by-jorge-luis-borges.pdf)
- [Stanford Library](https://web.stanford.edu/class/history34q/readings/textualizingscience/library_of_babel.html)

Reddits:

- [r/theydidthemath](https://www.reddit.com/r/theydidthemath/comments/1dtlpxo/self_the_size_of_the_library_of_babel/)
- [r/BabelForum](https://www.reddit.com/r/BabelForum/)

#### Meme of the post
<img src="/assets/images/content/libraryofbabel/meme.jpg">