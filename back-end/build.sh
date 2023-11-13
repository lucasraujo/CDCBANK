#!/usr/bin/env bash
# exit on error
set -o errexit
SET FOREIGN_KEY_CHECKS = 0
yarn
yarn build
yarn typeorm migration:run -d dist/data-source