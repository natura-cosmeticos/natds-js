#!/bin/sh

NATDS_ICONS_DIR=../../node_modules/@naturacosmeticos/natds-icons/dist
STORYBOOK_ASSETS_DIR=./.storybook/assets

cp $NATDS_ICONS_DIR/natds-icons.css $STORYBOOK_ASSETS_DIR
cp -r $NATDS_ICONS_DIR/fonts $STORYBOOK_ASSETS_DIR
