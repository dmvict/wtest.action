const core = require( '@actions/core' );

try
{
  let i = core.getInput( 'singleline' );
  console.log( i );
  let m = core.getMultilineInput( 'multiline' );
  console.log( m );
  let b = core.getBooleanInput( 'true_v' );
  console.log( b );
}
catch( error )
{
  core.setFailed( error.message );
}
