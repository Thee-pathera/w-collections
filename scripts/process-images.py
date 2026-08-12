from pathlib import Path
from PIL import Image
import shutil

SRC = Path("images/originals")
DST = Path("images")

DST.mkdir(exist_ok=True)

VALID = {".jpg", ".jpeg", ".jfif", ".png", ".webp"}

MAX_WIDTH = 1400
QUALITY = 78

for src in sorted(SRC.iterdir()):
    if not src.is_file():
        continue

    if src.suffix.lower() not in VALID:
        continue

    name = src.stem.lower().replace(" ", "-")

    try:
        img = Image.open(src)

        if img.width > MAX_WIDTH:
            h = round(img.height * MAX_WIDTH / img.width)
            img = img.resize((MAX_WIDTH, h), Image.Resampling.LANCZOS)

        if img.mode not in ("RGB", "L"):
            img = img.convert("RGB")

        # PNG/WebP with transparency stay in their format
        if src.suffix.lower() == ".png":
            out = DST / f"{name}.png"
            img.save(out, optimize=True)

        elif src.suffix.lower() == ".webp":
            out = DST / f"{name}.webp"
            img.save(out, "WEBP", quality=QUALITY, method=6)

        else:
            out = DST / f"{name}.jpg"
            img = img.convert("RGB")
            img.save(
                out,
                "JPEG",
                quality=QUALITY,
                optimize=True,
                progressive=True
            )

        print(f"✓ {src.name} -> {out.name}")

    except Exception as e:
        print(f"✗ {src.name}: {e}")
