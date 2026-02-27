import os
import glob
from PIL import Image

def compress_images(directory, quality=80):
    # Find all webp files
    search_pattern = os.path.join(directory, '**/*.webp')
    files = glob.glob(search_pattern, recursive=True)
    
    print(f"Found {len(files)} images. Starting compression...")
    
    count = 0
    saved_bytes = 0
    
    for file_path in files:
        try:
            # Check file size
            original_size = os.path.getsize(file_path)
            
            # Open image
            with Image.open(file_path) as img:
                # Save with reduced quality
                img.save(file_path, 'WEBP', quality=quality, method=6)
            
            new_size = os.path.getsize(file_path)
            diff = original_size - new_size
            
            if diff > 0:
                saved_bytes += diff
                count += 1
                # print(f"Compressed {os.path.basename(file_path)}: {(original_size/1024):.1f}KB -> {(new_size/1024):.1f}KB")
            
        except Exception as e:
            print(f"Error compressing {file_path}: {e}")
            
    print(f"Process complete.")
    print(f"Compressed {count} images.")
    print(f"Total space saved: {saved_bytes / (1024*1024):.2f} MB")

if __name__ == "__main__":
    # Target directory
    ROOT_DIR = '/Users/mohish.workkgmail.com/Desktop/Mohish/Projects/PersonalProjects/Shreepad-Portfolio/Frontend'
    ASSETS_DIR = os.path.join(ROOT_DIR, 'src/assets/work')
    
    compress_images(ASSETS_DIR, quality=75)
