import { defineConfig, devices } from '@playwright/test';
import type { TestOptions } from './test-option';

require('dotenv').config();

export default defineConfig<TestOptions>({

  timeout: 40000,
  //globalTimeout: 60000,
  expect: {
    timeout: 2000
  },
  testDir: './tests',
  retries: 1,
  reporter: [
    ['json', { outputFile: 'test-results/jsonReport.json' }],
    ['junit', { outputFile: 'test-results/junitReport.xml' }],
    //['allure-playwright'],
    ['html']
  ],

  use: {
    globalsQaURL: 'https://www.globalsqa.com/demo-site/draganddrop/',
    baseURL: process.env.DEV == '1' ? 'http://localhost:4201/'
      : process.env.UAT == '1' ? 'http://localhost:4202/'
        : 'http://localhost:4200/',



    trace: 'on-first-retry',
    actionTimeout: 20000,
    navigationTimeout: 25000,
    video: 'off'
  },

  projects: [
    {
      // name: 'dev',
      // use: {
      //   ...devices['Desktop Chrome'],
      //   baseURL: 'http://localhost:4200/'
      // },

    },
    {
      // name: 'uat',
      // use: {
      //   baseURL: 'http://localhost:4200/'

      // },

    },
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: 'http://localhost:4200/'
      },

    },
    {
      name: 'pageObjectFullScreen',
      testMatch: 'usePageObject.spec.ts',
      use: {

        viewport: { width: 1920, height: 1080 }
      }
    },
    {
      name: 'mobile',
      testMatch: 'testMobile.spec.ts',
      use: {
        ...devices['iPhone 13']
      }
    }

  ],
  webServer: {
    command: 'npm run start',
    url: 'http://localhost:4200/'
  }

});
