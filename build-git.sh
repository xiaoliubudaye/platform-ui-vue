#!/bin/sh
root=$(pwd)
echo "current workspace - $root"
# build
pnpm run build:site:git
pnpm run build:webapp:git
pnpm run build:mobile:git
pnpm run build:admin:git
#
rm -rf ./dist
#
mkdir -p ./dist/
mv ./apps/site/dist/** ./dist/
#
mkdir -p ./dist/admin
mv ./apps/admin/dist/** ./dist/admin
#
mkdir -p ./dist/mobile
mv ./apps/mobile/dist/** ./dist/mobile
#
mkdir -p ./dist/webapp
mv ./apps/webapp/dist/** ./dist/webapp
