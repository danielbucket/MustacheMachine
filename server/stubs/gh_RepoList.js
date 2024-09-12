const user = 'danielbucket'

const repoList = [
  {
    user: user,
    repo: 'MustacheMachine',
  },
  {
    user: user,
    repo: 'SpinConnect',
  },
  {
    user: user,
    repo: 'PoopMachine',
  },
]

const ghProjectsCommitsResponseStub =
  [
    {
      "name": "branch_5",
      "commit": {
        "sha": "c5b97d5ae6c19d5c5df71a34c7fbeeda2479ccbc",
        "url": "https://api.github.com/repos/octocat/Hello-World/commits/c5b97d5ae6c19d5c5df71a34c7fbeeda2479ccbc"
      },
      "protected": false
    },
  ]

module.exports = {
  repoList,
}