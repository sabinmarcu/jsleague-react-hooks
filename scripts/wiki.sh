#!/bin/bash

SCD=$(cd `dirname $0`;pwd)
ROOT=$(cd $SCD/../;pwd)
REMOTE="git@$(git remote -v | head -n 1 | cut -d "@" -f 2 | cut -d "." -f 1,2).wiki.git"
GIT_TEMP="git_backup"
WIKI_TMEP="wiki"

cd $ROOT
mv .git $GIT_TEMP

rm -rf wiki
git clone $REMOTE $WIKI_TMEP

$SCD/copy.sh
$SCD/genSidebar.sh
$SCD/cleanSlides.sh

cd $ROOT/$WIKI_TMEP

git add .
git commit -am "Updated wiki on `date '+%d/%m/%Y'` at `date '+%H:%M'`"
git push

cd $ROOT 

rm -rf wiki
mv $GIT_TEMP .git