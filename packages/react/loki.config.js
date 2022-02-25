module.exports = {
  configurations: {
    'chrome.laptop': {
      target: 'chrome.app',
      width: 1366,
      height: 768
    }
  },
  fileNameFormatter: ({ kind, story }) => `${kind}_${story}`.toLowerCase()
}
