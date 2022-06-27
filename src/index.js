const core = require( '@actions/core' );

try
{
  const matrix = core.getInput( 'matrix' );
  console.log( matrix );
}
catch( error )
{
  core.setFailed( error.message );
}
