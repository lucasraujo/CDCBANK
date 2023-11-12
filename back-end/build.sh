#!/usr/bin/env bash
# exit on error
set -o errexit
yarn add dotenv mysql2
yarn
yarn build
yarn typeorm migration:run -d dist/data-source