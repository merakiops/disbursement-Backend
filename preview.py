import fitz
from PIL import Image
import sys

doc = fitz.open('output_statement.pdf')
page = doc[0]
pix = page.get_pixmap()
img = Image.frombytes("RGB", [pix.width, pix.height], pix.samples)
img = img.resize((80, 80))
pixels = img.load()

chars = " .:-=+*#%@"
for y in range(img.height):
    line = ""
    for x in range(img.width):
        r, g, b = pixels[x, y]
        gray = int(0.2989 * r + 0.5870 * g + 0.1140 * b)
        char_idx = int((gray / 255) * (len(chars) - 1))
        line += chars[char_idx] * 2
    print(line)
