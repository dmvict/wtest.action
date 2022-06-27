const core = require( '@actions/core' );

try
{
  const matrix = core.getInput( 'matrix' );
  console.log( matrix );
  console.log( typeof matrix );
  const job = core.getInput( 'job' );
  console.log( typeof job );
  const github = core.getInput( 'github' );
  console.log( github );
  console.log( typeof github );
}
catch( error )
{
  core.setFailed( error.message );
}
