#!/bin/bash

SCD=$(cd `dirname $0`;pwd)
ROOT=$(cd $SCD/../;pwd)

SLIDESPATH="${ROOT}/packages/slides/slides"
WIKIPATH="${ROOT}/wiki"
WIKIEXERCISES="${WIKIPATH}/exercises"
WIKISLIDES="${WIKIPATH}/slides"

rm -rf $WIKIPATH/*
mkdir -p $WIKIEXERCISES 
mkdir -p $WIKISLIDES

EXERCISES=$(ls $SLIDESPATH | grep xercise\.mdx)
SLIDES=$(ls $SLIDESPATH | grep -v xercise\.mdx)

for file in $EXERCISES; do
  cp $SLIDESPATH/$file $WIKIEXERCISES/${file%.mdx}.md
done

for file in $SLIDES; do
  cp $SLIDESPATH/$file $WIKISLIDES/${file%.mdx}.md
done