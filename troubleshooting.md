# Troubleshooting

## Running `npm install`

### Before everything

1. Run `npm install npm@latest -g` to install last version of NPM;
2. Check your NPM version. It must be at least 6.4.1;
3. Check your Node version. It must be at least v10.13.0;

### Basic steps

1. Change directory to package directory. E.g. `cd example`;
2. Delete `package-lock.json` (on PowerShell, `del .\package-lock.json`)
3. Delete `node_modules` directory (on PowerShell, `del .\node_modules\` then press `A`);

### Didn't work? Try to clean cache

1. Force cache cleaning with `npm cache clean --force`;
2. Change directory to package directory. E.g. `cd example`;
3. Run `npm install` again and, after `npm start`;
