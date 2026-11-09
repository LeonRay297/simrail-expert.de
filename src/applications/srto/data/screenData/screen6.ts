import { ScreenData } from "../../types/mapdata-types";

/* ========================================================================================================
    SCREEN 6 = KM STASZIC - STAWISKA - DANDOWKA - JULIUSZ - DABROWA GORNICZA WSCHODNIA - SLAWKOW - BUKONOW
   ======================================================================================================== */

const STATION_TRACK_COLOR = 'rgb(255, 255, 255)';
const OUT_OF_STATION_TRACK_COLOR = 'rgb(120, 120, 120)'
const NON_PLAYABLE_TRACKS_COLOR = 'rgb(60, 60, 60)'

export const SCREEN6_DATA: ScreenData.ScreenDataProps = {
    "KMB_KATOWICEMUCHWIECSTASZIC": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M150,380 SWUP100 LR15 SWUP20 LR15 SWUP20 LR15 SWUP20 LR15 SPR10 LR80 DOT5-5-4',
                    'M210,240 LR20 SPR10 LR80 DOT5-5-4',
                    'M190,260 LR40 SPR10 LR80 DOT5-5-4',
                    'M170,280 LR60 SPR10 LR80 DOT5-5-4',
                    'M170,380 SWUP40 LR15 SWUP40 LR35 SPR10 LR80 DOT5-5-4',
                    'M210,340 SWUP20 LR15 SPR10 LR80 DOT5-5-4',
                    'M190,340 LR40 SPR10 LR80 DOT5-5-4',
                    'M190,380 SWUP20 LR35 SPR10 LR80 DOT5-5-4',
                    'M130,380 LR100 SPR10 LR80 DOT5-5-4',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'StA_A',
                signalPos: { x: '130', y: '380' },
                trainPos: { x: '115', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'StA_C',
                signalPos: { x: '230', y: '220' },
                trainPos: { x: '245', y: '220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'StA_D',
                signalPos: { x: '230', y: '240' },
                trainPos: { x: '245', y: '240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'StA_E',
                signalPos: { x: '230', y: '260' },
                trainPos: { x: '245', y: '260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'StA_F',
                signalPos: { x: '230', y: '280' },
                trainPos: { x: '245', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'StA_G',
                signalPos: { x: '230', y: '300' },
                trainPos: { x: '245', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'StA_H',
                signalPos: { x: '230', y: '320' },
                trainPos: { x: '245', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'StA_J',
                signalPos: { x: '230', y: '340' },
                trainPos: { x: '245', y: '340' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'StA_K',
                signalPos: { x: '230', y: '360' },
                trainPos: { x: '245', y: '360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'StA_L',
                signalPos: { x: '230', y: '380' },
                trainPos: { x: '245', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Katowice Muchowiec Staszic',
                    prefix: 'StA',
                    pos: { x: 240, y: 170 },
                    posFlipped: { x: 240, y: 420 }
                },
            },
        ]
    },
    "KMB_KATOWICEMUCHKMB": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    'M830,420 LR30',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M830,400 LR80',
                    'M830,440 LR20 SWUP20 LR55',
                    'M870,400 CROSS',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'KMB_Y21',
                signalPos: { x: '830', y: '400' },
                trainPos: { x: '815', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KMB_Y23',
                signalPos: { x: '830', y: '420' },
                trainPos: { x: '815', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KMB_Y25',
                signalPos: { x: '830', y: '440' },
                trainPos: { x: '815', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KMB_M',
                signalPos: { x: '910', y: '400' },
                trainPos: { x: '925', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KMB_L',
                signalPos: { x: '910', y: '420' },
                trainPos: { x: '925', y: '420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Katowice Much. KMB',
                    prefix: 'KMB',
                    pos: { x: 870, y: 360 },
                    posFlipped: { x: 880, y: 470 }
                },
            },
        ]
    },
    "Ssc_STASZIC": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    'M530,700 LR60',
                    'M575,640 LR15 SWDN20',
                    'M690,680 LR15 SWDN20',
                    'M530,740 LR70 SWUP20 LR100 SPR10 LR15',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // T2
                    'M530,720 LR55 SWUP20 LR135 SWDN20 LR20',
                    'M550,720 SWUP20 LR15 SWUP40 LR175',

                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'Ssc_B',
                signalPos: { x: '530', y: '720' },
                trainPos: { x: '515', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ssc_E',
                signalPos: { x: '715', y: '720' },
                trainPos: { x: '700', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ssc_D',
                signalPos: { x: '750', y: '660' },
                trainPos: { x: '765', y: '660' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ssc_C',
                signalPos: { x: '750', y: '720' },
                trainPos: { x: '765', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Staszic',
                    prefix: 'Ssc',
                    pos: { x: 660, y: 620 },
                    posFlipped: { x: 660, y: 770 }
                },
            },
        ]
    },

    "KJw_KATOWICEJANOW": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // T2
                    'M770,1920 LR190',
                    'M810,1920 SWUP20 LR15 SWDN20 LR15 SWDN20 LR45',
                    // T4
                    'M770,1960 LR30 LINE820,1980 LR100 LINE940,1960 LR20',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // T1
                    'M730,1900 LR230',
                    // T3
                    'M730,1920 LR20 LINE770,1940 LR40 LINE830,1960 LR80 LINE930,1940 LR30',

                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'KJw_H',
                signalPos: { x: '730', y: '1900' },
                trainPos: { x: '715', y: '1900' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KJw_Z',
                signalPos: { x: '730', y: '1920' },
                trainPos: { x: '715', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KJw_A',
                signalPos: { x: '960', y: '1900' },
                trainPos: { x: '975', y: '1900' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'KJw_W',
                signalPos: { x: '960', y: '1940' },
                trainPos: { x: '975', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Katowice Janów',
                    prefix: 'KJw',
                    pos: { x: 850, y: 1860 },
                    posFlipped: { x: 850, y: 2010 }
                },
            },
        ]
    },

    "SZABELNIA_MYSLOWICE_STAWISKA": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1880,1620 LR100',
                    'M1770,1640 LR210',
                    'M1790,1700 LR95 SWUP40 LR90',

                    'M1640,1800 LR277.5 LINE1920,1795 LU130 SPU50 LU50',
                    'M1640,1820 LR297.5 LINE1940,1815 LU150 SPU50 LU50',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'L138_266',
                signalPos: { x: '1760', y: '1640' },
                trainPos: { x: '1745', y: '1640' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L138_266N',
                signalPos: { x: '1760', y: '1640' },
                trainPos: { x: '1775', y: '1640' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '266', pos: { x: 1875, y: 1640 } },
                ]
            },
        ]
    },
    "Sk_STAWISKA": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // T2
                    'M1510,1780 LR30',
                    'M1760,1780 LR20',
                    // T4
                    'M1510,1820 LR70',
                    'M1530,1820 SWUP20',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // to Myslowice
                    'M1610,1720 SWUP20 LR15 SPR10 LR140',
                    'M1590,1720 LR40 SPR10 LR100 UTLD40 LL100 SPL10 LL120',
                    // T2
                    'M1540,1780 LR90 SPR10 LR120 SWUP80',
                    // T3
                    'M1510,1800 LR120',
                    // SW T3 - SW T1
                    'M1590,1800 SWUP20 LR15 SWUP20',
                    // SW T1 - T4
                    'M1530,1760 SWDN20 LR15 SWDN20 LR15 SWDN20 LR55'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'Sk1_A',
                signalPos: { x: '1590', y: '1720' },
                trainPos: { x: '1575', y: '1720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sk_M',
                signalPos: { x: '1510', y: '1760' },
                trainPos: { x: '1495', y: '1760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sk_E',
                signalPos: { x: '1510', y: '1800' },
                trainPos: { x: '1495', y: '1800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sk1_O',
                signalPos: { x: '1630', y: '1700' },
                trainPos: { x: '1645', y: '1700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sk1_H',
                signalPos: { x: '1630', y: '1720' },
                trainPos: { x: '1645', y: '1720' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sk_L',
                signalPos: { x: '1630', y: '1760' },
                trainPos: { x: '1645', y: '1760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sk_K',
                signalPos: { x: '1630', y: '1780' },
                trainPos: { x: '1645', y: '1780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sk_D',
                signalPos: { x: '1630', y: '1800' },
                trainPos: { x: '1645', y: '1800' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sk_X',
                signalPos: { x: '1630', y: '1820' },
                trainPos: { x: '1645', y: '1820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sk1_B',
                signalPos: { x: '1780', y: '1700' },
                trainPos: { x: '1795', y: '1700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Stawiska',
                    prefix: 'Sk',
                    pos: { x: 1650, y: 1670 },
                    posFlipped: { x: 1650, y: 1860 }
                },
            },
        ]
    },
    "MW_MYSLOWICE": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    'M2000,1660 LR20',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M1990,1620 LR80 SPR10 LR80 DOT5-5-4',
                    'M1990,1640 LR170 DOT5-5-4',
                    'M1990,1660 LR15 SWUP20 LR15 SWUP20 LR15 SWUP20 LR20 SPR10 LR80 DOT5-5-4',
                ]
            }
        ],
        "SIGNALS": [
{
                signalName: 'MW_Z',
                signalPos: { x: '1990', y: '1620' },
                trainPos: { x: '1975', y: '1620' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'MW_W',
                signalPos: { x: '1990', y: '1640' },
                trainPos: { x: '1975', y: '1640' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'MW_U',
                signalPos: { x: '1990', y: '1660' },
                trainPos: { x: '1975', y: '1660' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'MW_A',
                signalPos: { x: '2070', y: '1600' },
                trainPos: { x: '2085', y: '1600' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'MW_B',
                signalPos: { x: '2070', y: '1620' },
                trainPos: { x: '2085', y: '1620' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Mysłowice',
                    prefix: 'MW',
                    pos: { x: 2090, y: 1570 },
                    posFlipped: { x: 2090, y: 1690 }
                },
            },
        ]
    },
    "Szb_SZABELNIA": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    'M1810,1600 LR20'
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M1760,1600 LR55 SWDN20',
                    'M1770,1620 LR100',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'Szb_D',
                signalPos: { x: '1760', y: '1600' },
                trainPos: { x: '1745', y: '1600' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Szb_D1',
                signalPos: { x: '1760', y: '1620' },
                trainPos: { x: '1745', y: '1620' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Szb_C1',
                signalPos: { x: '1760', y: '1620' },
                trainPos: { x: '1775', y: '1620' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Szb_A',
                signalPos: { x: '1870', y: '1620' },
                trainPos: { x: '1885', y: '1620' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Szabelnia',
                    prefix: 'Szb',
                    pos: { x: 1815, y: 1570 },
                    posFlipped: { x: 1815, y: 1670 }
                },
            },
        ]
    },

    "SMA_SOSNOWIECMACZKI": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // track 5 start & end
                    'M800,1560 LR20',
                    'M1000,1560 LR20',
                    // below track 5
                    'M930,1580 LR55 SWUP20',
                    'M930,1600 LR35 SWUP20',
                    'M930,1620 LR15 SWUP20',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // SW track4 - track 5 - SW track3
                    'M810,1540 SWDN20 LR35 SPR10 LR100 SPR10 LR35 SWUP20 LR15 SWUP20 LR15 SWUP20',
                    // track 4
                    'M750,1540 LR100 SPR10 LR100 SPR10 LR100',
                    // track 3
                    'M750,1520 LR100 SPR10 LR100 SPR10 LR100',
                    // track 2
                    'M830,1520 SWUP20 LR15 SPR10 LR100 SPR10 LR100',
                    // track 1
                    'M810,1520 SWUP40 LR35 SPR10 LR100 SWUP20 LR105',
                    // cross
                    'M770,1520 CROSS',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'SMA_B2',
                signalPos: { x: '1070', y: '1520' },
                trainPos: { x: '1085', y: '1520' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SMA_B',
                signalPos: { x: '1070', y: '1500' },
                trainPos: { x: '1085', y: '1500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SMA_J',
                signalPos: { x: '970', y: '1560' },
                trainPos: { x: '955', y: '1560' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SMA_H',
                signalPos: { x: '970', y: '1540' },
                trainPos: { x: '955', y: '1540' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SMA_G',
                signalPos: { x: '970', y: '1520' },
                trainPos: { x: '955', y: '1520' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SMA_F',
                signalPos: { x: '970', y: '1500' },
                trainPos: { x: '955', y: '1500' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SMA_M',
                signalPos: { x: '850', y: '1560' },
                trainPos: { x: '865', y: '1560' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SMA_N',
                signalPos: { x: '850', y: '1540' },
                trainPos: { x: '865', y: '1540' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'sma_R',
                signalPos: { x: '850', y: '1520' },
                trainPos: { x: '865', y: '1520' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'sma_O',
                signalPos: { x: '850', y: '1500' },
                trainPos: { x: '865', y: '1500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'sma_P',
                signalPos: { x: '850', y: '1480' },
                trainPos: { x: '865', y: '1480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'sma_V',
                signalPos: { x: '750', y: '1540' },
                trainPos: { x: '735', y: '1540' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Sosnowiec Maczki',
                    prefix: 'SMA',
                    pos: { x: 910, y: 1430 },
                    posFlipped: { x: 910, y: 1640 }
                },
            },
        ]
    },

    "SDn_SOSNOWIECDANDOWKA": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // T3 - SW T3 right to T5
                    'M1730,1220 LR50 SPR10 LR140 SPR10 LR35 SWUP20',
                    // SW T3 left
                    'M1740,1200 SWDN20',
                    'M1760,1240 SWUP20',
                    // SW T3 right
                    'M1955,1220 SWDN20',
                    // below T2 - 1
                    'M1670,1280 LR100 SPR10 LR150 SPR10 LR15 SWUP20',
                    // below T2 - 2
                    'M1660,1320 LR15 SWUP20 LR50',
                    // SW below T2 - 2 right
                    'M2045,1320 LR15 SWUP20',
                    // below T2 - 4 & below T2 - 2 right
                    'M1690,1280 SWDN20 LR15 SWDN40 LR215 SPR10 LR55 SWUP40 LR80',
                    // below T2 - 5
                    'M1750,1340 SWDN20 LR175 SPR10 LR15 SWUP20',
                    // below T2 - 6
                    'M1730,1340 SWDN40 LR195 SPR10 LR35 SWUP40',
                    'M1750,1380 SWDN20 LR85',
                    'M1780,1420 LR15 SWUP20',
                    'M1820,1400 SWDN20 LR15',

                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // T5
                    'M1630,1200 LR150 SPR10 LR140 SPR10 LR140',
                    // T1
                    'M1630,1240 LR150 SPR10 LR290',
                    // T2
                    'M1630,1260 LR150 SPR10 LR140 SPR10 LR140',
                    // SW T2 left
                    'M1650,1260 SWUP20',
                    // below T2 - 2 & SW to T1 T5 on right
                    'M1670,1200 SWDN40 LR15 SWDN20 LR15 SWDN20 LR15 SWDN20 LR35 SPR10 LR150 SPR10 LR75 SWUP40 LR15 SWUP20 LR15 SWUP40',
                    // below T2 - 3
                    'M1750,1300 SWDN20 LR15 SPR10 LR150 SPR10 LR15 SWUP20'

                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'SDn_W',
                signalPos: { x: '1630', y: '1200' },
                trainPos: { x: '1615', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn_Sz1N', //? SDn_X
                signalPos: { x: '1630', y: '1240' },
                trainPos: { x: '1615', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn_Z',
                signalPos: { x: '1630', y: '1260' },
                trainPos: { x: '1615', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn_N',
                signalPos: { x: '1780', y: '1200' },
                trainPos: { x: '1795', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn_O',
                signalPos: { x: '1780', y: '1220' },
                trainPos: { x: '1795', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn_P',
                signalPos: { x: '1780', y: '1240' },
                trainPos: { x: '1795', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn_R',
                signalPos: { x: '1780', y: '1260' },
                trainPos: { x: '1795', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn_S',
                signalPos: { x: '1770', y: '1280' },
                trainPos: { x: '1785', y: '1280' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn_T',
                signalPos: { x: '1770', y: '1300' },
                trainPos: { x: '1785', y: '1300' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn_U',
                signalPos: { x: '1770', y: '1320' },
                trainPos: { x: '1785', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn1_D',
                signalPos: { x: '1940', y: '1200' },
                trainPos: { x: '1925', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn1_E',
                signalPos: { x: '1940', y: '1220' },
                trainPos: { x: '1925', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDN1_F',
                signalPos: { x: '1940', y: '1260' },
                trainPos: { x: '1925', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn1_G',
                signalPos: { x: '1940', y: '1280' },
                trainPos: { x: '1925', y: '1280' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn1_H',
                signalPos: { x: '1940', y: '1300' },
                trainPos: { x: '1925', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn1_J',
                signalPos: { x: '1940', y: '1320' },
                trainPos: { x: '1925', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn1_K',
                signalPos: { x: '1940', y: '1340' },
                trainPos: { x: '1925', y: '1340' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn1_L',
                signalPos: { x: '1940', y: '1360' },
                trainPos: { x: '1925', y: '1360' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn1_M',
                signalPos: { x: '1940', y: '1380' },
                trainPos: { x: '1925', y: '1380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn_A',
                signalPos: { x: '2080', y: '1200' },
                trainPos: { x: '2095', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn_B',
                signalPos: { x: '2080', y: '1240' },
                trainPos: { x: '2095', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn_C',
                signalPos: { x: '2080', y: '1260' },
                trainPos: { x: '2095', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Sosnowiec Dańdówka',
                    prefix: 'SDn',
                    pos: { x: 1850, y: 1160 },
                    posFlipped: { x: 1850, y: 1440 }
                },
                platforms: [
                    { label: 'Peron I', width: 80, height: 10, pos: { x: 1795, y: 1185 } },
                    { label: 'Peron II', width: 80, height: 10, pos: { x: 1795, y: 1225 } },
                ],
                trackLabels: [
                    { text: '5', pos: { x: 1860, y: 1200 } },
                    { text: '3', pos: { x: 1860, y: 1220 } },
                    { text: '1', pos: { x: 1860, y: 1240 } },
                    { text: '2', pos: { x: 1860, y: 1260 } },
                ]
            },
        ]
    },

    "DS_DABROWAGORNICZASTREMIESZYCE": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // T2 left
                    'M930,720 LR50',
                    // below T4 - 1
                    'M1000,760 LR90 SPR10 LR100 SPR10 LR65',
                    // below T4 - 2
                    'M1070,760 SWDN20 LR15 SPR10 LR100 SPR10 LR45',
                    // below T4 - 3
                    'M1010,760 SWDN60 LR75 SPR10 LR100 SPR10 LR15 SWUP20',
                    'M1070,800 SWDN20',
                    // T4 right
                    'M1300,740 LR25',
                    // peron I left SW
                    'M1010,700 SWUP20 LR15'

                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // T1
                    'M930,700 LR120 SPR10 LR200 SPR10 LR100',
                    // T2
                    'M930,740 LR20 LINE970,720 LR80 SPR10 LR200 SPR10 LR100',
                    // SW T2 - T1 near peron on left
                    'M1030,720 SWUP20',
                    // SW T1 - T4 - SW T1 - SW T2
                    'M990,700 SWDN20 LR15 SWDN20 LR35 SPR10 LR200 SPR10 LR35 SWUP20 LR15 SWUP20 LR15 SWDN20',
                    // SW T4 -  playable track below T4 - SW T4
                    'M1030,740 SWDN20 LR15 SWDN40 LR35 SPR10 LR100 SPR10 LR35 SWUP20 LR15 SWUP20 LR15 SWUP20'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'DS_Z',
                signalPos: { x: '930', y: '700' },
                trainPos: { x: '915', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_W',
                signalPos: { x: '930', y: '740' },
                trainPos: { x: '915', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_V',
                signalPos: { x: '1050', y: '700' },
                trainPos: { x: '1065', y: '700' },
                trainPosDistance: [
                    { distanceToSignal: 250, x: 1165, y: 700 },
                    { distanceToSignal: 100, x: 1065, y: 700 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_U',
                signalPos: { x: '1050', y: '720' },
                trainPos: { x: '1065', y: '720' },
                trainPosDistance: [
                    { distanceToSignal: 300, x: 1165, y: 720 },
                    { distanceToSignal: 200, x: 1065, y: 720 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_Q',
                signalPos: { x: '1050', y: '740' },
                trainPos: { x: '1065', y: '740' },
                trainPosDistance: [
                    { distanceToSignal: 360, x: 1165, y: 740 },
                    { distanceToSignal: 200, x: 1065, y: 740 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_T',
                signalPos: { x: '1090', y: '760' },
                trainPos: { x: '1105', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_S',
                signalPos: { x: '1090', y: '780' },
                trainPos: { x: '1105', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_R',
                signalPos: { x: '1090', y: '800' },
                trainPos: { x: '1105', y: '800' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_P',
                signalPos: { x: '1090', y: '820' },
                trainPos: { x: '1105', y: '820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_E',
                signalPos: { x: '1270', y: '700' },
                trainPos: { x: '1255', y: '700' },
                trainPosDistance: [
                    { distanceToSignal: 380, x: 1155, y: 700 },
                    { distanceToSignal: 200, x: 1255, y: 700 },
                ],
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_F',
                signalPos: { x: '1270', y: '720' },
                trainPos: { x: '1255', y: '720' },
                trainPosDistance: [
                    { distanceToSignal: 380, x: 1155, y: 720 },
                    { distanceToSignal: 200, x: 1255, y: 720 },
                ],
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_G',
                signalPos: { x: '1270', y: '740' },
                trainPos: { x: '1255', y: '740' },
                trainPosDistance: [
                    { distanceToSignal: 380, x: 1155, y: 740 },
                    { distanceToSignal: 200, x: 1255, y: 740 },
                ],
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_H',
                signalPos: { x: '1210', y: '760' },
                trainPos: { x: '1195', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_J',
                signalPos: { x: '1210', y: '780' },
                trainPos: { x: '1195', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_K',
                signalPos: { x: '1210', y: '800' },
                trainPos: { x: '1195', y: '800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_L',
                signalPos: { x: '1210', y: '820' },
                trainPos: { x: '1195', y: '820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_A',
                signalPos: { x: '1370', y: '700' },
                trainPos: { x: '1385', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_B',
                signalPos: { x: '1370', y: '720' },
                trainPos: { x: '1385', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Dąbrowa Górnicza Strzemieszyce',
                    prefix: 'O',
                    pos: { x: 1150, y: 650 },
                    posFlipped: { x: 1150, y: 850 }
                },
                platforms: [
                    { label: 'Peron I', width: 80, height: 10, pos: { x: 1080, y: 685 } },
                    { label: 'Peron II', width: 100, height: 10, pos: { x: 1080, y: 725 } },
                ],
                trackLabels: [
                    { text: '1', pos: { x: 1160, y: 700 } },
                    { text: '2', pos: { x: 1160, y: 720 } },
                    { text: '4', pos: { x: 1160, y: 740 } },
                ]
            },
        ]
    },

    "DP_DABROWAGORNICZAPOLUDNIOWA": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // T3 left
                    'M1650,720 LR30',
                    // T3 right
                    'M1900,720 LR30',
                    // track below T2
                    'M1725,740 SWDN20 LR35 SPR10 LR100 SPR10 LR140 SWUP20',
                    'M1745,760 SWDN20 LR150 SWUP20',
                    'M1765,780 SWDN20 LR15',
                    'M1845,780 SWDN20 LR15',
                    // track below T2 last
                    'M2020,760 LR20',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // T1
                    'M1630,700 LR120 SPR10 LR100 SPR10 LR200',
                    // T2
                    'M1630,740 LR120 SPR10 LR100 SPR10 LR200',
                    // T3 - T2 SW near Peron on left
                    'M1670,700 SWDN20 LR75 SPR10 LR100 SPR10 LR35 SWDN20',
                    // SW on left T2 - T3 - T1
                    'M1685,740 SWUP20 LR35 SWUP20',
                    // SW on left T3 - T2
                    'M1705,720 SWDN20',
                    // SW near Peron on left
                    'M1885,720 SWUP20',
                    // SW near Peron on right
                    'M2035,740 LR10 SWUP40',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'DP1_M',
                signalPos: { x: '1630', y: '700' },
                trainPos: { x: '1615', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DP1_K',
                signalPos: { x: '1630', y: '740' },
                trainPos: { x: '1615', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DP1_J',
                signalPos: { x: '1750', y: '700' },
                trainPos: { x: '1765', y: '700' },
                trainPosDistance: [
                    { distanceToSignal: 750, x: 1950, y: 700 },
                    { distanceToSignal: 300, x: 1765, y: 700 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DP1_H3',
                signalPos: { x: '1750', y: '720' },
                trainPos: { x: '1765', y: '720' },
                trainPosDistance: [
                    { distanceToSignal: 750, x: 1950, y: 740 },
                    { distanceToSignal: 300, x: 1765, y: 740 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DP1_H',
                signalPos: { x: '1750', y: '740' },
                trainPos: { x: '1765', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DP1_G',
                signalPos: { x: '1765', y: '760' },
                trainPos: { x: '1780', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DP_B1',
                signalPos: { x: '1870', y: '700' },
                trainPos: { x: '1855', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DP_B3',
                signalPos: { x: '1870', y: '720' },
                trainPos: { x: '1855', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DP_C',
                signalPos: { x: '1870', y: '740' },
                trainPos: { x: '1855', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },{
                signalName: 'DP_D',
                signalPos: { x: '1885', y: '760' },
                trainPos: { x: '1870', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DP_A',
                signalPos: { x: '2070', y: '700' },
                trainPos: { x: '2085', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DP_L',
                signalPos: { x: '2070', y: '740' },
                trainPos: { x: '2085', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Dąbrowa Górnicza Południowa',
                    prefix: 'DP',
                    pos: { x: 1840, y: 660 },
                    posFlipped: { x: 1840, y: 830 }
                },
                platforms: [
                    { label: 'Peron I', width: 80, height: 30, pos: { x: 1960, y: 705 } },
                ],
                trackLabels: [
                    { text: '1', pos: { x: 1810, y: 700 } },
                    { text: '3', pos: { x: 1810, y: 720 } },
                    { text: '2', pos: { x: 1810, y: 740 } },
                ]
            },
        ]
    },

    "Kzl_KOZIOL": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M1630,300 LR80 SPR10',
                    'M1630,320 LR80 SPR10',
                    'M1650,300 SWDN20 LR35 SWDN20 LR15 SPR10',
                    'M1670,320 SWUP20'

                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'Kzl_B',
                signalPos: { x: '1630', y: '300' },
                trainPos: { x: '1615', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kzl_C',
                signalPos: { x: '1630', y: '320' },
                trainPos: { x: '1615', y: '320' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kzl_L',
                signalPos: { x: '1710', y: '300' },
                trainPos: { x: '1725', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kzl_O',
                signalPos: { x: '1710', y: '320' },
                trainPos: { x: '1725', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kzl_J',
                signalPos: { x: '1710', y: '340' },
                trainPos: { x: '1725', y: '340' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Kozioł',
                    prefix: 'Kzl',
                    pos: { x: 1670, y: 270 },
                    posFlipped: { x: 1670, y: 370 }
                },
            },
        ]
    },
    "KOZIOL_DTA_DGTOWAROWA": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    // KOZIOL - DGTOWAROWA
                    'M1720,300 LR150 UTLU60 LL100',
                    'M1720,320 LR175 SWUP80 LR100',
                    'M1720,340 LR162.5 LINE1885,335 LU10 SPU10 LU90 SPU30 LU10 LINE1882.5,180 LL112.5',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M1680,200 LR80 SPR10 LR230 SPR10 LR80',
                    'M1680,220 LR80 SPR10 LR230 SPR10 LR80',
                    // To KOZIOL
                    'M1720,200 SWDN20 LR15 SWDN20',
                    'M1680,240 LR80',
                    'M1700,200 SWUP20 LR55',
                    'M2010,240 LR15 SWUP20 LR15 SWUP20 LR15 SWDN20'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'DTA_Z',
                signalPos: { x: '1680', y: '220' },
                trainPos: { x: '1665', y: '220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DTA_E2',
                signalPos: { x: '1760', y: '180' },
                trainPos: { x: '1775', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DTA_F1',
                signalPos: { x: '1760', y: '200' },
                trainPos: { x: '1775', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DTA_F2',
                signalPos: { x: '1760', y: '220' },
                trainPos: { x: '1775', y: '220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DTA_E1',
                signalPos: { x: '1760', y: '240' },
                trainPos: { x: '1775', y: '240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DTA_C1',
                signalPos: { x: '2010', y: '200' },
                trainPos: { x: '1995', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DTA_C2',
                signalPos: { x: '2010', y: '220' },
                trainPos: { x: '1995', y: '220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DTA_D',
                signalPos: { x: '2010', y: '240' },
                trainPos: { x: '1995', y: '240' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DTA_B',
                signalPos: { x: '2090', y: '200' },
                trainPos: { x: '2105', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DTA_A',
                signalPos: { x: '2090', y: '220' },
                trainPos: { x: '2105', y: '220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'D.G. Towarowa',
                    prefix: 'DTA',
                    pos: { x: 1890, y: 140 },
                    posFlipped: { x: 1760, y: 270 }
                },
            },
        ]
    },

    "O_OLKUSZ": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // T4
                    'M1030,160 LR360',
                    // T3
                    'M1070,200 SWUP20 LR35 SPR10 LR100 SPR10 LR15 SWDN20',
                    // Bottom tracks
                    'M1090,240 SWDN20 LR210 SWUP20',
                    'M1080,260 LR280',
                    'M1180,280 LR15 SWUP20 LR15 SWDN20 LR15 SWDN20 LR15',
                    'M1190,280 LR65',
                    'M1340,260 SWUP20 LR15',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // T1
                    'M1030,200 LR80 SPR10 LR160 SPR10 LR100',
                    // T2
                    'M1030,220 LR250 SPR10 LR100',
                    // T2 bottom track
                    'M1050,200 SWDN20 LR15 SWDN20 LR35 SPR10 LR160 SPR10 LR35 SWUP20',
                    // CROSS on Right
                    'M1350,200 CROSS'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'O1_H',
                signalPos: { x: '1030', y: '220' },
                trainPos: { x: '1015', y: '220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'O1_G',
                signalPos: { x: '1110', y: '180' },
                trainPos: { x: '1125', y: '180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'O1_F',
                signalPos: { x: '1110', y: '200' },
                trainPos: { x: '1125', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'O1_E',
                signalPos: { x: '1110', y: '240' },
                trainPos: { x: '1125', y: '240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'O_B3',
                signalPos: { x: '1230', y: '180' },
                trainPos: { x: '1215', y: '180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'O_B',
                signalPos: { x: '1290', y: '200' },
                trainPos: { x: '1275', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'O_C',
                signalPos: { x: '1290', y: '220' },
                trainPos: { x: '1275', y: '220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'O_D',
                signalPos: { x: '1290', y: '240' },
                trainPos: { x: '1275', y: '240' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'O_A',
                signalPos: { x: '1390', y: '200' },
                trainPos: { x: '1405', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Olkusz',
                    prefix: 'O',
                    pos: { x: 1220, y: 130 },
                    posFlipped: { x: 1220, y: 320 }
                },
                platforms: [
                    { label: 'Peron I', width: 80, height: 10, pos: { x: 1130, y: 165 } },
                    { label: 'Peron II', width: 140, height: 10, pos: { x: 1130, y: 205 } },
                ],
                trackLabels: [
                    { text: '4', pos: { x: 1220, y: 160 } },
                    { text: '3', pos: { x: 1170, y: 180 } },
                    { text: '1', pos: { x: 1200, y: 200 } },
                    { text: '2', pos: { x: 1200, y: 220 } },
                ]
            },
        ]
    },
    "SKz_SOSNOWIECKAZIMIERZ": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // T3
                    'M1035,1180 LR15 SPR10 LR100 SPR10 LR15 LINE1190,1175',
                    // T4
                    'M990,1300 LR20 SPR10 LR100 SPR10 LR20',
                    // T10
                    'M1035,1320 SWDN40 LR15',
                    // T8
                    'M1055,1320 SWDN20 LR15',

                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // TOR 1D - T1 - TOR 1S
                    'M880,1200 LR170 SPR10 LR100 SPR10 LR60',
                    // TOR 1M - T2
                    'M880,1280 LR130 SPR10 LR100 SPR10 LR55 SWUP80',
                    // T13
                    'M900,1200 SWDN20 LR15 SPR10 LR100 UTLD40 LL100',
                    'M900,1280 SWUP20 LR15',
                    // T5
                    'M1020,1200 SWUP40 LR25 SPR10 LR100 SPR10 LR35 SWDN40',
                    // T6
                    'M970,1280 SWDN20 LR15 SWDN20 LR15 SPR10 LR100 SPR10 LR15 SWUP20 LR15 SWUP20',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'SKz_S',
                signalPos: { x: '880', y: '1200' },
                trainPos: { x: '865', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_T',
                signalPos: { x: '880', y: '1280' },
                trainPos: { x: '865', y: '1280' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_R',
                signalPos: { x: '1050', y: '1160' },
                trainPos: { x: '1065', y: '1160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_P',
                signalPos: { x: '1050', y: '1180' },
                trainPos: { x: '1065', y: '1180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_O',
                signalPos: { x: '1050', y: '1200' },
                trainPos: { x: '1065', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_N',
                signalPos: { x: '920', y: '1220' },
                trainPos: { x: '935', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_M',
                signalPos: { x: '920', y: '1260' },
                trainPos: { x: '935', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_L',
                signalPos: { x: '1010', y: '1280' },
                trainPos: { x: '1025', y: '1280' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_K',
                signalPos: { x: '1010', y: '1300' },
                trainPos: { x: '1025', y: '1300' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_J',
                signalPos: { x: '1010', y: '1320' },
                trainPos: { x: '1025', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_C',
                signalPos: { x: '1170', y: '1160' },
                trainPos: { x: '1155', y: '1160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_D',
                signalPos: { x: '1170', y: '1180' },
                trainPos: { x: '1155', y: '1180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_E',
                signalPos: { x: '1170', y: '1200' },
                trainPos: { x: '1155', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_F',
                signalPos: { x: '1130', y: '1280' },
                trainPos: { x: '1115', y: '1280' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_G',
                signalPos: { x: '1130', y: '1300' },
                trainPos: { x: '1115', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_H',
                signalPos: { x: '1130', y: '1320' },
                trainPos: { x: '1115', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_A',
                signalPos: { x: '1230', y: '1200' },
                trainPos: { x: '1245', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Sosnowiec Kazimierz',
                    prefix: 'SKz',
                    pos: { x: 1050, y: 1100 },
                    posFlipped: { x: 1050, y: 1390 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 1170, y: 1130 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron I', width: 80, height: 10, pos: { x: 1030, y: 1265 } },
                    { label: 'Peron II', width: 80, height: 10, pos: { x: 1070, y: 1205 } },
                    { label: 'Peron III', width: 80, height: 10, pos: { x: 1070, y: 1145 } },
                ],
                trackLabels: [
                    { text: '5', pos: { x: 1110, y: 1160 } },
                    { text: '3', pos: { x: 1110, y: 1180 } },
                    { text: '1', pos: { x: 1110, y: 1200 } },
                    { text: '13', pos: { x: 1032.5, y: 1240 } },
                    { text: '2', pos: { x: 1070, y: 1280 } },
                    { text: '4', pos: { x: 1070, y: 1300 } },
                    { text: '6', pos: { x: 1070, y: 1320 } },
                ]
            },
        ]
    },
    "Ju_JULIUSZ": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // SW6
                    'M690,1220 SWDN20 LR50',
                    // SW3/4cd
                    'M650,1260 LR40,SWUP20 LR15 SWUP20 LR15 SWUP20',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // TOR 1W - T1
                    'M630,1200 LR140',
                    // TOR 2W - T2
                    'M630,1220 LR140',
                    // SW7/8 SW 1/2
                    'M650,1200 SWDN20 LR95 SWUP20',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'Ju_H',
                signalPos: { x: '630', y: '1200' },
                trainPos: { x: '615', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ju_G',
                signalPos: { x: '630', y: '1220' },
                trainPos: { x: '615', y: '1220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ju_A',
                signalPos: { x: '770', y: '1200' },
                trainPos: { x: '785', y: '1200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ju_B',
                signalPos: { x: '770', y: '1220' },
                trainPos: { x: '785', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Juliusz',
                    prefix: 'Ju',
                    pos: { x: 700, y: 1170 },
                    posFlipped: { x: 700, y: 1290 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 655, y: 1230 },
                    rotation: 0,
                },
            },
        ]
    },
    "Dra_DOROTA": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // TOR 1J - TB
                    'M150,680 LR70',
                    // SW28
                    'M290,640 LR15 SWDN40',
                    // SW9/10 SW15/16
                    'M210,760 SWUP20',
                    'M265,760 SWUP20',
                    'M195,760 LR85'
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // TOR 1S - JA
                    'M150,660 LR115 SWDN20',
                    // TB - TOR 1W
                    'M200,680 LR130',
                    // TOR 1M - TC - TOR 1P
                    'M170,700 LR160',
                    // TOR 2M - TD - TOR 2P
                    'M170,720 LR160',
                    // TOR 2S - TE - TOR 2W
                    'M150,740 LR180',
                    // SW7/8 - SW11/12 - SW24/25
                    'M190,660 SWDN20 LR35 SWDN20 LR50 SWUP20',
                    // SW14/13 - SW26/27
                    'M230,740 SWUP20 LR50 SWDN20',
                    // middle CORSS
                    'M250,700 CROSS',

                ]
            }
        ],
    "SIGNALS": [
            {
                signalName: 'Dra_A',
                signalPos: { x: '150', y: '660' },
                trainPos: { x: '135', y: '660' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Dra_B',
                signalPos: { x: '150', y: '680' },
                trainPos: { x: '135', y: '680' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Dra_C',
                signalPos: { x: '170', y: '700' },
                trainPos: { x: '155', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Dra_D',
                signalPos: { x: '170', y: '720' },
                trainPos: { x: '155', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Dra_E',
                signalPos: { x: '150', y: '740' },
                trainPos: { x: '135', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Dra_M',
                signalPos: { x: '330', y: '680' },
                trainPos: { x: '345', y: '680' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Dra_L',
                signalPos: { x: '330', y: '700' },
                trainPos: { x: '345', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Dra_K',
                signalPos: { x: '330', y: '720' },
                trainPos: { x: '345', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Dra_J',
                signalPos: { x: '330', y: '740' },
                trainPos: { x: '345', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },

        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Dorota',
                    prefix: 'Dra',
                    pos: { x: 240, y: 610 },
                    posFlipped: { x: 240, y: 820 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 250, y: 770 },
                    rotation: 0,
                },
            },
        ]
    },
    "DW_DABROWAGORNICZAWSCHODNIA": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // SW21 - T10
                    'M155,1060 LR75 SWDN20 LR15 SPR10 LR100 SPR10 LR15 SWUP20',
                    // SW21 - T12 - SW59cd/59ab
                    'M170,1060 SWDN40 LR245 SWUP40',
                    // T16
                    'M190,1100 SWDN20 LR185 SWUP20',
                    // T18
                    'M210,1120 SWDN20 LR185 SWUP40',
                    // T20
                    'M365,1160 LR15 SWUP20',
                    // T22
                    'M440,1060 LR45',
                    // T44
                    'M465,1060 SWDN20 LR15',
                    // SW66/67
                    'M475,940 SWDN20',
                    'M460,940 LR35'
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // TOR 1T - T1 - TOR 1S
                    'M130,960 LR80 SPR10 LR200 SPR10 LR100',
                    // TOR 2T - T2 - TOR 2S
                    'M130,980 LR80 SPR10 LR200 SPR10 LR100',
                    // TOR 1D - T4 - TOR 1K
                    'M130,1020 LR120 SPR10 LR100 SPR10 LR160',
                    // TOR 2D - T6 - TOR 2K
                    'M130,1040 LR120 SPR10 LR100 SPR10 LR160',
                    // SW1/2 - T8 - SW64/65
                    'M150,960 SWDN20 LR15 SWDN40 LR15 SWDN20 LR15 SWDN20 LR35 SPR10 LR100 SPR10 LR35 SWUP20 LR15 SWUP20 LR55 SWUP40 LR15 SWUP20',
                    // SW62cd/61ab - SW61cd/59ab - SW59cd/59ab
                    'M390,1060 LR55 SWUP20 LR15 SWUP20',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'DW_A',
                signalPos: { x: '130', y: '960' },
                trainPos: { x: '115', y: '960' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_B',
                signalPos: { x: '130', y: '980' },
                trainPos: { x: '115', y: '980' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_C',
                signalPos: { x: '130', y: '1020' },
                trainPos: { x: '115', y: '1020' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_D',
                signalPos: { x: '130', y: '1040' },
                trainPos: { x: '115', y: '1040' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_F',
                signalPos: { x: '210', y: '960' },
                trainPos: { x: '225', y: '960' },
                trainPosDistance: [
                    { distanceToSignal: 680, x: 305, y: 960 },
                    { distanceToSignal: 300, x: 225, y: 960 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_G',
                signalPos: { x: '210', y: '980' },
                trainPos: { x: '225', y: '980' },
                trainPosDistance: [
                    { distanceToSignal: 600, x: 305, y: 980 },
                    { distanceToSignal: 300, x: 225, y: 980 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_H',
                signalPos: { x: '250', y: '1020' },
                trainPos: { x: '265', y: '1020' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_J',
                signalPos: { x: '250', y: '1040' },
                trainPos: { x: '265', y: '1040' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_K8',
                signalPos: { x: '250', y: '1060' },
                trainPos: { x: '265', y: '1060' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_K10',
                signalPos: { x: '250', y: '1080' },
                trainPos: { x: '265', y: '1080' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_R',
                signalPos: { x: '430', y: '960' },
                trainPos: { x: '415', y: '960' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_P',
                signalPos: { x: '430', y: '980' },
                trainPos: { x: '415', y: '980' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_O',
                signalPos: { x: '370', y: '1020' },
                trainPos: { x: '355', y: '1020' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_N',
                signalPos: { x: '370', y: '1040' },
                trainPos: { x: '355', y: '1040' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_M8',
                signalPos: { x: '370', y: '1060' },
                trainPos: { x: '355', y: '1060' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_M10',
                signalPos: { x: '370', y: '1080' },
                trainPos: { x: '355', y: '1080' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_T',
                signalPos: { x: '530', y: '960' },
                trainPos: { x: '545', y: '960' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_U',
                signalPos: { x: '530', y: '980' },
                trainPos: { x: '545', y: '980' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_W',
                signalPos: { x: '530', y: '1020' },
                trainPos: { x: '545', y: '1020' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_X',
                signalPos: { x: '530', y: '1040' },
                trainPos: { x: '545', y: '1040' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Dąbrowa Górnicza Wschodnia',
                    prefix: 'DW',
                    pos: { x: 335, y: 910 },
                    posFlipped: { x: 335, y: 1200 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 135, y: 1070 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron I', width: 80, height: 10, pos: { x: 310, y: 965 } },
                ],
                trackLabels: [
                    { text: '1', pos: { x: 320, y: 960 } },
                    { text: '2', pos: { x: 320, y: 980 } },
                    { text: '4', pos: { x: 310, y: 1020 } },
                    { text: '6', pos: { x: 310, y: 1040 } },
                    { text: '8', pos: { x: 310, y: 1060 } },
                    { text: '10', pos: { x: 310, y: 1080 } },
                    { text: '12', pos: { x: 310, y: 1100 } },
                    { text: '16', pos: { x: 310, y: 1120 } },
                    { text: '18', pos: { x: 310, y: 1140 } },
                    { text: '20', pos: { x: 350, y: 1160 } },
                    { text: '22', pos: { x: 500, y: 1060 } },
                    { text: '24', pos: { x: 500, y: 1080 } },
                ]
            },
        ]
    },
    "Sl_SLAWKOW": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // T8
                    'M290,1560 SWDN20 LR15 LR120 LR15 SWUP20',
                    // T5
                    'M290,1480 SWUP20 LR15 LR140 LR15 SWDN20',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // TOR 1W - T1
                    'M130,1500 LR100 SPR10 LR200 SPR10 LR100',
                    // TOR 2W - T2
                    'M130,1520 LR100 SPR10 LR200 SPR10 LR100',
                    // SW25cd - T4 - SW1/4d
                    'M190,1520 SWDN20 LR15 LR20 SPR10 LR200 SPR10 LR35 SWUP20',
                    // T6
                    'M270,1540 SWDN20 LR35 SPR10 LR100 SPR10 LR35 SWUP20',
                    // T3
                    'M190,1500 SWUP20 LR15 LR20 SPR10 LR200 SPR10 LR35 SWDN20',
                    // CROSS SW26/25ab SW27/24ab
                    'M150,1500 CROSS',
                    // CROSS SW2/3cd SW1/4cd
                    'M510,1500 CROSS'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'Sl_J',
                signalPos: { x: '130', y: '1500' },
                trainPos: { x: '115', y: '1500' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_K',
                signalPos: { x: '130', y: '1520' },
                trainPos: { x: '115', y: '1520' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_H3',
                signalPos: { x: '230', y: '1480' },
                trainPos: { x: '245', y: '1480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_H1',
                signalPos: { x: '230', y: '1500' },
                trainPos: { x: '245', y: '1500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_H2',
                signalPos: { x: '230', y: '1520' },
                trainPos: { x: '245', y: '1520' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_H4',
                signalPos: { x: '230', y: '1540' },
                trainPos: { x: '245', y: '1540' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_H6',
                signalPos: { x: '310', y: '1560' },
                trainPos: { x: '325', y: '1560' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_E3',
                signalPos: { x: '450', y: '1480' },
                trainPos: { x: '435', y: '1480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_E1',
                signalPos: { x: '450', y: '1500' },
                trainPos: { x: '435', y: '1500' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_E2',
                signalPos: { x: '450', y: '1520' },
                trainPos: { x: '435', y: '1520' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_E4',
                signalPos: { x: '450', y: '1540' },
                trainPos: { x: '435', y: '1540' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_E6',
                signalPos: { x: '430', y: '1560' },
                trainPos: { x: '415', y: '1560' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_C',
                signalPos: { x: '550', y: '1500' },
                trainPos: { x: '565', y: '1500' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_B',
                signalPos: { x: '550', y: '1520' },
                trainPos: { x: '565', y: '1520' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Sławków',
                    prefix: 'Sł',
                    pos: { x: 340, y: 1390 },
                    posFlipped: { x: 340, y: 1620 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 360, y: 1420 },
                    rotation: 180,
                },
                platforms: [
                    { label: 'Peron I', width: 80, height: 10, pos: { x: 320, y: 1445 } },
                    { label: 'Peron II', width: 100, height: 10, pos: { x: 300, y: 1505 } },
                ],
                trackLabels: [
                    { text: '5', pos: { x: 380, y: 1460 } },
                    { text: '3', pos: { x: 340, y: 1480 } },
                    { text: '1', pos: { x: 340, y: 1500 } },
                    { text: '2', pos: { x: 340, y: 1520 } },
                    { text: '4', pos: { x: 340, y: 1540 } },
                    { text: '6', pos: { x: 370, y: 1560 } },
                    { text: '8', pos: { x: 370, y: 1580 } },
                ]
            },
        ]
    },

    "Bo_BUKOWNO": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // T11
                    'M270,1820 SWUP20 LR35 SPR10 LR140 SPR10 LR15 SWDN20',
                    // TOR 1S - T5 - TOR 1S
                    'M270,1900 SWUP20 LR15 SWUP20 LR15 SPR10 LR120 SPR10 LR15 SWDN20 LR15 SWDN20',
                    // T3
                    'M240,1880 LR70 SPR10 LR120 SPR10 LR90',
                    // TOR 2B - T6
                    'M170,1960 LR120 SPR10 LR100 SPR10 LR20',
                    // T201
                    'M130,1800 LR120 SWUP20 LR35 SPR10 LR140 SPR10 LR75 SWDN40 LR60',
                    // T203
                    'M270,1780 SWUP20 LR15 SPR10 LR140 SPR10 LR15 SWDN20',
                    // T100 SW106ab/cd
                    'M520,1860 LR25 SWUP20 LR15 SWUP60 LR15',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // TOR 1S - T1
                    'M130,1900 LR180 SPR10 LR120 SPR10 LR140',
                    // TOR 2S - T2
                    'M130,1920 LR160 SPR10 LR100 SPR10 LR180',
                    // TOR 1B - T4
                    'M130,1940 LR160 SPR10 LR100 SPR10 LR40',
                    // TOR 2B
                    'M130,1960 LR40',
                    // TOR 1B - T11 - TOR 2S
                    'M170,1960 SWUP20 LR15 SWUP20 LR15 SWUP20 LR15 SWUP20 LR15 SWUP60 LR15 SPR220 LR15 SWDN40 LR15 SWDN20 LR15 SWDN20 LR15 SWDN20',
                    // SW42/41 - T8 - SW7/4
                    'M150,1900 SWDN20 LR75 M230,1920 SWDN20 LR15 SWDN20 LR15 SWDN20 LR15 SPR10 LR100 SPR10 LR15 SWUP20 LR15 SWUP20 LR15 SWUP20 LR35 SWUP20',
                    // T9
                    'M260,1820 LR50 SPR10 LR140 SPR10 LR20',
                    // T7
                    'M290,1820 SWDN20 LR15 SPR10 LR140 SPR10 LR15 SWDN20 LR20',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'Bo_T',
                signalPos: { x: '130', y: '1800' },
                trainPos: { x: '115', y: '1800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_K',
                signalPos: { x: '130', y: '1900' },
                trainPos: { x: '115', y: '1900' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_L',
                signalPos: { x: '130', y: '1920' },
                trainPos: { x: '115', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_O',
                signalPos: { x: '130', y: '1940' },
                trainPos: { x: '115', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_P',
                signalPos: { x: '130', y: '1960' },
                trainPos: { x: '115', y: '1960' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_S',
                signalPos: { x: '290', y: '1760' },
                trainPos: { x: '305', y: '1760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_R',
                signalPos: { x: '290', y: '1780' },
                trainPos: { x: '305', y: '1780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F11',
                signalPos: { x: '310', y: '1800' },
                trainPos: { x: '325', y: '1800' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F9',
                signalPos: { x: '310', y: '1820' },
                trainPos: { x: '325', y: '1820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F7',
                signalPos: { x: '310', y: '1840' },
                trainPos: { x: '325', y: '1840' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F5',
                signalPos: { x: '310', y: '1860' },
                trainPos: { x: '325', y: '1860' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F3',
                signalPos: { x: '310', y: '1880' },
                trainPos: { x: '325', y: '1880' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F1',
                signalPos: { x: '310', y: '1900' },
                trainPos: { x: '325', y: '1900' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F2',
                signalPos: { x: '290', y: '1920' },
                trainPos: { x: '305', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F4',
                signalPos: { x: '290', y: '1940' },
                trainPos: { x: '305', y: '1940' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F6',
                signalPos: { x: '290', y: '1960' },
                trainPos: { x: '305', y: '1960' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F8',
                signalPos: { x: '290', y: '1980' },
                trainPos: { x: '305', y: '1980' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_J',
                signalPos: { x: '450', y: '1760' },
                trainPos: { x: '435', y: '1760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_H',
                signalPos: { x: '450', y: '1780' },
                trainPos: { x: '435', y: '1780' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D11',
                signalPos: { x: '470', y: '1800' },
                trainPos: { x: '455', y: '1800' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D9',
                signalPos: { x: '470', y: '1820' },
                trainPos: { x: '455', y: '1820' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D7',
                signalPos: { x: '470', y: '1840' },
                trainPos: { x: '455', y: '1840' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D5',
                signalPos: { x: '450', y: '1860' },
                trainPos: { x: '435', y: '1860' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D3',
                signalPos: { x: '450', y: '1880' },
                trainPos: { x: '435', y: '1880' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D1',
                signalPos: { x: '450', y: '1900' },
                trainPos: { x: '435', y: '1900' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D2',
                signalPos: { x: '410', y: '1920' },
                trainPos: { x: '395', y: '1920' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D4',
                signalPos: { x: '410', y: '1940' },
                trainPos: { x: '395', y: '1940' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D6',
                signalPos: { x: '410', y: '1960' },
                trainPos: { x: '395', y: '1960' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D8',
                signalPos: { x: '410', y: '1980' },
                trainPos: { x: '395', y: '1980' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_G',
                signalPos: { x: '590', y: '1820' },
                trainPos: { x: '605', y: '1820' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_B',
                signalPos: { x: '590', y: '1900' },
                trainPos: { x: '605', y: '1900' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_A',
                signalPos: { x: '590', y: '1920' },
                trainPos: { x: '605', y: '1920' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Bukowno',
                    prefix: 'Bo',
                    pos: { x: 370, y: 1730 },
                    posFlipped: { x: 350, y: 2020 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 235, y: 1970 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron I', width: 60, height: 10, pos: { x: 330, y: 1905 } },
                    { label: 'Peron II', width: 60, height: 10, pos: { x: 330, y: 1945 } },
                ],
                trackLabels: [
                    { text: '203', pos: { x: 370, y: 1760 } },
                    { text: '201', pos: { x: 370, y: 1780 } },
                    { text: '11', pos: { x: 390, y: 1800 } },
                    { text: '9', pos: { x: 390, y: 1820 } },
                    { text: '7', pos: { x: 390, y: 1840 } },
                    { text: '5', pos: { x: 380, y: 1860 } },
                    { text: '3', pos: { x: 380, y: 1880 } },
                    { text: '1', pos: { x: 380, y: 1900 } },
                    { text: '2', pos: { x: 350, y: 1920 } },
                    { text: '4', pos: { x: 350, y: 1940 } },
                    { text: '6', pos: { x: 350, y: 1960 } },
                    { text: '8', pos: { x: 350, y: 1980 } },
                ]
            },
        ]
    },

    "__TEMPLATE__": {
        "TRACKS": [],
        "SIGNALS": [],
        "ANNOTATIONS": []
    },
}