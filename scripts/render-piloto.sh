#!/usr/bin/env bash
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_DIR"

export FONTCONFIG_FILE="$PROJECT_DIR/config/fonts.conf"
mkdir -p build/font-cache build/piloto/png
fc-cache -f >/dev/null

while IFS= read -r svg; do
  relative="${svg#build/piloto/}"
  name="${relative//\//-}"
  name="${name%.svg}.png"
  inkscape "$svg" \
    --export-type=png \
    --export-width=3840 \
    --export-filename="build/piloto/png/$name" \
    >/dev/null
  echo "Renderizado build/piloto/png/$name"
done < <(find build/piloto -mindepth 2 -name '*.svg' -print | sort)
