# Merbie

Monster and I playing with angular and using the data from Top Gear pages on wikipedia

Deployed here [Merbie](https://merbie.herokuapp.com/)

### Where did we get data from

* [Star in a Reasonably Priced Car](http://en.wikipedia.org/wiki/Top_Gear_test_track)
* [List of Top Gear test track Power Lap Times](http://en.wikipedia.org/wiki/List_of_Top_Gear_test_track_Power_Lap_Times)

# More to come

Codeship build


# Reference

* [ExpressJS](http://expressjs.com/)

* [Jade](http://jade-lang.com/)

* [AngularJS](https://angularjs.org/)

* [Bootstrap](http://getbootstrap.com/)

* [Bower](http://bower.io/)

* [Karma](http://karma-runner.github.io/0.12/index.html)

* [Jasmine](http://jasmine.github.io/2.2/introduction.html)

* [Mocha](http://mochajs.org/)

* [Chai](http://chaijs.com/api/bdd/)


# Testing

I had wated to set up some tests for the express side of things in mocha and kamra-jasmine for the angular part but I was
unable to get them running together so the next best thing is running them automatically together.

## Setting up Karma for Continuous Testing

 Thats kinda what karmas thing is so just run

```
karma start
```

## Setting up mochajs for Continuous Testing

I created a make file to run our tests then added that to the npm scripts section.

found this [blog post](https://coderwall.com/p/fdcsyq/auto-run-tests-in-node-js) to use supervisor.
So I want ahead and added supervisor to our package.json and added this in the "scripts" section.

```
"autotest": "./node_modules/.bin/supervisor -q -n exit -x npm test",
```


so now to have it watch and run all the time just run:

```
npm run autotest
```


### Setting up Growl notifications for mocha

create a gemset and an rvmrc(if you want to have rvm change to your gemset automatically)

```
rvm 2.1.1@merbie --create --rvmrc
gem install terminal-notifier
```

install the growl package for npm

```
npm install growl
```

we can add a Gemfile later if we end up using more than one gem



