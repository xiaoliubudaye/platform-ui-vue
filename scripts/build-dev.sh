#!/bin/sh
root=$(dirname $(pwd))
echo "current workspace - $root"
# build
pnpm run build:site:dev
pnpm run build:webapp:dev
pnpm run build:mobile:dev
pnpm run build:admin:dev
#
rm -rf $root/dist
#
mkdir -p $root/dist/
mv $root/apps/site/dist/** $root/dist/
#
mkdir -p $root/dist/admin
mv $root/apps/admin/dist/** $root/dist/admin
#
mkdir -p $root/dist/mobile
mv $root/apps/mobile/dist/** $root/dist/mobile
#
mkdir -p $root/dist/webapp
mv $root/apps/webapp/dist/** $root/dist/webapp
