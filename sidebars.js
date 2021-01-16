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
      label: 'Cloud',
      items: [
        {
          AWS:['snippets/cloud/aws/aws1'],
          GOOGLE:['snippets/cloud/google/google1'],
          AZURE:['snippets/cloud/azure/azure1'],
          CI:[
            'snippets/cloud/ci/docker',
            'snippets/cloud/ci/jenkins',
          ],
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
        'snippets/toolos/gits',
        'snippets/toolos/ubuntu',
      ]
    },
    'snippets/generic',
  ]
};
