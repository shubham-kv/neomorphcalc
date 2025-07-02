import semanticRelease from 'semantic-release';
import fs from 'fs';

(async function main() {
  /** @type {import('semantic-release').Result} */
  let result;

  try {
    result = await semanticRelease();
  } catch(err) {
    console.error("The automated release failed with %O", err);
  }

  if (result) {
    const { lastRelease, commits, nextRelease, releases } = result;

    console.log(
      `Published ${nextRelease.type} release version ${nextRelease.version} containing ${commits.length} commits.`
    );

    if (lastRelease.version) {
      console.log(`The last release was "${lastRelease.version}".`);
    }

    for (const release of releases) {
      console.log(
        `The release was published with plugin "${release.pluginName}".`
      );
    }
  } else {
    console.log('No release published.');
  }

  const output = result ? 'true' : 'false';

  fs.appendFileSync(
    process.env.GITHUB_OUTPUT,
    `new_release_published=${output}\n`
  );
})();
