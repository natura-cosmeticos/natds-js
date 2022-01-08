---
name: Feature Request
title: 'Feature: '
labels: 'feature'
body:
  - type: markdown
    attributes:
      value: |
        Thanks for taking the time to fill out this feature request!
  - type: input
    id: contact
    attributes:
      label: Contact Details
      description: How can we get in touch with you if we need more info?
      placeholder: ex. email@example.com
    validations:
      required: false
  - type: textarea
    id: what-do-you-want
    attributes:
      label: What do you want?
      description: Also tell us, what did you want to require?
    validations:
      required: true
---
