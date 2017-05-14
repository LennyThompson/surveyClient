#!/usr/bin/env bash

src_root=~/dev/BoltGenerator/results
dest_root=./src/app
dest_services=$dest_root/services/surveyDb
dest_comps=$dest_root/components/survey

if ! [[ -d $dest_services/types ]]; then
    mkdir $dest_services/types
fi
rm -r $dest_services/types/*.ts
cp -t $dest_services/types $src_root/typescript/*.ts


if ! [[ -d $dest_services/webAPI ]]; then
    mkdir $dest_services/webAPI
fi
if [ "$(ls -A $dest_services/webAPI)" ]; then
    rm -r $dest_services/webAPI/*
fi
cp -r -t $dest_services/webAPI $src_root/http-providers/*

if ! [[ -d $dest_comps/select ]]; then
    mkdir $dest_comps/select
fi
if [ "$(ls -A $dest_comps/select)" ]; then
    rm -r $dest_comps/select/*
fi
cp -r -t $dest_comps/select $src_root/select/*

if ! [[ -d $dest_comps/list-item ]]; then
    mkdir $dest_comps/list-item
fi
if [ "$(ls -A $dest_comps/list-item)" ]; then
    rm -r $dest_comps/list-item/*
fi
cp -r -t $dest_comps/list-item $src_root/list-item/*

if ! [[ -d $dest_comps/form ]]; then
    mkdir $dest_comps/form
fi
if [ "$(ls -A $dest_comps/form)" ]; then
    rm -r $dest_comps/form/*
fi
cp -r -t $dest_comps/form $src_root/form/*

if ! [[ -d $dest_comps/edit-providers ]]; then
    mkdir $dest_comps/edit-providers
fi
if [ "$(ls -A $dest_comps/edit-providers)" ]; then
    rm -r $dest_comps/edit-providers/*
fi
cp -r -t $dest_comps/edit-providers $src_root/edit-provider/*
