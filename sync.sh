#! /bin/bash

pacmanPackages=$(comm -12 <(pacman -Slq | sort) <(sort pacman.txt))
pacman -S --needed $pacmanPackages
