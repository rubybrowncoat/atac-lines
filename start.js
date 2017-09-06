#!/usr/bin/nodejs
'use strict';

require('dotenv').config({path: __dirname + '/.env'});

const atac = require('NodeAtacAPI');

const atacKey = process.env.ATAC_API_KEY;
const parallelQueries = process.env.PARALLEL_QUERIES;

const lines = [
    {
        el: 'Autobus ATAC',
        lines: [
            //Day
            'H',
            '01',
            '03',
            '04',
            '04B',
            '05',
            '05B',
            '06',
            '07',
            '09',
            '012',
            '014',
            '015',
            '016',
            '016F',
            '020',
            '021',
            '029',
            '033',
            '043',
            '046',
            '047',
            '052',
            '058',
            '058F',
            '061',
            '062',
            '063',
            '064',
            '065',
            '068',
            '070',
            '071',
            '075',
            '087',
            '089',
            '16',
            '23',
            '31',
            '32',
            '33',
            '34',
            '38',
            '44',
            '44F',
            '46',
            '46B',
            '49',
            '50',
            '52',
            '53',
            '61',
            '62',
            '63',
            '64',
            '66',
            '69',
            '70',
            '71',
            '75',
            '81',
            '82',
            '83',
            '85',
            '86',
            '87',
            '88',
            '89',
            '92',
            '93',
            '98',
            '98F',
            '105',
            '106',
            '107',
            '111',
            '111F',
            '113',
            '115',
            '117',
            '118',
            '128',
            '160',
            '163',
            '168',
            '170',
            '188',
            '200',
            '201',
            '211',
            '211F',
            '223',
            '228',
            '230',
            '246',
            '246P',
            '247',
            '20',
            '301',
            '303',
            '309',
            '311',
            '313',
            '319',
            '334',
            '336',
            '338',
            '341',
            '350',
            '351',
            '360',
            '409',
            '412',
            '435',
            '443',
            '446',
            '448',
            '451',
            '490',
            '492',
            '495',
            '500',
            '501',
            '504',
            '506',
            '507',
            '508',
            '509',
            '515',
            '541',
            '542',
            '544',
            '545',
            '551',
            '556',
            '556F',
            '558',
            '559',
            '590',
            '628',
            '649',
            '654',
            '662',
            '664',
            '669',
            '670',
            '671',
            '673',
            '700',
            '701L',
            '702',
            '703',
            '707',
            '708',
            '709',
            '714',
            '715',
            '716',
            '717',
            '719',
            '722',
            '723',
            '731',
            '762',
            '765',
            '766',
            '769',
            '772',
            '773',
            '774',
            '776',
            '779',
            '780',
            '781',
            '785',
            '786',
            '786F',
            '788',
            '791',
            '792',
            '797',
            '870',
            '871',
            '881',
            '904',
            '905',
            '906',
            '910',
            '911',
            '913',
            '916',
            '916F',
            '980',
            '981',
            '983',
            '990',
            //Express
            '20',
            '30',
            '40',
            '51',
            '80',
            '120F',
            '130F',
            '150F',
            '180F',
            '190F',
            //Night
            'N1',
            'N2',
            'N3',
            'N4',
            'N5',
            'N6',
            'N7',
            'N8',
            'N9',
            'N10',
            'N11',
            'N12',
            'N13',
            'N14',
            'N15',
            'N16',
            'N17',
            'N18',
            'N19',
            'N20',
            'N21',
            'N22',
            'N23',
            'N24',
            'N25',
            'N26',
            'N27',
            'N28',
            //Cemeteries
            'C2',
            'C3',
            'C4',
            'C5',
            'C7',
            'C9',
            'C11',
            'C13',
            'C26',
            //Deposits
            'G02',
            'G20',
            'G03',
            'G30',
            'G04',
            'G40',
            'G05',
            'G50',
            'L04',
            'L40',
            'L08',
            'L80',
        ],
    },
    {
        label: 'Autobus RomaTPL',
        lines: [
            '08',
            '011',
            '013',
            '013D',
            '017',
            '018',
            '022',
            '023',
            '024',
            '025',
            '027',
            '028',
            '030',
            '031',
            '032',
            '035',
            '036',
            '037',
            '039',
            '040',
            '040F',
            '041',
            '041F',
            '042',
            '044',
            '048',
            '049',
            '051',
            '053',
            '054',
            '055',
            '056',
            '057',
            '059',
            '066',
            '078',
            '086',
            '088',
            '088F',
            '135',
            '146',
            '213',
            '218',
            '226',
            '235',
            '314',
            '339',
            '340',
            '343',
            '344',
            '349',
            '404',
            '437',
            '441',
            '444',
            '445',
            '447',
            '502',
            '503',
            '505',
            '543',
            '546',
            '548',
            '552',
            '555',
            '557',
            '657',
            '660',
            '663',
            '665',
            '701',
            '702L',
            '702',
            '703L',
            '710',
            '711',
            '720',
            '721',
            '763',
            '764',
            '767',
            '771',
            '775',
            '777',
            '778',
            '787',
            '789',
            '808',
            '889',
            '892',
            '907',
            '908',
            '912',
            '982',
            '985',
            '992',
            '993',
            '998',
            '999',
            //Cemeteries
            'C1',
            'C6',
            'C8',
            'C19',
        ],
    },
    {
        label: 'Tram',
        lines: [
            '2',
            '3',
            '5',
            '8',
            '14',
            '19',
        ],
    },
    {
        label: 'Filobus',
        lines: [
            '60',
            '90',
        ],
    },
];

/**
 * Obtaines the routes list for a bus line
 * @param {string} line Bus line
 */
let getRoutes = (line) => {
    return new Promise(resolve => {
        atac.getRoutes(atacKey, line, (error, response) => {
            if (error) {
                //console.log(error);
            }
            else {
                let ids = response.risposta.percorsi.map(percorso => {
                    return percorso.id_percorso;
                });
                resolve(ids);
            }
        });
    });
};

/**
 * Obtains a list the vehicles for a route
 * @param {string} route 
 */
let getVehicles = (route) => {
    return new Promise(resolve => {
        atac.getRoute(atacKey, route, (error, response) => {
            if (error) {
                console.log(error);
            }
            else {
                let buses = response.risposta.fermate.filter(fermata => {
                    return !!(fermata.veicolo);
                }).map(fermata => {
                    return fermata.veicolo;
                });
                resolve(buses);
            }
        })
    })
};

/**
 * Fills the routes array
 * @param {*} group 
 * @param {integer} start 
 * @param {integer} length 
 */
let routesFill = (group, start, length) => {
    return new Promise(resolve => {
        let end = (start + length <= group.lines.length) ? (start + length) : group.lines.length;
        Promise.all(group.lines.slice(start, end).map(getRoutes)).then(data => {
            let routes = data.reduce((out, el) => out.concat(el), []);
            group.routes = (group.routes ? group.routes.concat(routes) : routes);

            if (end !== group.lines.length) {
                routesFill(group, (start + length), length);
            }
            else {
                resolve(group);
            }
        }).catch(error => console.log(error));
    });
};

/**
 * Fills the buses array
 * @param {*} group 
 * @param {integer} start 
 * @param {integer} length 
 */
let busesFill = (group, start, length) => {
    return new Promise(resolve => {
        let end = (start + length <= group.routes.length) ? (start + length) : group.routes.length;

        Promise.all(group.routes.slice(start, end).map(getVehicles)).then(data => {
            let vehicles = data.reduce((out, el) => out.concat(el), []);
            group.vehicles = (group.vehicles ? group.vehicles.concat(vehicles) : vehicles);

            if (end !== group.routes.length) {
                busesFill(group, (start + length), length);
            }
            else {
                resolve(group);
            }
        }).catch(error => console.log(error));
    })
};

/**
 * Main program
 */
lines.forEach(group => {
    routesFill(group, 0, parallelQueries).then(data => {
        busesFill(data, 0, Math.ceil(parallelQueries / 4)).then(data => {
            console.log(data);
        }).catch(error => console.log(error));
    }).catch(error => console.log(error));
});