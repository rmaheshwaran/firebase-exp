# sample

> to testoutfirebase authentication

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

```
require "spaceship"
Spaceship::Tunes.login("dfs","dff")
teams=Spaceship::Tunes.client.teams
teams.each do |team|
  Spaceship::Tunes.client.team_id = team["contentProvider"]["contentProviderId"]
  name = team["contentProvider"]["name"]
  messages = Spaceship::Tunes.client.fetch_program_license_agreement_messages
  agreement_message = "Agreed"
  messages.each do |message|
      if message.include? "Program License Agreement"
         agreement_message = message;
         status = "Pending"
      end
  end
  puts "#{name} #{agreement_message}"
end

Advisor Group, Inc. <b>The updated Apple Developer Program License Agreement needs to be reviewed.</b><br />In order to update your existing apps and submit new apps to the App Store, the user with the Legal role (Team Agent) must review and accept the updated agreement in their <a href="http://developer.apple.com/membercenter/index.action">account on the developer website</a>.<br />
BMO Harris Bank National Association Agreed
BNY Mellon Technology Private Limited <b>The updated Apple Developer Program License Agreement needs to be reviewed.</b><br />In order to update your existing apps and submit new apps to the App Store, the user with the Legal role (Team Agent) must review and accept the updated agreement in their <a href="http://developer.apple.com/membercenter/index.action">account on the developer website</a>.<br />
Banco Do Brasil Securities LLC Agreed
Hefren Tillotson Inc <b>The updated Apple Developer Program License Agreement needs to be reviewed.</b><br />In order to update your existing apps and submit new apps to the App Store, the user with the Legal role (Team Agent) must review and accept the updated agreement in their <a href="http://developer.apple.com/membercenter/index.action">account on the developer website</a>.<br />
Pershing, LLC Agreed
Seven Post Investment Office LP Agreed
Snowden Account Service LLC Agreed
The Bank of New York Mellon Corporation (Enterprise) - 89F82UV4Q3 Agreed
Watani Investment Company K.S.C.C <b>The updated Apple Developer Program License Agreement needs to be reviewed.</b><br />In order to update your existing apps and submit new apps to the App Store, the user with the Legal role (Team Agent) must review and accept the updated agreement in their <a href="http://developer.apple.com/membercenter/index.action">account on the developer website</a>.<br />
```
