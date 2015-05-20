import Filter = require( 'broccoli-filter' );
import typescript = require( 'typescript' );

class TypeScriptFilter extends Filter {

  constructor( inputTree: string, options = {} ) {

    super( inputTree,options );

  }

  extensions = [ 'ts' ]
  targetExtension = 'js'

  processString = function( fileContent, srcFile ) {

    const configFileName = typescript.findConfigFile( srcFile )
    const configOptions = typescript.readConfigFile( configFileName );
    const parsedConfigOptions = typescript.parseConfigFile( configOptions );

    try {

      return typescript.transpile( fileContent, parsedConfigOptions.options )

    } catch (err) {

      // TODO: implement error reporting
      throw err

    }
  }

}

export = TypeScriptFilter;
