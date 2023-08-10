#!/bin/sh
root=$(dirname $(pwd))
echo "current workspace - $root"
# @commons/core
cd "$root/commons/core" || exit
rm -rf package-lock.json
rm -rf pnpm-lock.yaml
rm -rf node_modules
ncu -u
# @commons/custom
cd "$root/commons/custom" || exit
rm -rf package-lock.json
rm -rf pnpm-lock.yaml
rm -rf node_modules
ncu -u
# @components/mobile
cd "$root/commons/mobile" || exit
rm -rf package-lock.json
rm -rf pnpm-lock.yaml
rm -rf node_modules
ncu -u
# @components/webapp
cd "$root/commons/webapp" || exit
rm -rf package-lock.json
rm -rf pnpm-lock.yaml
rm -rf node_modules
ncu -u
# @apps/admin
cd "$root/apps/admin" || exit
rm -rf package-lock.json
rm -rf pnpm-lock.yaml
rm -rf node_modules
ncu -u
# @apps/mobile
cd "$root/apps/mobile" || exit
rm -rf package-lock.json
rm -rf pnpm-lock.yaml
rm -rf node_modules
ncu -u
# @apps/webapp
cd "$root/apps/webapp" || exit
rm -rf package-lock.json
rm -rf pnpm-lock.yaml
rm -rf node_modules
ncu -u
# @apps/site
cd "$root/apps/site" || exit
rm -rf package-lock.json
rm -rf pnpm-lock.yaml
rm -rf node_modules
ncu -u
# root
cd "$root" || exit
rm -rf package-lock.json
rm -rf pnpm-lock.yaml
rm -rf node_modules
ncu -u
#
pnpm install
pnpm run prettier
# build
cd "$root/scripts" || exit
sh build-pro.sh
