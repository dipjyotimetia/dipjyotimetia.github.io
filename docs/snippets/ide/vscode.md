---
id: vscode
title: VS Code
sidebar_label: VS Code
---

### Vscode Setting with prettier and eslint
```json
{
  "editor.formatOnSave": true,
  "editor.fontSize": 16,
  "terminal.integrated.shell.windows": "C:\\Windows\\System32\\cmd.exe",
  "editor.minimap.enabled": false,
  "beautify.ignore": ["**/*.js", "**/*.jsx"],
  "git.autofetch": true,
  "json.schemas": [
    {
      "fileMatch": ["cypress.json"],
      "url": "https://on.cypress.io/cypress.schema.json"
    }
  ],
  "vsicons.projectDetection.disableDetect": true,
  "window.menuBarVisibility": "toggle",
  "[javascript]": {
    "editor.formatOnSave": false
  },
  "eslint.autoFixOnSave": true,
  "workbench.colorTheme": "Monokai Dimmed",
  "workbench.iconTheme": "vscode-icons",
  "prettier.disableLanguages": ["js"]
}

```