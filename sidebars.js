module.exports = {
  sidebar: {
    'Project': [
      'projects/hybridtestframework',
      'projects/mobiletestframework',
      'projects/cypress',
      'projects/testcafe',
      'projects/apitestautomation',
    ],
  },
  'Docs': [
    'snippets/overview',
    {
      type: 'category',
      label: 'Generic',
      items: [
        'snippets/generic/apitestsites',
        'snippets/generic/hyperv',
      ]
    },
    {
      type: 'category',
      label: 'Programming',
      items: [
        {
          GO:['snippets/programming/go/godoc1'],
          Java:['snippets/programming/java/java1'],
          React:['snippets/programming/react/react1'],
        }
      ]
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'snippets/security/sec1',
      ]
    },
    {
      type: 'category',
      label: 'CI',
      items: [
        'snippets/ci/docker',
        'snippets/ci/jenkins',
      ]
    },
    {
      type: 'category',
      label: 'Performance',
      items: [
        'snippets/performance/taurus',
      ]
    },
    {
      type: 'category',
      label: 'IDE',
      items: [
        'snippets/ide/vscode',
      ]
    },
    {
      type: 'category',
      label: 'OS & Tools',
      items: [
        'snippets/tools/git',
        'snippets/tools/ubuntu',
      ]
    },
    'snippets/generic',
  ]
};
