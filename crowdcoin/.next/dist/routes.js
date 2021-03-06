'use strict';

var routes = require('next-routes')();

// routes
//   .add('/campaigns/new', '/campaigns/new')
//   .add('/campaigns/:address', '/campaigns/show')
//   .add('/campaigns/:address/requests', '/campaigns/requests/index')
//   .add('/campaigns/:address/requests/new', '/campaigns/requests/new')  ;

routes.add('/campaigns/new', '/campaigns/new').add('/campaigns/:address', '/campaigns/show').add('/campaigns/:address/requests', '/campaigns/requests/index').add('/campaigns/:address/requests/new', '/campaigns/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVFLE9BQ0MsQUFERCxJQUNLLEFBREwsa0JBQ3VCLEFBRHZCLGtCQUVDLEFBRkQsSUFFSyxBQUZMLHVCQUU0QixBQUY1QixtQkFHQyxBQUhELElBR0ssQUFITCxnQ0FHcUMsQUFIckMsNkJBSUMsQUFKRCxJQUlLLEFBSkwsb0NBSXlDLEFBSnpDOztBQU1GLE9BQU8sQUFBUCxVQUFpQixBQUFqQiIsImZpbGUiOiJyb3V0ZXMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZ25vY2svZXRocHJvamVjdHMvY3Jvd2Rjb2luIn0=