import Filter = require( 'broccoli-filter' );
import typescript = require( 'typescript' );

class TypeScriptFilter extends Filter {

  constructor( inputTree: string, options = {} ) {
   
    super( inputTree,options );

  }

  extensions = [ 'ts' ]
  targetExtension = 'js'

  processString = function( string, srcFile ) {

    var typeScriptOptions: typescript.CompilerOptions = {
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

export = TypeScriptFilter;