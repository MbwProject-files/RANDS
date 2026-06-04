import os
from PIL import Image
import pillow_heif

pillow_heif.register_heif_opener()

imgs = ['IMG_4745.HEIC', 'IMG_4748.HEIC', 'IMG_4752.HEIC', 'IMG_4765.HEIC']
for img in imgs:
    path = f"D:/RandS/Main/working/Rands_280526/src/assets/img/Team/{img}"
    try:
        image = Image.open(path)
        image.save(path.replace('.HEIC', '.jpg'), "JPEG")
        print(f"Converted {img}")
    except Exception as e:
        print(f"Failed {img}: {e}")
