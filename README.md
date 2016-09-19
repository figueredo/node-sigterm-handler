# node-sigterm-handler

Gracefuly exit on SIGTERM

[![Build Status](https://travis-ci.org/octoblu/.svg?branch=master)](https://travis-ci.org/octoblu/)
[![Test Coverage](https://codecov.io/gh/octoblu//branch/master/graph/badge.svg)](https://codecov.io/gh/octoblu/)
[![npm version](https://badge.fury.io/js/.svg)](http://badge.fury.io/js/)
[![Slack Status](http://community-slack.octoblu.com/badge.svg)](http://community-slack.octoblu.com)

## Installation

```bash
npm install --save sigterm-handler
```

## Usage

```coffee
SigtermHandler = require 'sigterm-handler'

sigtermHandler = new SigtermHandler()

# a registered handler will be called when a SIGTERM is triggered
# multiple handlers can be registered
# will process.exit 1 if callback is called with an error
# will process.exit 0 if callback is called with no error
# will timeout after 20 seconds, timeouts are exited with 0
sigtermHandler.register (callback) =>
  return callback error if # some error case
  callback null
```
