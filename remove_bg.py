import sys
from rembg import remove
from PIL import Image

def remove_background():
    input_path = r"C:\Users\Shakir\.gemini\antigravity\brain\82a1d8ad-58d0-4ab6-9e71-cf38085331b8\jumping_graduate_1772157537001.png"
    output_path = r"c:\Users\Shakir\Desktop\PenguinHorizon\sms-landing-page\public\feature_jumping_grad.png"
    print(f"Processing {input_path}...")
    try:
        input_image = Image.open(input_path)
        output_image = remove(input_image)
        output_image.save(output_path)
        print(f"Successfully saved to {output_path}")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    remove_background()
