module.exports = {
  ci: {
    collect: {
      url: ["http://localhost:3001"],
      numberOfRuns: 3,
      startServerCommand: "npm run start:qa",
      startServerReadyPattern: "started server on 0.0.0.0:3001",
      settings: {
        preset: "desktop",
        hostname: "127.0.0.1",
        chromeFlags: "--headless --no-sandbox --disable-extensions --disable-dev-shm-usage",
      }
    },

    upload: {
      target: 'temporary-public-storage',
    },

    asserts: {
      preset: 'lighthouse:recommended',
    }
  },
};