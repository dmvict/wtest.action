const core = require( '@actions/core' );

try
{
  // let i = core.getInput( 'singleline' );
  // console.log( i );
  // let m = core.getMultilineInput( 'multiline' );
  // console.log( m );
  // let b = core.getBooleanInput( 'true_v' );
  // console.log( b );
  core.setOutput('string', 'foo');
  throw Error( 'a default error' );
}
catch( error )
{
  core.setFailed( error.message );
}
