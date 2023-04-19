# Installation
To properly configure your VSCODE  environment with the attached files you will need to:

## For settings
1. Open VS Code and click on the gear icon on the left side of the window to open the Settings menu.
2. In the Settings menu, click on the three dots icon on the top right corner and select "Open Settings (JSON)" or "Open Workspace Settings (JSON)" depending on whether you want to restore your user or workspace settings.
3. Replace the contents of the JSON file that opens up in the editor with the contents of your settings backup file.
4. Save the file.

## For extensions
1. Open a command prompt or terminal window.
2. Run the following command: `xargs -a extensions.txt -L 1 code --install-extension`
3. This will install all the extensions listed in the "extensions.txt" file.