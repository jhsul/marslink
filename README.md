<h1 align="center">marslink</h1>
<p align="center">🌎 → 🛰️ → ♾️</p>
<p align="center"><i>this is a work in progress; pls dont judge 🥺</i></p>

## Objective

A 24/7/365 internet connection between Earth and Mars would be cool. Assuming a bidirectional Starlink constellation around both Earth and Mars, a heliocentric constellation could enable a permanent link between the two planets and lay the groundwork for a solar system sized Starlink constellation. This repository contains the source code for a simulation and 3D render of such a constellation with the following inputs:

- $n :=$ number of satelites in the main constellation
- $r :=$ radius of the constellation's circular orbit
- $p :=$ power output of each satellite\*

_\*This power output is also assumed for the satellites making up the Earth and Mars constellations._

The purpose of this project is to create an interactive visualization of this problem. I am also submitting this as my final project for CS577.

## Assumptions

These are are some of my current assumptions that I may revisit at a later point:

- I am calculating power draw assuming that all satellites use the Ku-band
- I am also using a circular orbit with $0\degree$ inclination for the starlink constellation
- CURRENTLY THE SATELLITES DO NOT ACTUALLY MOVE / HAVE REAL ORBITS; THIS IS A PRIORITY
- I am not calculating the effect of noise from the Sun
- _Perhaps most importantly, I am only using a single orbital shell. A more optimal constellation would have multiple shells._

## Reading

- https://en.wikipedia.org/wiki/VSOP_model
- https://en.wikipedia.org/wiki/Orbit_of_Mars
- https://www.agopax.it/Libri_astronomia/pdf/Astronomical%20Algorithms.pdf
