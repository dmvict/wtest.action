const core = require( '@actions/core' );

try
{
  const matrix = core.getInput( 'matrix' );
  const parsed = JSON.parse( matrix );
  console.log( matrix );
  console.log( parsed );
}
catch( error )
{
  core.setFailed( error.message );
}
