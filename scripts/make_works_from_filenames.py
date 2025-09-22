#!/usr/bin/env python3
"""
Generate prints/works.js from filenames in assets/img/prints/.

Writes exactly:
  window.__WORKS__ = [ ... ];

Fields per item:
  title (humanised from filename), year (empty), size, edition, price,
  paymentLink (preserved if an existing Stripe link is present), src, alt, description.
"""
from __future__ import annotations

import json
import os
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
IMG_DIR = ROOT / "assets" / "img" / "prints"
OUT_FILE = ROOT / "prints" / "works.js"


def humanise(stem: str) -> str:
    # Replace separators with spaces and title-case words
    s = re.sub(r"[\-_]+", " ", stem)
    s = re.sub(r"\s+", " ", s).strip()
    # Keep digits as-is; title-case letters
    return s.title() if s else stem


def read_existing_payment_links(path: Path) -> dict[str, str]:
    mapping: dict[str, str] = {}
    if not path.exists():
        return mapping
    try:
        text = path.read_text(encoding="utf-8")
    except Exception:
        return mapping
    # Very lightweight extraction of entries: look for objects with src and paymentLink
    # This is not a full JS parser but enough for the expected file shape.
    item_pattern = re.compile(r"\{[^}]*?\}", re.DOTALL)
    src_re = re.compile(r"src\s*:\s*['\"]([^'\"]+)['\"]")
    pay_re = re.compile(r"paymentLink\s*:\s*['\"]([^'\"]+)['\"]")
    for m in item_pattern.finditer(text):
        block = m.group(0)
        src_m = src_re.search(block)
        pay_m = pay_re.search(block)
        if src_m and pay_m:
            src = src_m.group(1)
            link = pay_m.group(1)
            if link.startswith("https://buy.stripe.com/"):
                mapping[src] = link
    return mapping


def build_items(existing_links: dict[str, str]) -> list[dict[str, str]]:
    if not IMG_DIR.exists():
        return []
    exts = {".jpg", ".jpeg", ".png", ".webp", ".tiff", ".tif"}
    files = [p for p in IMG_DIR.iterdir() if p.is_file() and p.suffix.lower() in exts]
    files.sort(key=lambda p: p.name.lower())
    items = []
    for p in files:
        title = humanise(p.stem)
        src = f"/assets/img/prints/{p.name}"
        payment_link = existing_links.get(src, "https://buy.stripe.com/REPLACE_ME")
        items.append({
            "title": title,
            "year": "",
            "size": "30×40 cm",
            "edition": "Edition of 30",
            "price": "€220",
            "paymentLink": payment_link,
            "src": src,
            "alt": f"{title} — black-and-white photograph",
            "description": "",
        })
    return items


def to_js(items: list[dict[str, str]]) -> str:
    # Pretty-print JS array with stable quoting
    def esc(s: str) -> str:
        return s.replace("\\", "\\\\").replace("\"", "\\\"")

    lines = ["window.__WORKS__ = ["]
    for i, it in enumerate(items):
        lines.append("  {")
        lines.append(f"    title: \"{esc(it['title'])}\",")
        lines.append(f"    year: \"{esc(it['year'])}\",")
        lines.append(f"    size: \"{esc(it['size'])}\",")
        lines.append(f"    edition: \"{esc(it['edition'])}\",")
        lines.append(f"    price: \"{esc(it['price'])}\",")
        lines.append(f"    paymentLink: \"{esc(it['paymentLink'])}\",")
        lines.append(f"    src: \"{esc(it['src'])}\",")
        lines.append(f"    alt: \"{esc(it['alt'])}\",")
        lines.append(f"    description: \"{esc(it['description'])}\",")
        lines.append("  }" + ("," if i < len(items) - 1 else ""))
    lines.append("];")
    lines.append("")
    return "\n".join(lines)


def main() -> int:
    OUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    existing = read_existing_payment_links(OUT_FILE)
    items = build_items(existing)
    js = to_js(items)
    tmp = OUT_FILE.with_suffix(".js.tmp")
    tmp.write_text(js, encoding="utf-8")
    tmp.replace(OUT_FILE)
    print(f"Wrote {OUT_FILE.relative_to(ROOT)} with {len(items)} items.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

