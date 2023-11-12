const Graph = require('./index');

describe('It should be able to create a working Graph to calculate travel costs', () => {

  test('A flight can be successfully added to the graph', () => {
    const flightGraph = new Graph();

    flightGraph.addFlight('Narnia', 'Naboo', 250);

    expect( flightGraph.getVerticies()[0][0] ).toEqual('Narnia');
  });

  test('A possible trip returns the correct value', () => {
    const flightGraph = new Graph();

    const trip = ['Metroville', 'Pandora' ];

    flightGraph.addFlight('Narnia', 'Naboo', 250);
    flightGraph.addFlight('Metroville', 'Pandora', 82);

    expect( flightGraph.dijkstra( trip ) ).toEqual( 82 );

  });

  test('An impossible trip returns false', () => {
    const flightGraph = new Graph();

    const trip = ['Metroville', 'Naboo' ];

    flightGraph.addFlight('Narnia', 'Naboo', 250);
    flightGraph.addFlight('Metroville', 'Pandora', 82);

    expect( flightGraph.dijkstra( trip ) ).toEqual( false );

  });

});
