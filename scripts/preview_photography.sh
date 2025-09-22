#!/usr/bin/env bash
set -euo pipefail

# Preview the Photography/Prints section locally.
# Usage: scripts/preview_photography.sh [PORT]

PORT="${1:-8000}"

cd "$(dirname "$0")/.."

if command -v bundle >/dev/null 2>&1 && [ -f Gemfile ]; then
  echo "[info] Detected Bundler + Gemfile. Serving full Jekyll site on http://localhost:${PORT}"
  echo "[info] Tip: open http://localhost:${PORT}/prints/ and use DevTools device toolbar to emulate phones."
  exec bundle exec jekyll serve --livereload --host 0.0.0.0 --port "${PORT}"
else
  echo "[info] Serving static files from repo root using Python on http://localhost:${PORT}"
  echo "[info] Open http://localhost:${PORT}/prints/ in your browser."
  echo "[info] Use Chrome/Firefox DevTools > Toggle device toolbar to test mobile."
  exec python3 -m http.server "${PORT}"
fi

