const { version } = require('../../package.json')

class Utils {
    help(args) {
        const menus = {
            main: `
        zed [command] <options>
    
        request ............ send http request using rpn
        mqtt ............... mqtt
        version ............ show package version
        help ............... show help menu for a command
    
        --clear ............ clear log file before writting new ones
        --talk ............. Print traces`,
    
            request: `
        zed request <options>
    
        You must have an conf.yaml inside your service folder
        
        --serice, -s ...... Service where to find the options (inside lib),
        --options, -o ..... JSON file describing the request to send,
        --token, -t ....... Unique token identifier (should be declared in conf of your service)
        --fish, -f ........ Print the request result on the console`,
    
            mqtt: `
      zed mqtt <options>
    
      use mqtt npm package
  
      --serice, -s ...... Service where to find the options (inside lib),
      --operation, -o ... Operation to call: publish || subscribe (default)
      --topic, -t ....... Topic to publish/subscribe,
      --message, -m ..... Message to publish,
      --device, -d ...... Device to use (name should be the same one than for you cert/key)`
        }
        const subCmd = args._[0] === 'help'
            ? args._[1]
            : args._[0]

        console.log(menus[subCmd] || menus.main)
        process.exit(0)
    }

    version() {
        console.log(`v${version}`)
    }
}

module.exports = Utils