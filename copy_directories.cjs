const fs = require('fs-extra');
const path = require('path');

async function copyDirectory(src, dest) {
  try {
    await fs.copy(src, dest);
    console.log(`Successfully copied ${src} to ${dest}`);
  } catch (err) {
    console.error(`Error copying ${src} to ${dest}:`, err);
  }
}

async function main() {
  const templateDir = 'C:/Users/ninja/Downloads/templates/sidefolio-portfolio-template/manuarora700-sidefolio-26cfd69/src';
  const projectDir = './src';

  await copyDirectory(path.join(templateDir, 'app'), path.join(projectDir, 'app'));
  await copyDirectory(path.join(templateDir, 'components'), path.join(projectDir, 'components'));
  await copyDirectory(path.join(templateDir, 'constants'), path.join(projectDir, 'constants'));
  await copyDirectory(path.join(templateDir, 'types'), path.join(projectDir, 'types'));
}

main();
