const core = require('@actions/core');
const {GitHub, context} = require('@actions/github');


async function run() {
  try {
    const token = core.getInput('repo-token');
    const octokit = new GitHub(token);

    await octokit.pulls.createComment({
      repo: context.repo.repo,
      owner: context.repo.owner,
      body: 'This is my comment ooo'
    })
  } catch(error) {
    core.setFailed(error.message);
  }
}