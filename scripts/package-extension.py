import os
import json
import zipfile

root_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ext_dir = os.path.join(root_dir, 'chrome-extension')

# Files and directories to package
direct_files = [
    'background.js',
    'rules.json',
    'player.html',
    'player.css',
    'player.js',
    'popup.html',
    'popup.css',
    'popup.js'
]

directories = ['icons', 'lib']

def package_browser(target_browser, zip_filename):
    zip_path = os.path.join(root_dir, zip_filename)
    if os.path.exists(zip_path):
        os.remove(zip_path)

    # Load and adjust manifest.json
    manifest_src = os.path.join(ext_dir, 'manifest.json')
    with open(manifest_src, 'r', encoding='utf-8') as mf:
        manifest = json.load(mf)

    if target_browser == 'chrome':
        manifest['background'] = {
            'service_worker': 'background.js'
        }
    elif target_browser == 'firefox':
        manifest['background'] = {
            'scripts': ['background.js']
        }

    manifest_bytes = json.dumps(manifest, indent=2).encode('utf-8')

    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as z:
        # 1. Write customized manifest.json
        z.writestr('manifest.json', manifest_bytes)

        # 2. Write direct root files
        for fname in sorted(direct_files):
            fpath = os.path.join(ext_dir, fname)
            if os.path.exists(fpath):
                z.write(fpath, fname)

        # 3. Write directories with POSIX forward slashes
        for dir_name in directories:
            dir_path = os.path.join(ext_dir, dir_name)
            for root, _, files in os.walk(dir_path):
                for file in sorted(files):
                    fpath = os.path.join(root, file)
                    rel = os.path.relpath(fpath, ext_dir)
                    # CRITICAL: Always forward slash for Mozilla & Chrome validation
                    posix_name = rel.replace('\\', '/')
                    z.write(fpath, posix_name)

    print(f'[{target_browser}] Successfully created {zip_filename} ({os.path.getsize(zip_path)} bytes)')

if __name__ == '__main__':
    package_browser('chrome', 'smarters-iptv-web-player-v1.0.1.zip')
    package_browser('firefox', 'smarters-iptv-firefox-v1.0.1.zip')
    print('Packaging complete.')
