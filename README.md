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
```
