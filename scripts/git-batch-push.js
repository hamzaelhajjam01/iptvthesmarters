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
    name: 'core-and-en-guides',
    msg: 'feat(seo): core scripts, sitemaps, HeroUI callouts, and English technical guides',
    add: [
      'scripts',
      '"Iptv The smarters Pro/assets"',
      '"Iptv The smarters Pro/guides"',
      '"Iptv The smarters Pro/sitemap-guides.xml"',
      '"Iptv The smarters Pro/sitemap-products.xml"',
      '"Iptv The smarters Pro/index.html"',
      '"Iptv The smarters Pro/pricing/index.html"',
      '"Iptv The smarters Pro/products/index.html"'
    ]
  },
  {
    name: 'fr-guides-and-landing',
    msg: 'feat(seo): 35 French technical guides suite and localized hub',
    add: ['"Iptv The smarters Pro/fr"']
  },
  {
    name: 'de-guides-and-landing',
    msg: 'feat(seo): 35 German technical guides suite and localized hub',
    add: ['"Iptv The smarters Pro/de"']
  },
  {
    name: 'es-guides-and-landing',
    msg: 'feat(seo): 35 Spanish technical guides suite and localized hub',
    add: ['"Iptv The smarters Pro/es"']
  },
  {
    name: 'ar-guides-and-landing',
    msg: 'feat(seo): 35 Arabic technical guides suite, RTL layout, and localized hub',
    add: ['"Iptv The smarters Pro/ar"']
  },
  {
    name: 'it-guides-and-landing',
    msg: 'feat(seo): 35 Italian technical guides suite and localized hub',
    add: ['"Iptv The smarters Pro/it"']
  },
  {
    name: 'nl-guides-and-landing',
    msg: 'feat(seo): 35 Dutch technical guides suite and localized hub',
    add: ['"Iptv The smarters Pro/nl"']
  },
  {
    name: 'pt-guides-and-landing',
    msg: 'feat(seo): 70 Portuguese (PT & BR) technical guides suite and localized hubs',
    add: ['"Iptv The smarters Pro/pt"', '"Iptv The smarters Pro/pt-br"']
  },
  {
    name: 'pl-ko-guides-and-landing',
    msg: 'feat(seo): 70 Polish & Korean technical guides suite and localized hubs',
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
  console.log(`✅ Batch ${i + 1} pushed successfully!`);
}

console.log('\n🎉 ALL BATCHES COMMITTED AND PUSHED TO GITHUB ORIGIN MAIN SUCCESSFULLY!');
