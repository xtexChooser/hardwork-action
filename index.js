const git = require("isomorphic-git");
const fs = require('fs');
const actions = require('@actions/core');
const github = require('@actions/github');

const SECONDS_PER_DAY = 24 * 60 * 60;

(async function () {
  try {
    const username = actions.getInput('name')
    const email = actions.getInput('email')
    const gitdir = actions.getInput('dir')
    const message = actions.getInput('message')
    const days = parseInt(actions.getInput('days'))
    const seconds = days * SECONDS_PER_DAY
    console.log("Current username: " + username + ", email: " + email)
    console.log("Git dir: " + gitdir)
    console.log("Commit message: " + message)
    console.log("Days: " + days + "(=" + seconds + " s)")

    let tree = await git.resolveRef({ fs, gitdir, ref: 'HEAD' })

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
      console.log("Created " + sha + " at " + time)
    }

    const now = Math.floor(Date.now() / 1000)
    let commits = await git.log({
      fs,
      gitdir,
      ref: 'HEAD',
      since: now - seconds,
    })
    commits = commits.map((c) => {
      c.commit.author.timestamp
    })

    for (let time = now - seconds; time += SECONDS_PER_DAY; time <= now) {
      let startTime = Math.floor(time / SECONDS_PER_DAY) * SECONDS_PER_DAY;
      let endTime = startTime + SECONDS_PER_DAY;

      if (!commits.find((t) => t >= startTime && t <= endTime)) {
        console.log("Commits at " + time + " not found")
      }
    }
  } catch (error) {
    core.setFailed(error.message)
  }
})();
