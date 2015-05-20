NODE_MODULES_BIN=node_modules/.bin

build:
	$(NODE_MODULES_BIN)/tsc

test:
	rm -rf tmp/test; \
	$(NODE_MODULES_BIN)/tsc && \
	broccoli build tmp/test && \
	cp index.js tmp/test/index-tsc.js && \
	diff tmp/test/index-tsc.js tmp/test/index.js

.PHONY: test build
