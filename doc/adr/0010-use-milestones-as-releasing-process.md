# 10. Use milestones as releasing process

Date: 2019-10-29

## Status

Accepted

## Context

The project needs consistency on the delivery process and to keep expectations of all affected teams on par with the reality of when features are coming out.

## Decision

We will use milestones as a guideline for defining what will be delivered on each of the production releases. The milestones must comply with the following principles:

- Once initiated the development of the milestone, its scope complexity must not be incremented;
- The team responsible for a milestone isn't static and can be altered at any given moment during the milestone;
- The UX team will participate in the priorization of the tasks that will compose the milestone;
- In the case of more than one running milestone, the team responsible for the additional milestones will take responsibility in creating the distinct storybook instances needed for their respective milestones;
- One component cannot be a part of more than one running milestone;
- The alpha releases will take place after the delivery of a component;
- The internal scope of the milestone will be measured in tasks on the Natura JIRA;
- Milestones will be named with [Semantic Versioning](https://semver.org/) and every milestone must bump at least one MINOR version;
- Milestones will be mapped with release versions on the Natura JIRA;
- The milestone will only be complete when all of the teams of that milestone are in agreement with the delivery;
- At the end of a milestone, a stable release will be launched.

## Consequences

The teams of the project will need to comply with the new delivery process, meaning that if a new urgent demand arives in the middle of a milestone, it needs to be discussed thoroughly in order to change the running milestone.
