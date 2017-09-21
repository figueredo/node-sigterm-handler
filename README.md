# sigterm-handler

Gracefully exit on SIGTERM or SIGINT

[![Build Status](https://travis-ci.org/octoblu/node-sigterm-handler.svg?branch=master)](https://travis-ci.org/octoblu/node-sigterm-handler)
[![Test Coverage](https://codecov.io/gh/octoblu/node-sigterm-handler/branch/master/graph/badge.svg)](https://codecov.io/gh/octoblu/node-sigterm-handler)
[![npm version](https://badge.fury.io/js/sigterm-handler.svg)](http://badge.fury.io/js/sigterm-handler)
[![Slack Status](http://community-slack.octoblu.com/badge.svg)](http://community-slack.octoblu.com)

## Installation

```bash
npm install --save sigterm-handler
```

## Usage

```javascript
const sigtermHandler = require("sigterm-handler")

sigtermHandler(() => {
  // this will get called on SIGTERM or SIGINT
  // do cleanup here
  // if async, return promises
  return Promise.resolve()
})
```
