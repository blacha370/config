#! /bin/bash

pacmanPackages=$(comm -12 <(pacman -Slq | sort) <(sort pacman.txt))
sudo pacman -S --needed $pacmanPackages

IFS=$'\n' read -d '' -r -a yayPackages < yay.txt

for package in "${yayPackages[@]}"; do
	yay -S $package
done

cp -r .config ~/.config
cp -r .config-files/. ~/
