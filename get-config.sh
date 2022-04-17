#! /bin/bash

configDirs=("alacritty" "i3" "i3status" "nitrogen" "ulauncher")
configFiles=(".xinitrc")

mkdir -p .config-files

for file in ${configFiles[@]}; do
	cp ~/$file .config-files/$file
done

for dir in ${configDirs[@]}; do
	mkdir -p .config/$dir
	cp -r ~/.config/$dir .config/
done
