# Hardwork Action

> An action to create a lot of commits that make you GitHub profile full of green

[Marketplace](https://github.com/marketplace/actions/xtex-hardworking-action)

## Usage

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
