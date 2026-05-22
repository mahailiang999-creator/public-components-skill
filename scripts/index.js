'use strict';

const path = require('path');

const skillRoot = path.resolve(__dirname, '..');
const defaultSourceRoot = 'C:\\Work_Files\\public-components';

const maintenanceGuide = {
  skill: 'public-components-skill',
  packageName: '@arim-aisdc/public-components',
  packageVersion: '2.3.92',
  sourceRoot: process.env.PUBLIC_COMPONENTS_SOURCE || defaultSourceRoot,
  sourceFiles: {
    packageJson: 'package.json',
    rootExports: 'src/index.ts',
    utilities: 'src/utils/index.ts',
  },
  checkOrder: [
    'Confirm package.json version.',
    'Compare src/index.ts root exports with SKILL.md and references.',
    'Check component type.ts files only for task-relevant API details.',
    'Update local VERSION_UPDATES.local.md when source and docs drift.',
  ],
};

function getMaintenanceGuide() {
  return {
    ...maintenanceGuide,
    skillRoot,
  };
}

function printMaintenanceGuide() {
  console.log(JSON.stringify(getMaintenanceGuide(), null, 2));
}

if (require.main === module) {
  printMaintenanceGuide();
}

module.exports = {
  getMaintenanceGuide,
  printMaintenanceGuide,
};
