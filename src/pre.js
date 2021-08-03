const core = require( '@actions/core' );

try
{
  core.exportVariable( `INPUT_PRE_VALUE`, '5' );
}
catch( error )
{
  core.setFailed( error.message );
}

