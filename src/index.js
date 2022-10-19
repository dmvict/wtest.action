const core = require( '@actions/core' );

try
{
  const matrix = core.getInput( 'matrix' );
  const matrixParsed = JSON.parse( matrix );
  const matrixKeys = Object.keys( matrixParsed );
  if( matrixKeys.length !== 1 && matrixKeys[ 0 ] !== 'os' )
  throw Error( 'Unexpected value of matrix context' );

  const matrix_os = core.getInput( 'matrix_os' );
  if( matrixParsed.os !== matrix_os )
  throw Error( 'Matrix context and matrix field `os` has different content' );
  if( ![ 'ubuntu-latest', 'windows-latest', 'macos-latest' ].includes( matrix_os ) )
  throw Error( 'Unexpected value in `matrix.os`' );
}
catch( error )
{
  core.setFailed( error.message );
}
