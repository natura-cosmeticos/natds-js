# Via Command Line

```sh
npm install -g netlify-cli

netlify login
netlify init -m
```

Follow the instructions as well as the example below:
![image](./.assets/netlify/step1_cli.png)

- In `Give this Netlify SSH public key access to your repository`, add deploy key in repository (https://github.com/natura-cosmeticos/natds/settings/keys)
- In `Configure the following webhook for your repository`, add webhook in repository (https://github.com/natura-cosmeticos/natds/settings/hooks)

# Via Netlify UI (admin)

## Follow the below steps reported in the images:

**First change to git base for new site**
![image](./.assets/netlify/step1.png)
![image](./.assets/netlify/step2.png)

**Change to repository `natura-cosmeticos/natds`**
![image](./.assets/netlify/step3.png)

**Change milestone branch to deploy (e.g. `feature/setup`). Add command to build and change publish directory (exactly `yarn build` and `./packages/docs/dist`)**
![image](./.assets/netlify/step4.png)

**After changing the published name for milestone, starting with `natds` (e.g. `natds-v0-2-0-alpha`)**
![image](./.assets/netlify/step5.png)
![image](./.assets/netlify/step6.png)
![image](./.assets/netlify/step7.png)

**In conclusion, you will be able to access the new instance of stotybook at the link shown in the overview**
![image](./.assets/netlify/step8.png)

