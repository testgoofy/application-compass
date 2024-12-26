#!/bin/bash

# Exit on error
set -e

# Ensure jq is available
if ! command -v jq >/dev/null 2>&1; then
    echo "Error: jq is required but not installed"
    exit 1
fi

# Ensure we receive a version argument
if [ $# -ne 1 ]; then
    echo "Error: Version argument required"
    echo "Usage: $0 <version>"
    exit 1
fi

VERSION=$1

# Validate semantic version format
if ! [[ $VERSION =~ ^[0-9]+\.[0-9]+\.[0-9]+(-[0-9A-Za-z-]+)?(\+[0-9A-Za-z-]+)?$ ]]; then
    echo "Error: Invalid semantic version format"
    echo "Expected format: X.Y.Z or X.Y.Z-PRERELEASE+BUILD"
    exit 1
fi

# Extract version parts
IFS='.' read -r major minor patch_full <<< "$VERSION"

# Extract patch, prerelease, and build info
if [[ $patch_rest =~ ^([0-9]+)(-[^+]+)?(\+.+)?$ ]]; then
    patch="${BASH_REMATCH[1]}"
    # Remove leading dash from prerelease
    prerelease="${BASH_REMATCH[2]#-}"
    # Remove leading plus from build
    build="${BASH_REMATCH[3]#+}"
fi

# Create version.json
cat > version.json << EOF
{
    "major": "$major",
    "minor": "$minor",
    "patch": "$patch",
    "version": "$VERSION"
}
EOF

# Add prerelease if present
if [ ! -z "$prerelease" ]; then
    jq --arg prerelease "$prerelease" \
        '. + {prerelease: $prerelease}' version.json > version.json.tmp && \
        mv version.json.tmp version.json
fi

# Add build if present
if [ ! -z "$build" ]; then
    jq --arg build "$build" \
        '. + {build: $build}' version.json > version.json.tmp && \
        mv version.json.tmp version.json
fi

echo "Version information saved to version.json"