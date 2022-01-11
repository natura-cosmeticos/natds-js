---
name: Bug Report
about: Create a report to help us improve
title: 'Bug: '
labels: 'bug'
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this bug report!
  - type: input
    id: contact
    attributes:
      label: Contact Details
      description: How can we get in touch with you if we need more info?
      placeholder: ex. email@example.com
    validations:
      required: false
  - type: textarea
    id: what-happened
    attributes:
      label: What happened?
      description: Also tell us, what did you expect to happen?
      placeholder: Tell us what you see!
      value: "A bug happened!"
    validations:
      required: true
  - type: input
    id: version
    attributes:
      label: Version
      description: What version of our library are you running?
    validations:
      required: true
  - type: textarea
    id: browsers
    attributes:
      label: What browsers (and their respective version) are you seeing the problem on?
      description: Firefox, Chrome, Safari, Microsoft Edge...
      validations:
        required: true
  - type: textarea
    id: logs
    attributes:
      label: Relevant log output
      description: Please copy and paste any relevant log output. This will be automatically formatted into code, so no need for backticks.
      render: shell
