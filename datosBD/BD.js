
var infoMantenimiento = {
    'equipo' : [
        {
            'id': 1,
            'nombre' : 'lumity',
            'descripcion' : 'equipo reparado',
            'serial': 183712,
            'fechaInicialMarcha': '2010-11-12',
            'fechaUltimaMantenimiento': '2015-01-20',
            'fechaUltimaMarcha': '2022-10-10',
            'marca' : 'cocacola'
        },
        {
            'id': 2,
            'nombre' : 'chinito',
            'descripcion' : 'limpieza',
            'serial': 576433,
            'fechaInicialMarcha': '2020-09-22',
            'fechaUltimaMantenimiento': '2021-06-28',
            'fechaUltimaMarcha': '2022-02-23',
            'marca' : 'apple'
        },
        {
            'id': 3,
            'nombre' : 'galko',
            'descripcion' : 'buenvizco platino',
            'serial': 137487,
            'fechaInicialMarcha': '2010-04-10',
            'fechaUltimaMantenimiento': '2022-11-29',
            'fechaUltimaMarcha': '2023-01-01',
            'marca' : 'casimiro'
        },
        {
            'id': 4,
            'nombre' : 'oreo',
            'descripcion' : 'limpieza',
            'serial': 858584,
            'fechaInicialMarcha': '2000-02-12',
            'fechaUltimaMantenimiento': '2002-06-30',
            'fechaUltimaMarcha': '2018-05-31',
            'marca' : 'apple'
        },
        {
            'id': 5,
            'nombre' : 'lumity',
            'descripcion' : 'reparado en baterias',
            'serial': 924274,
            'fechaInicialMarcha': '2008-07-26',
            'fechaUltimaMantenimiento': '2011-07-10',
            'fechaUltimaMarcha': '2020-01-20',
            'marca' : 'casimiro'
        }
    ],
    'trabajo' : [
        {
            'id': 1,
            'estatusMantenimiento' : 'terminado',
            'fechaPlanificadaMantenimiento': '2010-07-10',
            'fechaInicialMantenimiento': '2010-07-16',
            'fechaFinalMantenimiento': '2012-12-15',
            'idEquipo' : 3
        },
        {
            'id': 2,
            'estatusMantenimiento' : 'enMarcha',
            'fechaPlanificadaMantenimiento': '2021-08-09',
            'fechaInicialMantenimiento': '2022-10-09',
            'fechaFinalMantenimiento': '2022-11-29',
            'idEquipo' : 3
        },
        {
            'id': 3,
            'estatusMantenimiento' : 'porHacer',
            'fechaPlanificadaMantenimiento': '2011-02-14',
            'fechaInicialMantenimiento': '2011-12-05',
            'fechaFinalMantenimiento': '2015-01-20',
            'idEquipo' : 1
        },
        {
            'id': 4,
            'estatusMantenimiento' : 'porHacer',
            'fechaPlanificadaMantenimiento': '2000-01-10',
            'fechaInicialMantenimiento': '2000-05-04',
            'fechaFinalMantenimiento': '2002-06-30',
            'idEquipo' : 4
        },
        {
            'id': 5,
            'estatusMantenimiento' : 'terminado',
            'fechaPlanificadaMantenimiento': '2018-10-10',
            'fechaInicialMantenimiento': '2018-10-24',
            'fechaFinalMantenimiento': '2021-06-28',
            'idEquipo' : 2
        },
        {
            'id': 6,
            'estatusMantenimiento' : 'enMarcha',
            'fechaPlanificadaMantenimiento': '2009-02-16',
            'fechaInicialMantenimiento': '2009-03-16',
            'fechaFinalMantenimiento': '2011-07-10',
            'idEquipo' : 5
        }
    ]
};

module.exports = infoMantenimiento;
