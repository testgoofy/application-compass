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

# Extract patch number from potential pre-release/build info
patch=$(echo "$patch_full" | sed 's/[-+].*$//')

# Create version.json
cat > version.json << EOF
{
    "major": "$major",
    "minor": "$minor",
    "patch": "$patch",
    "version": "$VERSION"
}
EOF

echo "Version information saved to version.json"