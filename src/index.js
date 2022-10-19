const core = require( '@actions/core' );

try
{
  const multiline = core.getMultilineInput( 'multiline' );
  if( multiline.length <= 1 )
  throw Error( 'Expected multiline input with several lines.' );
  const string = core.getInput( 'string' );
  if( string !== '|' )
  throw Error( 'Expected string with value `|`.' );
}
catch( error )
{
  core.setFailed( error.message );
}
