import requests
from bs4 import BeautifulSoup
import os

# X profile details
x_profile_url = "https://x.com/M7MED_1573"  # Your X profile URL
profile_page_html = "index.html"  # Your HTML file containing the profile picture
profile_image_class = "css-9pa8cd"  # Update this class if it changes

def fetch_latest_profile_picture():
    response = requests.get(x_profile_url)
    soup = BeautifulSoup(response.text, 'html.parser')
    
    # Find the profile image tag using the correct class name or alternative method
    profile_image_tag = soup.find('img', class_=profile_image_class)
    if profile_image_tag and 'src' in profile_image_tag.attrs:
        return profile_image_tag['src']
    return None

def update_html_with_new_picture(new_picture_url):
    with open(profile_page_html, 'r', encoding='utf-8') as file:
        html_content = file.read()
    
    soup = BeautifulSoup(html_content, 'html.parser')
    profile_img_tag = soup.find('img', {'alt': 'Profile'})
    
    if profile_img_tag and profile_img_tag['src'] != new_picture_url:
        profile_img_tag['src'] = new_picture_url
        with open(profile_page_html, 'w', encoding='utf-8') as file:
            file.write(str(soup))
        print(f"Profile picture updated to {new_picture_url}")
    else:
        print("No update needed, the profile picture is already up to date.")

def main():
    new_picture_url = fetch_latest_profile_picture()
    if new_picture_url:
        update_html_with_new_picture(new_picture_url)
    else:
        print("Could not fetch the latest profile picture.")

if __name__ == "__main__":
    main()
