/* eslint-env node */
module.exports = {
  scenarios: [
    {
      name: 'ember-1.13',
      bower: {
        dependencies: {
          'ember': '~1.13.0'
        },
        resolutions: {
          'ember': '~1.13.0'
        }
      }
    },
    {
      name: 'ember-lts-2.4',
      bower: {
        dependencies: {
          'ember': 'components/ember#lts-2-4'
        },
        resolutions: {
          'ember': 'lts-2-4'
        }
      }
    },
    {
      name: 'ember-release',
      bower: {
        dependencies: {
          'ember': 'components/ember#release'
        },
        resolutions: {
          'ember': 'release'
        }
      }
    },
    {
      name: 'ember-beta',
      bower: {
        dependencies: {
          'ember': 'components/ember#beta'
        },
        resolutions: {
          'ember': 'beta'
        }
      }
    },
    {
      name: 'ember-canary',
      bower: {
        dependencies: {
          'ember': 'components/ember#canary'
        },
        resolutions: {
          'ember': 'canary'
        }
      }
    },
    {
      name: 'node-tests',
      command: 'yarn run test:node',
      npm: {
        devDependencies: {}
      }
    },
    {
      name: 'fastboot-tests',
      command: 'ember fastboot:test',
      npm: {
        devDependencies: {}
      }
    }
  ]
};
