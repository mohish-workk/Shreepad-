import os
import json
import subprocess
import glob

# Define root directory
ROOT_DIR = '/Users/mohish.workkgmail.com/Desktop/Mohish/Projects/PersonalProjects/Shreepad-Portfolio/Frontend'
ASSETS_DIR = os.path.join(ROOT_DIR, 'src/assets/work/Commercial')
OUTPUT_FILE = os.path.join(ROOT_DIR, 'src/data/commercialMetadata.json')

def get_image_dimensions(image_path):
    try:
        # Use sips to get dimensions on macOS
        output = subprocess.check_output(['sips', '-g', 'pixelWidth', '-g', 'pixelHeight', image_path])
        output = output.decode('utf-8')
        
        width = 0
        height = 0
        
        for line in output.split('\n'):
            if 'pixelWidth' in line:
                width = int(line.split(':')[-1].strip())
            if 'pixelHeight' in line:
                height = int(line.split(':')[-1].strip())
                
        return width, height
    except Exception as e:
        print(f"Error processing {image_path}: {e}")
        return 0, 0

def main():
    metadata = {}
    
    # Find all webp files in the Commercial directory recursively
    search_pattern = os.path.join(ASSETS_DIR, '**/*.webp')
    files = glob.glob(search_pattern, recursive=True)
    
    print(f"Found {len(files)} images...")
    
    for file_path in files:
        width, height = get_image_dimensions(file_path)
        
        if width > 0 and height > 0:
            orientation = 'horizontal' if width > height else 'vertical'
            
            # Create a relative path consistent with how Vite/glob imports might see it or just use filename/end path
            # The key in glob import in CommercialWork.jsx looks like: ../assets/work/Commercial/Event/hand prints chaatne/1.webp
            # So we should construct a key that matches that effectively.
            
            # Get path relative to src/pages/CommercialWork.jsx (which is where the glob runs)
            # CommercialWork.jsx is in src/pages
            # Assets are in src/assets
            # Relative path should be ../assets/work/Commercial/...
            
            rel_path_from_src = os.path.relpath(file_path, os.path.join(ROOT_DIR, 'src'))
            # rel_path_from_src is assets/work/Commercial/...
            
            # To match import.meta.glob('../assets/work/Commercial/...') from inside src/pages/
            # we need ../assets/work/Commercial/...
            
            import_key = '../' + rel_path_from_src
            
            metadata[import_key] = {
                'width': width,
                'height': height,
                'orientation': orientation
            }
            # print(f"{import_key}: {orientation} ({width}x{height})")

    # Ensure data directory exists
    os.makedirs(os.path.dirname(OUTPUT_FILE), exist_ok=True)
    
    with open(OUTPUT_FILE, 'w') as f:
        json.dump(metadata, f, indent=2)
        
    print(f"Metadata saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    main()
