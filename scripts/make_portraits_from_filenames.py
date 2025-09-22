#!/usr/bin/env python3
"""
Generate portraits/works.js from filenames in assets/img/portraits/.

Writes exactly:
  window.__PORTRAITS__ = [ ... ];

Fields:
  title (humanised from filename), src, alt, description (empty).
"""
from __future__ import annotations

from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
IMG_DIRS = [
    ROOT / "assets" / "img" / "portraits",
    ROOT / "assets" / "img" / "portrait",
]
OUT_FILE = ROOT / "portraits" / "works.js"

def humanise(stem: str) -> str:
    s = re.sub(r"[\-_]+", " ", stem)
    s = re.sub(r"\s+", " ", s).strip()
    return s.title() if s else stem

def to_js(items: list[dict[str, str]]) -> str:
    def esc(s: str) -> str:
        return s.replace("\\", "\\\\").replace("\"", "\\\"")
    lines = ["window.__PORTRAITS__ = ["]
    for i, it in enumerate(items):
        lines.append("  {")
        lines.append(f"    title: \"{esc(it['title'])}\",")
        lines.append(f"    src: \"{esc(it['src'])}\",")
        lines.append(f"    alt: \"{esc(it['alt'])}\",")
        lines.append(f"    description: \"{esc(it['description'])}\",")
        lines.append("  }" + ("," if i < len(items) - 1 else ""))
    lines.append("];")
    lines.append("")
    return "\n".join(lines)

def main() -> int:
    OUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    items: list[dict[str, str]] = []
    exts = {'.jpg','.jpeg','.png','.webp','.tif','.tiff'}
    for d in IMG_DIRS:
        if not d.exists():
            continue
        files = sorted([p for p in d.iterdir() if p.is_file() and p.suffix.lower() in exts], key=lambda p: p.name.lower())
        for p in files:
            title = humanise(p.stem)
            # normalise src path to /assets/img/portraits/...
            # if images are under singular 'portrait', still publish under that actual folder name
            rel = p.relative_to(ROOT)
            src = '/' + str(rel).replace('\\', '/')
            items.append({
                'title': title,
                'src': src,
                'alt': f"{title} — portrait photograph",
                'description': '',
            })
    tmp = OUT_FILE.with_suffix('.js.tmp')
    tmp.write_text(to_js(items), encoding='utf-8')
    tmp.replace(OUT_FILE)
    print(f"Wrote {OUT_FILE.relative_to(ROOT)} with {len(items)} items.")
    return 0

if __name__ == '__main__':
    raise SystemExit(main())
