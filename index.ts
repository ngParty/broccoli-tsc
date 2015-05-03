/// <reference path='typings/tsd.d.ts' />

//TODO: add d.ts definition
var Filter = require( 'broccoli-filter' )
var typescript = require( 'typescript' )

class TypeScriptFilter extends Filter {

  constructor( inputTree: string, options: any = {} ) {

    // Ensure instance of object on regular call
    if ( !(this instanceof TypeScriptFilter) ) {

      return new TypeScriptFilter(inputTree, options)

    }

    // TODO: Fix super lint error
    super( inputTree, options )

  }

  extensions = [ 'ts' ]
  targetExtension = 'js'

  processString = function( string, srcFile ) {

    var typeScriptOptions = {
      module: typescript.ModuleKind.CommonJS
    };

    try {

      return typescript.transpile( string, typeScriptOptions )

    } catch (err) {

      // TODO: implement error reporting
      throw err

    }
  }

}


module.exports = TypeScriptFilter
