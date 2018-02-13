install: install-deps

install-deps:
	npm install

run:
	npm run babel-node src/bin/brain-games.js
lint:
	npm run eslint .

test:
	npm test
