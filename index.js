const git = require("isomorphic-git");
const fs = require('fs');
const actions = require('@actions/core');
const github = require('@actions/github');

(async function () {
  try {
    const username = actions.getInput('name');
    const email = actions.getInput('email');
    const gitdir = actions.getInput('dir');
    const message = actions.getInput('message');
    const days = parseInt(actions.getInput('days'));
    const seconds = days * 24 * 60 * 60;
    console.log("Current username: " + username + ", email: " + email);
    console.log("Git dir: " + gitdir);
    console.log("Commit message: " + message);
    console.log("Days: " + days + "(=" + seconds + " s)");

    let tree = await git.resolveRef({ fs, gitdir, ref: 'HEAD' });

    async function commit(time) {
      let sha = await git.commit({
        fs,
        gitdir,
        message: message,
        author: {
          name: username,
          email: email,
          timestamp: time,
        },
        tree,
      })
      console.log("Created " + sha)
    }

    const now = Math.floor(Date.now() / 1000);
    let commits = await git.log({
      fs,
      gitdir,
      ref: 'HEAD',
      since: now - seconds,
    })
    console.log(commits)
  } catch (error) {
    core.setFailed(error.message);
  }
})();
