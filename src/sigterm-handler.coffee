_     = require 'lodash'
async = require 'async'

class SigtermHandler
  constructor: ({ @process, @logFn, @timeout }={}) ->
    @process ?= process
    @logFn   ?= console.error
    @timeout ?= 20 * 1000
    @handlers = []
    @_listen()

  _listen: =>
    @process.on 'SIGTERM', @exit

  register: (fn) =>
    @handlers.push fn

  exit: =>
    exitFn = async.timeout @_exit, @timeout
    exitFn @_die

  _exit: (done) =>
    async.each @handlers, @_handleHandler, done

  _die: (error) =>
    return @process.exit 0 if error?.code == 'ETIMEDOUT'
    @logFn error.stack if error?.stack?
    @logFn error if error? && !error?.stack?
    return @process.exit 1 if error?
    @process.exit 0

  _handleHandler: (fn, done) =>
    return done null unless _.isFunction fn
    fn done

module.exports = SigtermHandler
