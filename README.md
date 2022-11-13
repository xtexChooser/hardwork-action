# Hardwork Action

> An action to create a lot of commits that make your GitHub profile full of green

![GitHub Workflow Status](https://img.shields.io/github/workflow/status/xtexChooser/hardwork-action/Build?style=flat-square) ![GitHub all releases](https://img.shields.io/github/downloads/xtexChooser/hardwork-action/total?style=flat-square) ![GitHub issues](https://img.shields.io/github/issues/xtexChooser/hardwork-action?style=flat-square) ![GitHub pull requests](https://img.shields.io/github/issues-pr/xtexChooser/hardwork-action?style=flat-square) ![GitHub](https://img.shields.io/github/license/xtexChooser/hardwork-action?style=flat-square) ![GitHub forks](https://img.shields.io/github/forks/xtexChooser/hardwork-action?style=flat-square) ![GitHub Repo stars](https://img.shields.io/github/stars/xtexChooser/hardwork-action?style=flat-square) ![GitHub watchers](https://img.shields.io/github/watchers/xtexChooser/hardwork-action?style=flat-square) ![GitHub release](https://img.shields.io/github/v/release/xtexChooser/hardwork-action?include_prereleases&style=flat-square)

[Marketplace](https://github.com/marketplace/actions/xtex-hardworking-action)

To get start quickly, see this [template](https://github.com/xtexChooser/hardwork-template).

## Usage

![GitHub release](https://img.shields.io/github/v/release/xtexChooser/hardwork-action?include_prereleases&style=flat-square)

```yaml
- uses: actions/checkout@v2
- uses: xtexChooser/hardwork-action@<VERSION>
  with:
    name: Your Username
    email: Your mail address
    dir: ./.git # Optional, the git directory to work with
    message: Work today # Optional, the commit message
    days: 31 # Optional, defaults to 31, how many days in the past the commit was created for (if there are no existing commits)
```

Then you can use your own way to push these commits to your repository.
