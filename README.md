<h1 align="center">marslink</h1>
<p align="center">🌎 → 🛰️ → ♾️</p>
<p align="center"><i>this is a work in progress; pls dont judge 🥺</i></p>

## Objective

A 24/7/365 internet connection between Earth and Mars would be cool. Assuming an existing bidirectional Starlink constellation around both Earth and Mars, a heliocentric constellation could enable a permanent link between the two planets and lay the groundwork for a solar-system-wide network. This repository contains the source code for a simulation and 3D render of such a constellation. The purpose of this project is to create an interactive visualization of this problem. I am also submitting this as my final project for CS577.

## Parameters

The constellation is made up of multiple orbital shells. Each orbital shell is parameterized by two inputs:

- $n :=$ number of satelites in the main constellation
- $r :=$ radius of the constellation's circular orbit

The power output is the same for all satellites in the constellation, and is also specified by the user:

- $p :=$ power output of each satellite

This power output is also assumed for the satellites making up the Earth and Mars constellations. It is used to calculate the `maxDist` parameter used in the routing based on the free-space path loss formula.

## Routing

Routing is done using a greedy-first search algorithm. Each node finds all of the nodes within the radius specified by the `maxDist` parameter, and then chooses the one which is closest to Mars. This is done consecutively until Mars is reached, or there are no neighbors available.

This may not be as optimal of a search as A\*, but I think that it is the natural search algorithm to use in this case, since it theoretically gives each satellite much more autonomy. Since algorithms like A\* require centralized knowledge of the entire constellation and not just the local satellites, it is not

## Reading

- https://en.wikipedia.org/wiki/VSOP_model
- https://en.wikipedia.org/wiki/Orbit_of_Mars
- https://www.agopax.it/Libri_astronomia/pdf/Astronomical%20Algorithms.pdf
