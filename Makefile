build:
	tsc; echo "done"

test:
	rm -rf tmp/test; \
	tsc; \
	broccoli build tmp/test && \
	cp index.js tmp/test/index-tsc.js && \
	diff tmp/test/index-tsc.js tmp/test/index.js

.PHONY: test build
