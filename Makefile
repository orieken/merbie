test:
	@NODE_ENV=test ./node_modules/.bin/mocha tests --reporter spec --growl


.PHONY: test