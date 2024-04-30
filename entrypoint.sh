#!/bin/sh
set -e

readonly string="$1"
readonly bool_like="$2"

echo "string=$string"
echo "bool-like=$bool_like"

echo "string=$string" >> $GITHUB_OUTPUT
echo "bool-like=$bool_like" >> $GITHUB_OUTPUT
