import { execSync } from 'node:child_process';

function run(cmd) {
  console.log(`> ${cmd}`);
  try {
    const out = execSync(cmd, { stdio: 'inherit' });
    return true;
  } catch (err) {
    console.error(`Command failed: ${cmd}`, err.message);
    return false;
  }
}

const batches = [
  {
    name: 'core-scripts-and-en-pages',
    msg: 'fix(ui): eliminate stray arrows and standardize navigation menu across English pages & guides',
    add: [
      'scripts',
      'build.js',
      'package.json',
      '"Iptv The smarters Pro/index.html"',
      '"Iptv The smarters Pro/pricing"',
      '"Iptv The smarters Pro/features"',
      '"Iptv The smarters Pro/channels"',
      '"Iptv The smarters Pro/contact"',
      '"Iptv The smarters Pro/privacy"',
      '"Iptv The smarters Pro/terms"',
      '"Iptv The smarters Pro/refund"',
      '"Iptv The smarters Pro/guides"'
    ]
  },
  {
    name: 'fr-pages-and-guides',
    msg: 'fix(ui): standardize header navigation across French pages and guides',
    add: ['"Iptv The smarters Pro/fr"']
  },
  {
    name: 'de-pages-and-guides',
    msg: 'fix(ui): standardize header navigation across German pages and guides',
    add: ['"Iptv The smarters Pro/de"']
  },
  {
    name: 'es-pages-and-guides',
    msg: 'fix(ui): standardize header navigation across Spanish pages and guides',
    add: ['"Iptv The smarters Pro/es"']
  },
  {
    name: 'ar-pages-and-guides',
    msg: 'fix(ui): standardize header navigation across Arabic pages and guides',
    add: ['"Iptv The smarters Pro/ar"']
  },
  {
    name: 'it-pages-and-guides',
    msg: 'fix(ui): standardize header navigation across Italian pages and guides',
    add: ['"Iptv The smarters Pro/it"']
  },
  {
    name: 'nl-pages-and-guides',
    msg: 'fix(ui): standardize header navigation across Dutch pages and guides',
    add: ['"Iptv The smarters Pro/nl"']
  },
  {
    name: 'pt-pages-and-guides',
    msg: 'fix(ui): standardize header navigation across Portuguese pages and guides',
    add: ['"Iptv The smarters Pro/pt"', '"Iptv The smarters Pro/pt-br"']
  },
  {
    name: 'pl-ko-pages-and-guides',
    msg: 'fix(ui): standardize header navigation across Polish and Korean pages and guides',
    add: ['"Iptv The smarters Pro/pl"', '"Iptv The smarters Pro/ko"']
  }
];

console.log(`Starting Batch Git Deployment across ${batches.length} sequential batches...`);

for (let i = 0; i < batches.length; i++) {
  const b = batches[i];
  console.log(`\n========================================================`);
  console.log(`[Batch ${i + 1}/${batches.length}] ${b.name}`);
  console.log(`========================================================`);

  const addCmd = `git add ${b.add.join(' ')}`;
  if (!run(addCmd)) process.exit(1);

  // Check if there are staged changes
  try {
    const status = execSync('git status --porcelain').toString();
    const hasStaged = status.split('\n').some(l => l.startsWith('A ') || l.startsWith('M ') || l.startsWith('D '));
    if (!hasStaged) {
      console.log('No staged changes for this batch, skipping commit/push.');
      continue;
    }
  } catch (e) {
    // continue
  }

  const commitCmd = `git commit -m "${b.msg}"`;
  if (!run(commitCmd)) process.exit(1);

  console.log(`Pushing Batch ${i + 1} to origin main...`);
  const pushCmd = `git push origin main`;
  if (!run(pushCmd)) {
    console.error(`Failed to push Batch ${i + 1}`);
    process.exit(1);
  }
  console.log(`✓ Batch ${i + 1} pushed successfully!`);
}

console.log('\nAll batches successfully committed and pushed to origin main!');
