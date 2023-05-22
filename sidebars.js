module.exports = {
  sidebar: {
    'Project': [
      'projects/hybridtestframework',
      'projects/mobiletestframework',
      'projects/cypress',
      'projects/testcafe',
      'projects/playwrighttestframework',
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
      ],
      description: 'Generic category'
    },
    {
      type: 'category',
      label: 'Programming',
      items: [
        {
          GO:[
            'snippets/programming/go/godoc1',
            'snippets/programming/go/godoc2',
            'snippets/programming/go/godoc3'
          ],
          Java:[
            'snippets/programming/java/java1',
            'snippets/programming/java/arrays'
          ],
          React:['snippets/programming/react/react1'],
          Python:['snippets/programming/python/python1'],
        }
      ],
      description: 'Programming category',
    },
    {
      type: 'category',
      label: 'Cloud',
      items: [
        {
          AWS:[
            'snippets/cloud/aws/aws1',
            'snippets/cloud/aws/aws2',
            'snippets/cloud/aws/aws3',
            'snippets/cloud/aws/aws4',
            'snippets/cloud/aws/aws5',
            'snippets/cloud/aws/aws6',
            'snippets/cloud/aws/aws7',
            'snippets/cloud/aws/aws8',
            'snippets/cloud/aws/aws9',
            'snippets/cloud/aws/aws11',
            'snippets/cloud/aws/aws12',
            'snippets/cloud/aws/aws13',
            'snippets/cloud/aws/aws14',
          ],
          GOOGLE:[
            'snippets/cloud/google/google1',
            'snippets/cloud/google/gke',
            'snippets/cloud/google/cr',
            'snippets/cloud/google/cf',
            'snippets/cloud/google/appengine',
            'snippets/cloud/google/storage',
            'snippets/cloud/google/casestudies',
          ],
          CI:[
            'snippets/cloud/ci/docker',
            'snippets/cloud/ci/kubernetes',
            'snippets/cloud/ci/jenkins',
          ],
          description: 'Cloud category',
        }
      ]
    },
    {
      type: 'category',
      label: 'Security',
      items: [
        'snippets/security/sec1',
      ],
      description: 'Security category',
    },
    {
      type: 'category',
      label: 'Performance',
      items: [
        'snippets/performance/taurus',
        // 'snippets/performance/k6',
        // 'snippets/performance/ghz',
        // 'snippets/performance/gatling',
        // 'snippets/performance/locust',
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
        'snippets/toolos/ubuntu',
        'snippets/toolos/bash',
      ]
    },
    'snippets/generic',
  ]
};
