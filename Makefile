install: install-deps

install-deps:
	npm install

run:
	npm run babel-node src/bin/even-games.js

lint:
	npm run eslint .

test:
	npm test

build:
	rm -rf dist
	npm run build

publish:
	npm publish

git:
	git c -a
	git push
