import { ScreenData } from "../../types/mapdata-types";

/* ========================================================================================================
    SCREEN 6 = KM STASZIC - STAWISKA - DANDOWKA - JULIUSZ - DABROWA GORNICZA WSCHODNIA - SLAWKOW - BUKONOW
   ======================================================================================================== */

const STATION_TRACK_COLOR = 'rgb(255, 255, 255)';
const OUT_OF_STATION_TRACK_COLOR = 'rgb(120, 120, 120)'
const NON_PLAYABLE_TRACKS_COLOR = 'rgb(60, 60, 60)'

export const SCREEN6_DATA: ScreenData.ScreenDataProps = {
    "ADDITIONAL_ELEMENTS": {
        "TRACKS": [
            {
                color: 'orange',
                commands: [
                    //? Stawiska / Dandowka Bridge
                    'M1348,285 DRD5-5 LD40 DLD5-5',
                    'M1387,285 DLD5-5 LD40 DRD5-5',
                    //? Juliusz / Dorota Bridge
                    'M407,821 DRD5-5 LR20 DRU5-5',
                    'M407,859 DRU5-5 LR20 DRD5-5',
                    //? Juliusz / Dorota Bridge
                    'M593,955 DRD5-5 LD40 DLD5-5',
                    'M612,955 DLD5-5 LD40 DRD5-5',
                    //? Strzemieszyce / Wschodnia Bridge
                    'M1578,675 DRD5-5 LD60 DLD5-5',
                    'M1617,675 DLD5-5 LD60 DRD5-5',
                    //? Dorota / Wschodnia Bridge
                    'M1513,941 DRD5-5 LR40 DRU5-5',
                    'M1513,959 DRU5-5 LR40 DRD5-5',
                    //? Wschodnia / Koziol Bridge
                    'M2333,915 DRD5-5 LD40 DLD5-5',
                    'M2372,915 DLD5-5 LD40 DRD5-5',
                    //? Koziol / DTA Bridge
                    'M430,1251 DRD5-5 LR20 DRU5-5',
                    'M430,1269 DRU5-5 LR20 DRD5-5',
                    //? DTA Bridge
                    'M430,1131 DRD5-5 LR20 DRU5-5',
                    'M430,1169 DRU5-5 LR20 DRD5-5',


                ]
            },
        ],
        "SIGNALS": [],
        "ANNOTATIONS": [
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 10, y: 250 },
                text: 'LK171 - Panewnik'
            },
            // {
            //     annotationType: 'differentScreenMarker',
            //     nodePos: { x: 5, y: 275 },
            //     text: 'LK653 - Katowice Ochojec'
            // },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 10, y: 655 },
                text: 'LK142 - Katowice Ligota'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 380, y: 595 },
                nodePosFlipped: { x: 380, y: 640 }, //? not active?
                text: 'LK142 - Tychy'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 930, y: 35 },
                text: 'LK161 - Chorzów Stary'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 870, y: 205 },
                text: 'LK161 - Chorzów Stary'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 770, y: 55 },
                text: 'LK138 - Katowice Zawodzie'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 1410, y: 110 },
                text: 'LK660 - Katowice Zawodzie'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 1410, y: 150 },
                text: 'LK62 - Sosnowiec Główny'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 1650, y: 390 },
                text: 'LK138 - Oświęcim'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 5, y: 1050 },
                text: 'LK133 - Jaworzno Szczakowa'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 410, y: 1040 },
                text: 'LK665 - Sławków Euroterminal'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 640, y: 955 },
                text: 'LK180 - Mysłowice Brzezinka'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 2240, y: 780 },
                nodePosFlipped: { x: 2240, y: 680 }, //? not active?
                text: 'LK133 - Dąbrowa Górnicza Ząbkowice'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 5, y: 1110 },
                nodePosFlipped: { x: 5, y: 1310 }, // ? not active?
                text: 'LK154 - Dąbrowa Górnicza Towarowa'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 1240, y: 1130 },
                text: 'LK154 - Łazy Łc'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 10, y: 1520 },
                text: 'LK156 - Jaworzno Szczakowa'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 1940, y: 1385 },
                text: 'LK62 - Tunel'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 1940, y: 1345 },
                text: 'LK65 - Sędziszów'
            },
            {
                annotationType: 'differentScreenMarker',
                nodePos: { x: 750, y: 1290 },
                text: 'LK65 - Sławków Południowy'
            },
            {
                annotationType: 'trackBreakMarker',
                breakLetters: [
                    { first: { x: 2535, y: 240 }, second: { x: 30, y: 670 } },       // [A] Sosnowiec Dandowka <-> Sosnowiec Kazimierz
                    { first: { x: 2535, y: 288 }, second: { x: 20, y: 805 } },       // [B] Sosnowiec Dandowka <-> Juliusz
                    { first: { x: 2535, y: 850 }, second: { x: 20, y: 1210 } },       // [C] Dabrowa Gornicza Wschodnia <-> Koziol
                    { first: { x: 2535, y: 915 }, second: { x: 20, y: 1370 } },       // [D] Dabrowa Gornicza Wschodnia <-> Slawkow
                ]
            }
        ]
    },
    "KATOWICEMUCHOWIECSTASZIC_STASZIC_KMB": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M165,300 LL100.5 LINE62,305 LD300 LINE64.5,610 LR95.5',
                    'M400,550 LR100',
                ]
            }
        ],
        "SIGNALS": [],
        "ANNOTATIONS": []
    },
    "KMB_KATOWICEMUCHKMB": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    'M70,280 DOT5-5-10 SPR10 LR30',
                ]
            },
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M70,260 DOT5-5-10',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M175,260 LR80',
                    'M175,300 LR20 SWUP20 LR55',
                    'M215,260 CROSS',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'KMB_Y21',
                signalPos: { x: '175', y: '260' },
                trainPos: { x: '160', y: '260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'KMB_Y23',
                signalPos: { x: '175', y: '280' },
                trainPos: { x: '160', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO ~1.5km
            {
                signalName: 'KMB_Y25',
                signalPos: { x: '175', y: '300' },
                trainPos: { x: '160', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO Add signal prediction ~5.1km
            {
                signalName: 'KMB_M',
                signalPos: { x: '255', y: '260' },
                trainPos: { x: '270', y: '260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO Add signal prediction ~5.1km
            {
                signalName: 'KMB_L',
                signalPos: { x: '255', y: '280' },
                trainPos: { x: '270', y: '280' },
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
                    pos: { x: 215, y: 220 },
                    posFlipped: { x: 215, y: 330 }
                },
            },
        ]
    },
    "Ssc_STASZIC": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    'M170,590 LR60',
                    'M215,530 LR15 SWDN20',
                    'M330,570 LR15 SWDN20',
                    'M170,630 LR70 SWUP20 LR100 SPR10 LR15',
                    'M70,630 DOT5-5-10',
                ]
            },
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M400,610 DOT5-5-10 ',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // T2
                    'M170,610 LR55 SWUP20 LR135 SWDN20 LR20',
                    'M190,610 SWUP20 LR15 SWUP40 LR175',

                ]
            }
        ],
        "SIGNALS": [
            // TODO 1.5km
            {
                signalName: 'Ssc_B',
                signalPos: { x: '170', y: '610' },
                trainPos: { x: '155', y: '610' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ssc_E',
                signalPos: { x: '355', y: '610' },
                trainPos: { x: '340', y: '610' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ssc_D',
                signalPos: { x: '390', y: '550' },
                trainPos: { x: '405', y: '550' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ssc_C',
                signalPos: { x: '390', y: '610' },
                trainPos: { x: '405', y: '610' },
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
                    pos: { x: 300, y: 510 },
                    posFlipped: { x: 300, y: 660 }
                },
            },
        ]
    },
    "StA_KATOWICEMUCHWIECSTASZIC": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M530,550 SWUP100 LR15 SWUP20 LR15 SWUP20 LR15 SWUP20 LR15 SPR10 DOT5-5-10',
                    'M590,410 LR20 SPR10 DOT5-5-10',
                    'M570,430 LR40 SPR10 DOT5-5-10',
                    'M550,450 LR60 SPR10 DOT5-5-10',
                    'M550,550 SWUP40 LR15 SWUP40 LR35 SPR10 DOT5-5-10',
                    'M590,510 SWUP20 LR15 SPR10 DOT5-5-10',
                    'M570,510 LR40 SPR10 DOT5-5-10',
                    'M570,550 SWUP20 LR35 SPR10 DOT5-5-10',
                    'M510,550 LR100 SPR10 DOT5-5-10',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'StA_A',
                signalPos: { x: '510', y: '550' },
                trainPos: { x: '495', y: '550' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'StA_C',
                signalPos: { x: '610', y: '390' },
                trainPos: { x: '625', y: '390' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'StA_D',
                signalPos: { x: '610', y: '410' },
                trainPos: { x: '625', y: '410' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'StA_E',
                signalPos: { x: '610', y: '430' },
                trainPos: { x: '625', y: '430' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'StA_F',
                signalPos: { x: '610', y: '450' },
                trainPos: { x: '625', y: '450' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'StA_G',
                signalPos: { x: '610', y: '470' },
                trainPos: { x: '625', y: '470' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'StA_H',
                signalPos: { x: '610', y: '490' },
                trainPos: { x: '625', y: '490' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'StA_J',
                signalPos: { x: '610', y: '510' },
                trainPos: { x: '625', y: '510' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'StA_K',
                signalPos: { x: '610', y: '530' },
                trainPos: { x: '625', y: '530' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'StA_L',
                signalPos: { x: '610', y: '550' },
                trainPos: { x: '625', y: '550' },
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
                    pos: { x: 610, y: 370 },
                    posFlipped: { x: 610, y: 580 }
                },
            },
        ]
    },
    "KMB_KATOWICEJANOW": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M265,260 LR235',
                    'M265,280 LR235',
                ]
            }
        ],
        "SIGNALS": [],
        "ANNOTATIONS": []
    },
    "KJw_KATOWICEJANOW": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // T2
                    'M550,280 LR190',
                    'M590,280 SWUP20 LR15 SWDN20 LR15 SWDN20 LR45',
                    // T4
                    'M550,320 LR40 SWDN20 LR120 SWUP20 LR20',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // T1
                    'M510,260 LR230',
                    // T3
                    'M510,280 LR20 SWDN20 LR75 SWDN20 LR15 LR50 LR15 SWUP20 LR40',

                ]
            }
        ],
        "SIGNALS": [
            // TODO Add signal prediction ~5.1km
            {
                signalName: 'KJw_H',
                signalPos: { x: '510', y: '260' },
                trainPos: { x: '495', y: '260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO Add signal prediction ~5.1km
            {
                signalName: 'KJw_Z',
                signalPos: { x: '510', y: '280' },
                trainPos: { x: '495', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO ~2.1km
            {
                signalName: 'KJw_A',
                signalPos: { x: '740', y: '260' },
                trainPos: { x: '755', y: '260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO ~2.1km
            {
                signalName: 'KJw_W',
                signalPos: { x: '740', y: '300' },
                trainPos: { x: '755', y: '300' },
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
                    pos: { x: 630, y: 220 },
                    posFlipped: { x: 630, y: 370 }
                },
            },
        ]
    },
    "KATOWICEJANOW_STAWISKA": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    'M740,280 LR240',
                    'M740,320 LR240',
                ]
            },
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M750,260 LR220',
                    'M750,300 LR220',
                ]
            }
        ],
        "SIGNALS": [],
        "ANNOTATIONS": []
    },
    "SZABELNIA_MYSLOWICE_STAWISKA": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1260,70 LR115 SWDN350 LR95',
                    'M1150,90 LR110 LR105 SWDN350 LR105',
                    'M1260,200 LR95 SWDN260 LR115',
                    // TO SDn
                    'M1110,300 LR240 SPR35 LR605',
                    'M1110,320 LR240 SPR35 LR605',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'L138_266',
                signalPos: { x: '1140', y: '90' },
                trainPos: { x: '1125', y: '90' },
                signalDirectionOnMap: 'right',
                signalType: 'abs_last',
            },
            {
                signalName: 'L138_266N',
                signalPos: { x: '1140', y: '90' },
                trainPos: { x: '1155', y: '90' },
                signalDirectionOnMap: 'left',
                signalType: 'abs_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '266', pos: { x: 1325, y: 90 } },
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
                    'M980,280 LR30',
                    'M1230,280 LR20',
                    // T4
                    'M980,320 LR70',
                    'M1000,320 SWUP20',
                ]
            },
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M955,220 DOT5-5-10',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // to Myslowice
                    'M1080,220 SWUP20 LR15 SPR10 LR140',
                    'M1060,220 LR40 SPR10 LR100 UTLD40 LL100 SPL10 LL120',
                    // T2
                    'M1010,280 LR90 SPR10 LR120 SWUP80',
                    // T3
                    'M980,300 LR120',
                    // SW T3 - SW T1
                    'M1060,300 SWUP20 LR15 SWUP20',
                    // SW T1 - T4
                    'M1000,260 SWDN20 LR15 SWDN20 LR15 SWDN20 LR55'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'Sk1_A',
                signalPos: { x: '1060', y: '220' },
                trainPos: { x: '1045', y: '220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sk_M',
                signalPos: { x: '980', y: '260' },
                trainPos: { x: '965', y: '260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sk_E',
                signalPos: { x: '980', y: '300' },
                trainPos: { x: '965', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sk1_O',
                signalPos: { x: '1100', y: '200' },
                trainPos: { x: '1115', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sk1_H',
                signalPos: { x: '1100', y: '220' },
                trainPos: { x: '1115', y: '220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sk_L',
                signalPos: { x: '1100', y: '260' },
                trainPos: { x: '1115', y: '260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sk_K',
                signalPos: { x: '1100', y: '280' },
                trainPos: { x: '1115', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO Add signal prediction ~5.1km
            {
                signalName: 'Sk_D',
                signalPos: { x: '1100', y: '300' },
                trainPos: { x: '1115', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO ~4.9km
            {
                signalName: 'Sk_X',
                signalPos: { x: '1100', y: '320' },
                trainPos: { x: '1115', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sk1_B',
                signalPos: { x: '1250', y: '200' },
                trainPos: { x: '1265', y: '200' },
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
                    pos: { x: 1120, y: 170 },
                    posFlipped: { x: 1120, y: 360 }
                },
            },
        ]
    },
    "MW_MYSLOWICE": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    'M1495,460 LR20',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M1485,420 LR80 SPR10 DOT5-5-10',
                    'M1485,440 LR80 DOT5-5-11',
                    'M1485,460 LR15 SWUP20 LR15 SWUP20 LR15 SWUP20 LR20 SPR10 DOT5-5-10',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'MW_Z',
                signalPos: { x: '1485', y: '420' },
                trainPos: { x: '1470', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'MW_W',
                signalPos: { x: '1485', y: '440' },
                trainPos: { x: '1470', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'MW_U',
                signalPos: { x: '1485', y: '460' },
                trainPos: { x: '1470', y: '460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'MW_A',
                signalPos: { x: '1565', y: '400' },
                trainPos: { x: '1580', y: '400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'MW_B',
                signalPos: { x: '1565', y: '420' },
                trainPos: { x: '1580', y: '420' },
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
                    pos: { x: 1585, y: 370 },
                    posFlipped: { x: 1585, y: 490 }
                },
            },
        ]
    },
    "Szb_SZABELNIA": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    'M1190,50 LR20'
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M1140,50 LR55 SWDN20',
                    'M1150,70 LR100',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'Szb_D',
                signalPos: { x: '1140', y: '50' },
                trainPos: { x: '1125', y: '50' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Szb_D1',
                signalPos: { x: '1140', y: '70' },
                trainPos: { x: '1125', y: '70' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Szb_C1',
                signalPos: { x: '1140', y: '70' },
                trainPos: { x: '1155', y: '70' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Szb_A',
                signalPos: { x: '1250', y: '70' },
                trainPos: { x: '1265', y: '70' },
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
                    pos: { x: 1195, y: 30 },
                    posFlipped: { x: 1195, y: 120 }
                },
            },
        ]
    },
    "4010_Spl1_SOSNOWIECPOLUDNIOWY": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    'M1575,240 SWDN20 LR25 SPR10 LR100 SPR10 LR10 SWUP20',
                ]
            },
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1785,220 LR100 SWDN40 LR100',

                    'M1505,200 LL100 LINE1402.5,195 LU30 LINE1405,160 LR65 DOT5-5-4',
                    'M1505,280 LL110 LINE1392.5,275 LU150 LINE1395,120 LR75 DOT5-5-4',
                ]
            },

            {
                color: STATION_TRACK_COLOR,
                commands: [
                    //~ FROM UPPER CONNECTOR - T1
                    'M1515,200 LR90 SPR10 LR100 SPR10 LR10 SWDN20',
                    //^ T2 - TOR 1D
                    'M1530,200 SWDN20 LR70 SPR10 LR100 SPR10 LR50',
                    //~ FROM LOWER CONNECTOR - T4
                    'M1515,280 LR20 SWUP40 LR65 SPR10 LR100 SPR10 LR25 SWUP20',

                    //? SWITCHES LEFT SIDE
                    'M1550,240 SWUP20 LR10 SWUP20',
                    'M1590,220 SWDN20',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'SG_S',
                invisibleSignal: true,
                signalPos: { x: '1515', y: '140' },
                trainPos: { x: '1500', y: '140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SG_P',
                invisibleSignal: true,
                signalPos: { x: '1515', y: '160' },
                trainPos: { x: '1500', y: '160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_W',
                signalPos: { x: '1515', y: '200' },
                trainPos: { x: '1500', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_T',
                signalPos: { x: '1515', y: '280' },
                trainPos: { x: '1500', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'Spł1_J',
                signalPos: { x: '1605', y: '200' },
                trainPos: { x: '1625', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_K',
                signalPos: { x: '1605', y: '220' },
                trainPos: { x: '1625', y: '220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_L',
                signalPos: { x: '1605', y: '240' },
                trainPos: { x: '1625', y: '240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_M',
                signalPos: { x: '1605', y: '260' },
                trainPos: { x: '1625', y: '260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_C',
                signalPos: { x: '1725', y: '200' },
                trainPos: { x: '1710', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_B',
                signalPos: { x: '1725', y: '220' },
                trainPos: { x: '1710', y: '220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_D',
                signalPos: { x: '1725', y: '240' },
                trainPos: { x: '1710', y: '240' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            {
                signalName: 'SPł1_E',
                signalPos: { x: '1725', y: '260' },
                trainPos: { x: '1710', y: '260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard'
            },
            // TODO ~2.6km
            {
                signalName: 'SPł1_A',
                signalPos: { x: '1775', y: '220' },
                trainPos: { x: '1790', y: '220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard'
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Sosnowiec Południowy',
                    prefix: 'Spł1',
                    pos: { x: 1625, y: 177.5 },
                    posFlipped: { x: 1665, y: 300 }
                },
                dispatchingPost: {
                    type: 'computer',
                    pos: { x: 1495, y: 230 },
                    rotation: 90,
                },
                platforms: [
                    { label: 'Peron I', width: 55, height: 10, pos: { x: 1625, y: 205 } },
                ],
                trackLabels: [
                    { text: '1', pos: { x: 1665, y: 200 } },
                    { text: '2', pos: { x: 1665, y: 220 } },
                    { text: '4', pos: { x: 1665, y: 240 } },
                    { text: '6', pos: { x: 1665, y: 260 } },
                ]
            },
        ]
    },
    "KATOWICEZAWODZIE_SZABELNIA": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1035,50 DOT5-5-10',

                    'M910,70 DOT5-5-4 LR65 SPR20 LR100',
                    'M910,90 DOT5-5-4 LR65 SPR20 LR100',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'L138_279N',
                signalPos: { x: '1020', y: '70' },
                trainPos: { x: '1005', y: '70' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L138_282',
                signalPos: { x: '1020', y: '90' },
                trainPos: { x: '1005', y: '90' },
                signalType: 'abs_standard',
                signalDirectionOnMap: 'right',
            },
            {
                signalName: 'L138_279',
                signalPos: { x: '1020', y: '70' },
                trainPos: { x: '1035', y: '70' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
            {
                signalName: 'L138_282N',
                signalPos: { x: '1020', y: '90' },
                trainPos: { x: '1035', y: '90' },
                signalType: 'abs_last',
                signalDirectionOnMap: 'left',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'trackLabels',
                trackLabels: [
                    { text: '279', pos: { x: 972.5, y: 70 } },
                    { text: '272', pos: { x: 972.5, y: 90 } },
                    { text: '267', pos: { x: 1080, y: 70 } },
                    { text: '282', pos: { x: 1080, y: 90 } },
                ]
            },
        ]
    },
    "SDn_SOSNOWIECDANDOWKA": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // T3 - SW T3 right to T5
                    'M2100,280 LR50 SPR10 LR140 SPR10 LR35 SWUP20',
                    // SW T3 left
                    'M2110,260 SWDN20',
                    'M2130,300 SWUP20',
                    // SW T3 right
                    'M2325,280 SWDN20',
                    // below T2 - 1
                    'M2040,340 LR100 SPR10 LR150 SPR10 LR15 SWUP20',
                    // below T2 - 2
                    'M2030,380 LR15 SWUP20 LR50',
                    // SW below T2 - 2 right
                    'M2415,380 LR15 SWUP20',
                    // below T2 - 4 & below T2 - 2 right
                    'M2060,340 SWDN20 LR15 SWDN40 LR215 SPR10 LR55 SWUP40 LR80',
                    // below T2 - 5
                    'M2120,400 SWDN20 LR175 SPR10 LR15 SWUP20',
                    // below T2 - 6
                    'M2100,400 SWDN40 LR195 SPR10 LR35 SWUP40',
                    'M2120,440 SWDN20 LR85',
                    'M2150,480 LR15 SWUP20',
                    'M2190,460 SWDN20 LR15',

                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // T5
                    'M2000,260 LR150 SPR10 LR140 SPR10 LR140',
                    // T1
                    'M2000,300 LR150 SPR10 LR290',
                    // T2
                    'M2000,320 LR150 SPR10 LR140 SPR10 LR140',
                    // SW T2 left
                    'M2020,320 SWUP20',
                    // below T2 - 2 & SW to T1 T5 on right
                    'M2040,260 SWDN40 LR15 SWDN20 LR15 SWDN20 LR15 SWDN20 LR35 SPR10 LR150 SPR10 LR75 SWUP40 LR15 SWUP20 LR15 SWUP40',
                    // below T2 - 3
                    'M2120,360 SWDN20 LR15 SPR10 LR150 SPR10 LR15 SWUP20'

                ]
            }
        ],
        "SIGNALS": [
            // TODO ~2.6km
            {
                signalName: 'SDn_W',
                signalPos: { x: '2000', y: '260' },
                trainPos: { x: '1985', y: '260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO Add signal prediction ~5.1km
            {
                signalName: 'SDn_Sz1N', //? SDn_X
                signalPos: { x: '2000', y: '300' },
                trainPos: { x: '1985', y: '300' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO ~4.9km
            {
                signalName: 'SDn_Z',
                signalPos: { x: '2000', y: '320' },
                trainPos: { x: '1985', y: '320' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn_N',
                signalPos: { x: '2150', y: '260' },
                trainPos: { x: '2165', y: '260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn_O',
                signalPos: { x: '2150', y: '280' },
                trainPos: { x: '2165', y: '280' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn_P',
                signalPos: { x: '2150', y: '300' },
                trainPos: { x: '2165', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn_R',
                signalPos: { x: '2150', y: '320' },
                trainPos: { x: '2165', y: '320' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn_S',
                signalPos: { x: '2140', y: '340' },
                trainPos: { x: '2155', y: '340' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn_T',
                signalPos: { x: '2140', y: '360' },
                trainPos: { x: '2155', y: '360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn_U',
                signalPos: { x: '2140', y: '380' },
                trainPos: { x: '2155', y: '380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn1_D',
                signalPos: { x: '2310', y: '260' },
                trainPos: { x: '2295', y: '260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn1_E',
                signalPos: { x: '2310', y: '280' },
                trainPos: { x: '2295', y: '280' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDN1_F',
                signalPos: { x: '2310', y: '320' },
                trainPos: { x: '2295', y: '320' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn1_G',
                signalPos: { x: '2310', y: '340' },
                trainPos: { x: '2295', y: '340' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn1_H',
                signalPos: { x: '2310', y: '360' },
                trainPos: { x: '2295', y: '360' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn1_J',
                signalPos: { x: '2310', y: '380' },
                trainPos: { x: '2295', y: '380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn1_K',
                signalPos: { x: '2310', y: '400' },
                trainPos: { x: '2295', y: '400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn1_L',
                signalPos: { x: '2310', y: '420' },
                trainPos: { x: '2295', y: '420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SDn1_M',
                signalPos: { x: '2310', y: '440' },
                trainPos: { x: '2295', y: '440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO ~4km peron 2km
            {
                signalName: 'SDn_A',
                signalPos: { x: '2450', y: '260' },
                trainPos: { x: '2465', y: '260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO ~3.4km
            {
                signalName: 'SDn_B',
                signalPos: { x: '2450', y: '300' },
                trainPos: { x: '2465', y: '300' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO ~3.4km
            {
                signalName: 'SDn_C',
                signalPos: { x: '2450', y: '320' },
                trainPos: { x: '2465', y: '320' },
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
                    pos: { x: 2220, y: 220 },
                    posFlipped: { x: 2220, y: 500 }
                },
                platforms: [
                    { label: 'Peron I', width: 80, height: 10, pos: { x: 2165, y: 245 } },
                    { label: 'Peron II', width: 80, height: 10, pos: { x: 2165, y: 285 } },
                ],
                trackLabels: [
                    { text: '5', pos: { x: 2230, y: 260 } },
                    { text: '3', pos: { x: 2230, y: 280 } },
                    { text: '1', pos: { x: 2230, y: 300 } },
                    { text: '2', pos: { x: 2230, y: 320 } },
                ]
            },
        ]
    },
    "SOSNOWIECDANDOWKA_JULIUSZ_KAZIMIERZ": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    // TEND
                    'M2460,260 LR80 TEND',
                    'M2460,300 LR80 TEND',
                    'M2460,320 LR80 TEND',
                    // TSTART
                    'M10,680 TSTART LR150 LR360',
                    'M10,820 TSTART LR130',
                    'M10,840 TSTART LR130',
                ]
            }
        ],
        "SIGNALS": [],
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Sosnowiec Porąbka',
                    pos: { x: 405, y: 660 },
                    posFlipped: { x: 405, y: 710 },
                    platforms: [
                        { pos: { x: 380, y: 675 }, width: 50, height: 10 }
                    ]
                }
            },
        ]
    },

    "Ju_JULIUSZ": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // SW6
                    'M220,850 SWDN20 LR50',
                    // SW3/4cd
                    'M180,890 LR40,SWUP20 LR15 SWUP20 LR15 SWUP20',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // TOR 1W - T1
                    'M160,830 LR140',
                    // TOR 2W - T2
                    'M160,850 LR140',
                    // SW7/8 SW 1/2
                    'M180,830 SWDN20 LR95 SWUP20',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'Ju_H',
                signalPos: { x: '160', y: '830' },
                trainPos: { x: '145', y: '830' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ju_G',
                signalPos: { x: '160', y: '850' },
                trainPos: { x: '145', y: '850' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO ~4.2km
            {
                signalName: 'Ju_A',
                signalPos: { x: '300', y: '830' },
                trainPos: { x: '315', y: '830' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO ~4.5km
            {
                signalName: 'Ju_B',
                signalPos: { x: '300', y: '850' },
                trainPos: { x: '315', y: '850' },
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
                    pos: { x: 230, y: 800 },
                    posFlipped: { x: 230, y: 920 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 185, y: 860 },
                    rotation: 0,
                },
            },
        ]
    },
    "JULIUSZ_DOROTA": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M310,830 LR310 SWDN100 LR365',
                    'M310,850 LR290 SWDN160 LR385',
                ]
            }
        ],
        "SIGNALS": [],
        "ANNOTATIONS": []
    },
    "SMA_SOSNOWIECMACZKI": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // track 5 start & end
                    'M170,1030 LR20',
                    'M370,1030 LR20',
                    // below track 5
                    'M300,1050 LR55 SWUP20',
                    'M300,1070 LR35 SWUP20',
                    'M300,1090 LR15 SWUP20',
                ]
            },
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M20,990 DOT5-5-10',
                    'M15,1010 DOT5-5-10',
                    'M445,1010 DOT5-5-10',

                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // SW track4 - track 5 - SW track3
                    'M180,1010 SWDN20 LR35 SPR10 LR100 SPR10 LR35 SWUP20 LR15 SWUP20 LR15 SWUP20',
                    // track 4
                    'M120,1010 LR100 SPR10 LR100 SPR10 LR100',
                    // track 3
                    'M120,990 LR100 SPR10 LR100 SPR10 LR100',
                    // track 2
                    'M200,990 SWUP20 LR15 SPR10 LR100 SPR10 LR100',
                    // track 1
                    'M180,990 SWUP40 LR35 SPR10 LR100 SWUP20 LR80',
                    // cross
                    'M140,990 CROSS',
                ]
            }
        ],
        "SIGNALS": [
            // TODO ~2.2km
            {
                signalName: 'SMA_B2',
                signalPos: { x: '440', y: '990' },
                trainPos: { x: '455', y: '990' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO ~2.2km
            {
                signalName: 'SMA_B',
                signalPos: { x: '440', y: '970' },
                trainPos: { x: '455', y: '970' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SMA_J',
                signalPos: { x: '340', y: '1030' },
                trainPos: { x: '325', y: '1030' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SMA_H',
                signalPos: { x: '340', y: '1010' },
                trainPos: { x: '325', y: '1010' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SMA_G',
                signalPos: { x: '340', y: '990' },
                trainPos: { x: '325', y: '990' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SMA_F',
                signalPos: { x: '340', y: '970' },
                trainPos: { x: '325', y: '970' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SMA_M',
                signalPos: { x: '220', y: '1030' },
                trainPos: { x: '235', y: '1030' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SMA_N',
                signalPos: { x: '220', y: '1010' },
                trainPos: { x: '235', y: '1010' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'sma_R',
                signalPos: { x: '220', y: '990' },
                trainPos: { x: '235', y: '990' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'sma_O',
                signalPos: { x: '220', y: '970' },
                trainPos: { x: '235', y: '970' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'sma_P',
                signalPos: { x: '220', y: '950' },
                trainPos: { x: '235', y: '950' },
                trainPosDistance: [
                    { distanceToSignal: 2500, x: 430, y: 770 },
                    { distanceToSignal: 500, x: 235, y: 950 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'sma_V',
                signalPos: { x: '120', y: '1010' },
                trainPos: { x: '105', y: '1010' },
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
                    pos: { x: 220, y: 930 },
                    posFlipped: { x: 280, y: 1100 }
                },
            },
        ]
    },
    "SOSNOWIECMACZKI_SOSNOWIECKAZIMIERZ": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M415,930 LR5 LINE422.5,925 LU67.5 SPU35 LU47.5 LINE425,770 LR105',
                ]
            }
        ],
        "SIGNALS": [],
        "ANNOTATIONS": []
    },
    "SOSNOWIECMACZKI_DOROTA": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M450,970 LR145 SPR15 LR400',
                    'M450,990 LR145 SPR15 LR400',
                ]
            }
        ],
        "SIGNALS": [],
        "ANNOTATIONS": []
    },
    "SKz_SOSNOWIECKAZIMIERZ": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // T3
                    'M695,670 LR15 SPR10 LR100 SPR10 LR15 LINE850,665',
                    // T4
                    'M650,790 LR20 SPR10 LR100 SPR10 LR20',
                    // T10
                    'M695,810 SWDN40 LR15',
                    // T8
                    'M715,810 SWDN20 LR15',

                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // TOR 1D - T1 - TOR 1S
                    'M540,690 LR170 SPR10 LR100 SPR10 LR60',
                    // TOR 1M - T2
                    'M540,770 LR130 SPR10 LR100 SPR10 LR55 SWUP80',
                    // T13
                    'M560,690 SWDN20 LR15 SPR10 LR100 UTLD40 LL100',
                    'M560,770 SWUP20 LR15',
                    // T5
                    'M680,690 SWUP40 LR25 SPR10 LR100 SPR10 LR35 SWDN40',
                    // T6
                    'M630,770 SWDN20 LR15 SWDN20 LR15 SPR10 LR100 SPR10 LR15 SWUP20 LR15 SWUP20',
                ]
            }
        ],
        "SIGNALS": [
            // TODO ~4km peron 500m
            {
                signalName: 'SKz_S',
                signalPos: { x: '540', y: '690' },
                trainPos: { x: '525', y: '690' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_T',
                signalPos: { x: '540', y: '770' },
                trainPos: { x: '525', y: '770' },
                trainPosDistance: [
                    { distanceToSignal: 1100, x: 325, y: 950 },
                    { distanceToSignal: 500, x: 525, y: 770 },
                ],
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_R',
                signalPos: { x: '710', y: '650' },
                trainPos: { x: '725', y: '650' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_P',
                signalPos: { x: '710', y: '670' },
                trainPos: { x: '725', y: '670' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_O',
                signalPos: { x: '710', y: '690' },
                trainPos: { x: '725', y: '690' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_N',
                signalPos: { x: '580', y: '710' },
                trainPos: { x: '595', y: '710' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_M',
                signalPos: { x: '580', y: '750' },
                trainPos: { x: '595', y: '750' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_L',
                signalPos: { x: '670', y: '770' },
                trainPos: { x: '685', y: '770' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_K',
                signalPos: { x: '670', y: '790' },
                trainPos: { x: '685', y: '790' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_J',
                signalPos: { x: '670', y: '810' },
                trainPos: { x: '685', y: '810' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_C',
                signalPos: { x: '830', y: '650' },
                trainPos: { x: '815', y: '650' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_D',
                signalPos: { x: '830', y: '670' },
                trainPos: { x: '815', y: '670' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_E',
                signalPos: { x: '830', y: '690' },
                trainPos: { x: '815', y: '690' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_F',
                signalPos: { x: '790', y: '770' },
                trainPos: { x: '775', y: '770' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_G',
                signalPos: { x: '790', y: '790' },
                trainPos: { x: '775', y: '790' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_H',
                signalPos: { x: '790', y: '810' },
                trainPos: { x: '775', y: '810' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_A',
                signalPos: { x: '890', y: '690' },
                trainPos: { x: '905', y: '690' },
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
                    pos: { x: 710, y: 610 },
                    posFlipped: { x: 710, y: 880 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 830, y: 620 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron I', width: 80, height: 10, pos: { x: 690, y: 755 } },
                    { label: 'Peron II', width: 80, height: 10, pos: { x: 730, y: 695 } },
                    { label: 'Peron III', width: 80, height: 10, pos: { x: 730, y: 635 } },
                ],
                trackLabels: [
                    { text: '5', pos: { x: 770, y: 650 } },
                    { text: '3', pos: { x: 770, y: 670 } },
                    { text: '1', pos: { x: 770, y: 690 } },
                    { text: '13', pos: { x: 692.5, y: 730 } },
                    { text: '2', pos: { x: 730, y: 770 } },
                    { text: '4', pos: { x: 730, y: 790 } },
                    { text: '6', pos: { x: 730, y: 810 } },
                ]
            },
        ]
    },
    "Dra_DOROTA": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // TOR 1J - TB
                    'M895,950 DOT5-5-10 SPR10 LR50',
                    // SW28
                    'M1140,910 LR15 SWDN40',
                    // SW9/10 SW15/16
                    'M1060,1030 SWUP20',
                    'M1115,1030 SWUP20',
                    'M1045,1030 LR85'
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // TOR 1S - JA
                    'M1000,930 LR115 SWDN20',
                    // TB - TOR 1W
                    'M1050,950 LR130',
                    // TOR 1M - TC - TOR 1P
                    'M1020,970 LR160',
                    // TOR 2M - TD - TOR 2P
                    'M1020,990 LR160',
                    // TOR 2S - TE - TOR 2W
                    'M1000,1010 LR180',
                    // SW7/8 - SW11/12 - SW24/25
                    'M1040,930 SWDN20 LR35 SWDN20 LR50 SWUP20',
                    // SW14/13 - SW26/27
                    'M1080,1010 SWUP20 LR50 SWDN20',
                    // middle CORSS
                    'M1100,970 CROSS',

                ]
            }
        ],
    "SIGNALS": [
            // TODO ~4.2km
            {
                signalName: 'Dra_A',
                signalPos: { x: '1000', y: '930' },
                trainPos: { x: '985', y: '930' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Dra_B',
                signalPos: { x: '1000', y: '950' },
                trainPos: { x: '985', y: '950' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO ~2.2km
            {
                signalName: 'Dra_C',
                signalPos: { x: '1020', y: '970' },
                trainPos: { x: '1005', y: '970' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO ~2.2km
            {
                signalName: 'Dra_D',
                signalPos: { x: '1020', y: '990' },
                trainPos: { x: '1005', y: '990' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO ~4.5km
            {
                signalName: 'Dra_E',
                signalPos: { x: '1000', y: '1010' },
                trainPos: { x: '985', y: '1010' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO ~2.6km
            {
                signalName: 'Dra_M',
                signalPos: { x: '1180', y: '950' },
                trainPos: { x: '1195', y: '950' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO ~2km
            {
                signalName: 'Dra_L',
                signalPos: { x: '1180', y: '970' },
                trainPos: { x: '1195', y: '970' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO ~2km
            {
                signalName: 'Dra_K',
                signalPos: { x: '1180', y: '990' },
                trainPos: { x: '1195', y: '990' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO ~2.6km
            {
                signalName: 'Dra_J',
                signalPos: { x: '1180', y: '1010' },
                trainPos: { x: '1195', y: '1010' },
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
                    pos: { x: 1090, y: 880 },
                    posFlipped: { x: 1090, y: 1090 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 1100, y: 1040 },
                    rotation: 0,
                },
            },
        ]
    },
    "DOROTA_DABROWAGORNICZAPOLUDNIOWA": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1190,970 LR335 LINE1527.5,965 LU7.5 SPU15 LU247.5 LINE1530,690 LR50 SPR35 LR165',
                    'M1190,990 LR355 LINE1547.5,985 LU27.5 SPU15 LU207.5 LINE1550,730 LR30 SPR35 LR165',
                ]
            }
        ],
        "SIGNALS": [],
        "ANNOTATIONS": []
    },
    "KAZIMIERZ_DGSTRZEMIESZYCE": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M900,690 LR215',
                ]
            }
        ],
        "SIGNALS": [],
        "ANNOTATIONS": []
    },
    "DS_DABROWAGORNICZASTREMIESZYCE": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // T2 left
                    'M925,670 DOT5-5-11 LR40',
                    // below T4 - 1
                    'M1095,710 LR90 SPR10 LR100 SPR10 LR65',
                    // below T4 - 2
                    'M1165,710 SWDN20 LR15 SPR10 LR100 SPR10 LR45',
                    // below T4 - 3
                    'M1105,710 SWDN60 LR75 SPR10 LR100 SPR10 LR15 SWUP20',
                    'M1165,750 SWDN20',
                    // T4 right
                    'M1395,690 LR25',
                    // peron I left SW
                    'M1105,650 SWUP20 LR15'

                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // T1
                    'M1025,650 LR120 SPR10 LR200 SPR10 LR100',
                    // T2
                    'M1025,690 LR20 LINE1065,670 LR80 SPR10 LR200 SPR10 LR100',
                    // SW T2 - T1 near peron on left
                    'M1125,670 SWUP20',
                    // SW T1 - T4 - SW T1 - SW T2
                    'M1085,650 SWDN20 LR15 SWDN20 LR35 SPR10 LR200 SPR10 LR35 SWUP20 LR15 SWUP20 LR15 SWDN20',
                    // SW T4 -  playable track below T4 - SW T4
                    'M1125,690 SWDN20 LR15 SWDN40 LR35 SPR10 LR100 SPR10 LR35 SWUP20 LR15 SWUP20 LR15 SWUP20'
                ]
            }
        ],
        "SIGNALS": [
            // TODO ~2.5km
            {
                signalName: 'DS_Z',
                signalPos: { x: '1025', y: '650' },
                trainPos: { x: '1010', y: '650' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_W',
                signalPos: { x: '1025', y: '690' },
                trainPos: { x: '1010', y: '690' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_V',
                signalPos: { x: '1145', y: '650' },
                trainPos: { x: '1160', y: '650' },
                trainPosDistance: [
                    { distanceToSignal: 250, x: 1260, y: 650 },
                    { distanceToSignal: 100, x: 1160, y: 650 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_U',
                signalPos: { x: '1145', y: '670' },
                trainPos: { x: '1160', y: '670' },
                trainPosDistance: [
                    { distanceToSignal: 300, x: 1260, y: 670 },
                    { distanceToSignal: 200, x: 1160, y: 670 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_Q',
                signalPos: { x: '1145', y: '690' },
                trainPos: { x: '1160', y: '690' },
                trainPosDistance: [
                    { distanceToSignal: 360, x: 1260, y: 690 },
                    { distanceToSignal: 200, x: 1160, y: 690 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_T',
                signalPos: { x: '1185', y: '710' },
                trainPos: { x: '1200', y: '710' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_S',
                signalPos: { x: '1185', y: '730' },
                trainPos: { x: '1200', y: '730' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_R',
                signalPos: { x: '1185', y: '750' },
                trainPos: { x: '1200', y: '750' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_P',
                signalPos: { x: '1185', y: '770' },
                trainPos: { x: '1200', y: '770' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_E',
                signalPos: { x: '1365', y: '650' },
                trainPos: { x: '1350', y: '650' },
                trainPosDistance: [
                    { distanceToSignal: 380, x: 1250, y: 650 },
                    { distanceToSignal: 200, x: 1350, y: 650 },
                ],
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_F',
                signalPos: { x: '1365', y: '670' },
                trainPos: { x: '1350', y: '670' },
                trainPosDistance: [
                    { distanceToSignal: 380, x: 1250, y: 670 },
                    { distanceToSignal: 200, x: 1350, y: 670 },
                ],
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_G',
                signalPos: { x: '1365', y: '690' },
                trainPos: { x: '1350', y: '690' },
                trainPosDistance: [
                    { distanceToSignal: 380, x: 1250, y: 690 },
                    { distanceToSignal: 200, x: 1350, y: 690 },
                ],
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_H',
                signalPos: { x: '1305', y: '710' },
                trainPos: { x: '1290', y: '710' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_J',
                signalPos: { x: '1305', y: '730' },
                trainPos: { x: '1290', y: '730' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_K',
                signalPos: { x: '1305', y: '750' },
                trainPos: { x: '1290', y: '750' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DS_L',
                signalPos: { x: '1305', y: '770' },
                trainPos: { x: '1290', y: '770' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO ~1.5km
            {
                signalName: 'DS_A',
                signalPos: { x: '1465', y: '650' },
                trainPos: { x: '1480', y: '650' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO ~1.5km
            {
                signalName: 'DS_B',
                signalPos: { x: '1465', y: '670' },
                trainPos: { x: '1480', y: '670' },
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
                    pos: { x: 1245, y: 600 },
                    posFlipped: { x: 1245, y: 800 }
                },
                platforms: [
                    { label: 'Peron I', width: 80, height: 10, pos: { x: 1175, y: 635 } },
                    { label: 'Peron II', width: 100, height: 10, pos: { x: 1175, y: 675 } },
                ],
                trackLabels: [
                    { text: '1', pos: { x: 1255, y: 650 } },
                    { text: '2', pos: { x: 1255, y: 670 } },
                    { text: '4', pos: { x: 1255, y: 690 } },
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
                    'M1810,710 LR30',
                    // T3 right
                    'M2060,710 LR30',
                    // track below T2
                    'M1885,730 SWDN20 LR35 SPR10 LR100 SPR10 LR140 SWUP20',
                    'M1905,750 SWDN20 LR150 SWUP20',
                    'M1925,770 SWDN20 LR15',
                    'M2005,770 SWDN20 LR15',
                    // track below T2 last
                    'M2180,750 LR20',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // T1
                    'M1790,690 LR120 SPR10 LR100 SPR10 LR175 SWDN20 LR40',
                    // T2
                    'M1790,730 LR120 SPR10 LR100 SPR10 LR220',
                    // T3 - T2 SW near Peron on left
                    'M1830,690 SWDN20 LR75 SPR10 LR100 SPR10 LR35 SWDN20',
                    // SW on left T2 - T3 - T1
                    'M1845,730 SWUP20 LR35 SWUP20',
                    // SW on left T3 - T2
                    'M1865,710 SWDN20',
                    // SW near Peron on left
                    'M2045,710 SWUP20',
                    // SW near Peron on right
                    'M2215,730 LR10 SWUP20',
                ]
            }
        ],
        "SIGNALS": [
            // TODO ~2km
            {
                signalName: 'DP1_M',
                signalPos: { x: '1790', y: '690' },
                trainPos: { x: '1775', y: '690' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO ~2km
            {
                signalName: 'DP1_K',
                signalPos: { x: '1790', y: '730' },
                trainPos: { x: '1775', y: '730' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DP1_J',
                signalPos: { x: '1910', y: '690' },
                trainPos: { x: '1925', y: '690' },
                trainPosDistance: [
                    { distanceToSignal: 750, x: 2110, y: 690 },
                    { distanceToSignal: 300, x: 1925, y: 690 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DP1_H3',
                signalPos: { x: '1910', y: '710' },
                trainPos: { x: '1925', y: '710' },
                trainPosDistance: [
                    { distanceToSignal: 750, x: 2110, y: 730 },
                    { distanceToSignal: 300, x: 1925, y: 730 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DP1_H',
                signalPos: { x: '1910', y: '730' },
                trainPos: { x: '1925', y: '730' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DP1_G',
                signalPos: { x: '1925', y: '750' },
                trainPos: { x: '1940', y: '750' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DP_B1',
                signalPos: { x: '2030', y: '690' },
                trainPos: { x: '2015', y: '690' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DP_B3',
                signalPos: { x: '2030', y: '710' },
                trainPos: { x: '2015', y: '710' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DP_C',
                signalPos: { x: '2030', y: '730' },
                trainPos: { x: '2015', y: '730' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },{
                signalName: 'DP_D',
                signalPos: { x: '2045', y: '750' },
                trainPos: { x: '2030', y: '750' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO ~3.5km
            {
                signalName: 'DP_A',
                signalPos: { x: '2250', y: '710' },
                trainPos: { x: '2265', y: '710' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO ~3.5km
            {
                signalName: 'DP_L',
                signalPos: { x: '2250', y: '730' },
                trainPos: { x: '2265', y: '730' },
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
                    pos: { x: 2000, y: 650 },
                    posFlipped: { x: 2000, y: 820 }
                },
                platforms: [
                    { label: 'Peron I', width: 80, height: 30, pos: { x: 2120, y: 695 } },
                ],
                trackLabels: [
                    { text: '1', pos: { x: 1970, y: 690 } },
                    { text: '3', pos: { x: 1970, y: 710 } },
                    { text: '2', pos: { x: 1970, y: 730 } },
                ]
            },
        ]
    },
    "DABROWAGORNICZAPOLUDNIOWA_DABROWAGORNICZAHUTAKATOWICE": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M2260,710 LR100',
                    'M2260,730 LR100',
                ]
            }
        ],
        "SIGNALS": [],
        "ANNOTATIONS": []
    },
    "DABROWAGORNICZASTREMIESZYCE_DABROWAGORNICZAHUTAKATOWICE": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1015,650 LL100 LINE912.5,645 LU90 LINE915,550 LR1340 SWDN140 LR100',
                ]
            }
        ],
        "SIGNALS": [],
        "ANNOTATIONS": []
    },
    "721_DGHK_DABROWAGORNICZAHUTAKATOWICE": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M2370,690 LR30 SWDN20 LR10 SWDN20',
                    'M2370,710 LR70',
                    'M2370,730 LR70',
                    'M2390,730 SWUP20'
                ]
            }
        ],
        "SIGNALS": [
            // TODO ~2.5km
            {
                signalName: 'DGHK_N',
                signalPos: { x: '2370', y: '690' },
                trainPos: { x: '2355', y: '690' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO ~3.5km peron 3km
            {
                signalName: 'DGHK_M',
                signalPos: { x: '2370', y: '710' },
                trainPos: { x: '2355', y: '710' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO ~3.5km peron 3km
            {
                signalName: 'DGHK_L',
                signalPos: { x: '2370', y: '730' },
                trainPos: { x: '2355', y: '730' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DGHK_G',
                signalPos: { x: '2440', y: '710' },
                trainPos: { x: '2455', y: '710' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DGHK_H',
                signalPos: { x: '2440', y: '730' },
                trainPos: { x: '2455', y: '730' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Dąbrowa Górnicza Huta Katowice',
                    prefix: 'DGHK',
                    nameToDisplay: 'D.G. Huta Katowice',
                    pos: { x: 2405, y: 665 },
                    posFlipped: { x: 2405, y: 780 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 2390, y: 740 },
                    rotation: 0,
                },
                platforms: [],
                trackLabels: []
            },
        ]
    },
    "DABROWAGORNICZAHUTAKATOWICE_DGZ": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M2450,710 LR60 DOT5-5-4',
                    'M2450,730 LR60 DOT5-5-4',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'DZ_Y',
                invisibleSignal: true,
                signalPos: { x: '2555', y: '710' },
                trainPos: { x: '2540', y: '710' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DZ_Z',
                invisibleSignal: true,
                signalPos: { x: '2555', y: '730' },
                trainPos: { x: '2540', y: '730' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": []
    },
    "DOROTA_DABROWAGORNICZAWSCHODNIA": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1190,950 LR375 SWDN40 LR140',
                    'M1190,1010 LR520',
                ]
            }
        ],
        "SIGNALS": [],
        "ANNOTATIONS": []
    },
    "DABROWAGORNICZASTRZEMIESZYCE_DABROWAGORNICZAWSCHODNIA": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1475,650 LR130 SWDN280 LR100',
                    'M1475,670 LR110 SWDN280 LR120',
                ]
            }
        ],
        "SIGNALS": [],
        "ANNOTATIONS": []
    },
    "DW_DABROWAGORNICZAWSCHODNIA": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // SW21 - T10
                    'M1745,1030 LR75 SWDN20 LR15 SPR10 LR100 SPR10 LR15 SWUP20',
                    // SW21 - T12 - SW59cd/59ab
                    'M1760,1030 SWDN40 LR245 SWUP40',
                    // T16
                    'M1780,1070 SWDN20 LR185 SWUP20',
                    // T18
                    'M1800,1090 SWDN20 LR185 SWUP40',
                    // T20
                    'M1955,1130 LR15 SWUP20',
                    // T22
                    'M2030,1030 LR45',
                    // T44
                    'M2055,1030 SWDN20 LR15',
                    // SW66/67
                    'M2065,910 SWDN20',
                    'M2050,910 LR35'
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // TOR 1T - T1 - TOR 1S
                    'M1720,930 LR80 SPR10 LR200 SPR10 LR100',
                    // TOR 2T - T2 - TOR 2S
                    'M1720,950 LR80 SPR10 LR200 SPR10 LR100',
                    // TOR 1D - T4 - TOR 1K
                    'M1720,990 LR120 SPR10 LR100 SPR10 LR160',
                    // TOR 2D - T6 - TOR 2K
                    'M1720,1010 LR120 SPR10 LR100 SPR10 LR160',
                    // SW1/2 - T8 - SW64/65
                    'M1740,930 SWDN20 LR15 SWDN40 LR15 SWDN20 LR15 SWDN20 LR35 SPR10 LR100 SPR10 LR35 SWUP20 LR15 SWUP20 LR55 SWUP40 LR15 SWUP20',
                    // SW62cd/61ab - SW61cd/59ab - SW59cd/59ab
                    'M1980,1030 LR55 SWUP20 LR15 SWUP20',
                ]
            }
        ],
        "SIGNALS": [
            // TODO ~1.5km
            {
                signalName: 'DW_A',
                signalPos: { x: '1720', y: '930' },
                trainPos: { x: '1705', y: '930' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO ~1.5km
            {
                signalName: 'DW_B',
                signalPos: { x: '1720', y: '950' },
                trainPos: { x: '1705', y: '950' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO ~2.6m
            {
                signalName: 'DW_C',
                signalPos: { x: '1720', y: '990' },
                trainPos: { x: '1705', y: '990' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO ~2.6m
            {
                signalName: 'DW_D',
                signalPos: { x: '1720', y: '1010' },
                trainPos: { x: '1705', y: '1010' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_F',
                signalPos: { x: '1800', y: '930' },
                trainPos: { x: '1815', y: '930' },
                trainPosDistance: [
                    { distanceToSignal: 680, x: 1895, y: 930 },
                    { distanceToSignal: 300, x: 1815, y: 930 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_G',
                signalPos: { x: '1800', y: '950' },
                trainPos: { x: '1815', y: '950' },
                trainPosDistance: [
                    { distanceToSignal: 600, x: 1895, y: 950 },
                    { distanceToSignal: 300, x: 1815, y: 950 },
                ],
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_H',
                signalPos: { x: '1840', y: '990' },
                trainPos: { x: '1855', y: '990' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_J',
                signalPos: { x: '1840', y: '1010' },
                trainPos: { x: '1855', y: '1010' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_K8',
                signalPos: { x: '1840', y: '1030' },
                trainPos: { x: '1855', y: '1030' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_K10',
                signalPos: { x: '1840', y: '1050' },
                trainPos: { x: '1855', y: '1050' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_R',
                signalPos: { x: '2020', y: '930' },
                trainPos: { x: '2005', y: '930' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_P',
                signalPos: { x: '2020', y: '950' },
                trainPos: { x: '2005', y: '950' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_O',
                signalPos: { x: '1960', y: '990' },
                trainPos: { x: '1945', y: '990' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_N',
                signalPos: { x: '1960', y: '1010' },
                trainPos: { x: '1945', y: '1010' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_M8',
                signalPos: { x: '1960', y: '1030' },
                trainPos: { x: '1945', y: '1030' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_M10',
                signalPos: { x: '1960', y: '1050' },
                trainPos: { x: '1945', y: '1050' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO ~3km
            {
                signalName: 'DW_T',
                signalPos: { x: '2120', y: '930' },
                trainPos: { x: '2135', y: '930' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO ~3km
            {
                signalName: 'DW_U',
                signalPos: { x: '2120', y: '950' },
                trainPos: { x: '2135', y: '950' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO ~5km
            {
                signalName: 'DW_W',
                signalPos: { x: '2120', y: '990' },
                trainPos: { x: '2135', y: '990' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO ~5km
            {
                signalName: 'DW_X',
                signalPos: { x: '2120', y: '1010' },
                trainPos: { x: '2135', y: '1010' },
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
                    pos: { x: 1925, y: 880 },
                    posFlipped: { x: 1925, y: 1170 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 1725, y: 1040 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron I', width: 80, height: 10, pos: { x: 1900, y: 935 } },
                ],
                trackLabels: [
                    { text: '1', pos: { x: 1910, y: 930 } },
                    { text: '2', pos: { x: 1910, y: 950 } },
                    { text: '4', pos: { x: 1900, y: 990 } },
                    { text: '6', pos: { x: 1900, y: 1010 } },
                    { text: '8', pos: { x: 1900, y: 1030 } },
                    { text: '10', pos: { x: 1900, y: 1050 } },
                    { text: '12', pos: { x: 1900, y: 1070 } },
                    { text: '16', pos: { x: 1900, y: 1090 } },
                    { text: '18', pos: { x: 1900, y: 1110 } },
                    { text: '20', pos: { x: 1940, y: 1130 } },
                    { text: '22', pos: { x: 2090, y: 1030 } },
                    { text: '24', pos: { x: 2090, y: 1050 } },
                ]
            },
        ]
    },
    "DABROWAGORNICZAWSCHODNIA_KOZIOL_SLAWKOW_1": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M2130,930 LR205 SPR35 LR170 TEND',
                    'M2130,950 LR205 SPR35 LR170 TEND',
                    'M2130,990 LR210 SWUP120 LR195 TEND',
                    'M2130,1010 LR230 SWUP120 LR175 TEND',
                ]
            }
        ],
        "SIGNALS": [],
        "ANNOTATIONS": []
    },
    "DABROWAGORNICZAWSCHODNIA_KOZIOL_SLAWKOW_2": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M10,1230 TSTART LR160',
                    'M10,1250 TSTART LR160',
                    'M10,1390 TSTART LR190',
                    'M10,1410 TSTART LR190',
                ]
            }
        ],
        "SIGNALS": [],
        "ANNOTATIONS": []
    },
    "Kzl_KOZIOL": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M190,1240 LR80 SPR10',
                    'M190,1260 LR80 SPR10',
                    'M210,1240 SWDN20 LR35 SWDN20 LR15 SPR10',
                    'M230,1260 SWUP20'

                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'Kzl_B',
                signalPos: { x: '190', y: '1240' },
                trainPos: { x: '175', y: '1240' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kzl_C',
                signalPos: { x: '190', y: '1260' },
                trainPos: { x: '175', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kzl_L',
                signalPos: { x: '270', y: '1240' },
                trainPos: { x: '285', y: '1240' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kzl_O',
                signalPos: { x: '270', y: '1260' },
                trainPos: { x: '285', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Kzl_J',
                signalPos: { x: '270', y: '1280' },
                trainPos: { x: '285', y: '1280' },
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
                    pos: { x: 230, y: 1210 },
                    posFlipped: { x: 230, y: 1310 }
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
                    'M280,1240 LR150 UTLU60 LL100',
                    'M280,1260 LR175 SWUP80 LR100',
                    'M280,1280 LR162.5 LINE445,1275 LU7.5 SPU15 LU85 SPU35 LU7.5 LINE442.5,1120 LL112.5',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M140,1140 DOT5-5-10 SPR5 LR80 SPR10 LR230 SPR10 LR80',
                    'M135,1160 DOT5-5-10 SPR10 LR80 SPR10 LR230 SPR10 LR80',
                    // To KOZIOL
                    'M280,1140 SWDN20 LR15 SWDN20',
                    'M140,1180 DOT5-5-10 SPR5 LR80',
                    'M260,1140 SWUP20 LR55',
                    'M570,1180 LR15 SWUP20 LR15 SWUP20 LR15 SWDN20'
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'DTA_Z',
                signalPos: { x: '240', y: '1160' },
                trainPos: { x: '225', y: '1160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DTA_E2',
                signalPos: { x: '320', y: '1120' },
                trainPos: { x: '335', y: '1120' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DTA_F1',
                signalPos: { x: '320', y: '1140' },
                trainPos: { x: '335', y: '1140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DTA_F2',
                signalPos: { x: '320', y: '1160' },
                trainPos: { x: '335', y: '1160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DTA_E1',
                signalPos: { x: '320', y: '1180' },
                trainPos: { x: '335', y: '1180' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DTA_C1',
                signalPos: { x: '570', y: '1140' },
                trainPos: { x: '555', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DTA_C2',
                signalPos: { x: '570', y: '1160' },
                trainPos: { x: '555', y: '1160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'DTA_D',
                signalPos: { x: '570', y: '1180' },
                trainPos: { x: '555', y: '1180' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO Add signal prediction ~6.7km
            {
                signalName: 'DTA_B',
                signalPos: { x: '650', y: '1140' },
                trainPos: { x: '665', y: '1140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO Add signal prediction ~6.7km
            {
                signalName: 'DTA_A',
                signalPos: { x: '650', y: '1160' },
                trainPos: { x: '665', y: '1160' },
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
                    pos: { x: 450, y: 1090 },
                    posFlipped: { x: 320, y: 1210 }
                },
            },
        ]
    },
    "DGTOWAROWA_PRZEMIARKI": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M660,1140 LR480',
                    'M660,1160 LR480',
                ]
            }
        ],
        "SIGNALS": [],
        "ANNOTATIONS": []
    },
    "3398_Pmi_PRZEMIARKI": {
        "TRACKS": [
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    'M1150,1140 LR50',
                    'M1150,1160 LR50',
                    'M1160,1160 SWUP20 LR20 SWDN20',
                ]
            },
        ],
        "SIGNALS": [
            {
                signalName: 'Pmi_B',
                signalPos: { x: '1200', y: '1140' },
                trainPos: { x: '1215', y: '1140' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Pmi_A',
                signalPos: { x: '1200', y: '1160' },
                trainPos: { x: '1215', y: '1160' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO Add signal prediction ~6.7km
            {
                signalName: 'Pmi_C',
                signalPos: { x: '1150', y: '1140' },
                trainPos: { x: '1135', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO Add signal prediction ~6.7km
            {
                signalName: 'Pmi_D',
                signalPos: { x: '1150', y: '1160' },
                trainPos: { x: '1135', y: '1160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Przemiarki',
                    prefix: 'Pr',
                    pos: { x: 1175, y: 1115 },
                    posFlipped: { x: 1175, y: 1205 }
                },
                platforms: [],
                trackLabels: []
            },
        ]
    },
    "PRZEMIARKI_LAZYLC": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1210,1140 LR60 DOT5-5-4',
                    'M1210,1160 LR60 DOT5-5-4',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'LC_T',
                invisibleSignal: true,
                signalPos: { x: '1315', y: '1140' },
                trainPos: { x: '1300', y: '1140' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'LC_Z',
                invisibleSignal: true,
                signalPos: { x: '1315', y: '1160' },
                trainPos: { x: '1300', y: '1160' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": []
    },

    "Sl_SLAWKOW": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // T8
                    'M380,1460 SWDN20 LR15 LR120 LR15 SWUP20',
                    // T5
                    'M380,1380 SWUP20 LR15 LR140 LR15 SWDN20',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // TOR 1W - T1
                    'M220,1400 LR100 SPR10 LR200 SPR10 LR100',
                    // TOR 2W - T2
                    'M220,1420 LR100 SPR10 LR200 SPR10 LR100',
                    // SW25cd - T4 - SW1/4d
                    'M280,1420 SWDN20 LR15 LR20 SPR10 LR200 SPR10 LR35 SWUP20',
                    // T6
                    'M360,1440 SWDN20 LR35 SPR10 LR100 SPR10 LR35 SWUP20',
                    // T3
                    'M280,1400 SWUP20 LR15 LR20 SPR10 LR200 SPR10 LR35 SWDN20',
                    // CROSS SW26/25ab SW27/24ab
                    'M240,1400 CROSS',
                    // CROSS SW2/3cd SW1/4cd
                    'M600,1400 CROSS'
                ]
            }
        ],
        "SIGNALS": [
            // TODO ~3km
            {
                signalName: 'Sl_J',
                signalPos: { x: '220', y: '1400' },
                trainPos: { x: '205', y: '1400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO ~3km
            {
                signalName: 'Sl_K',
                signalPos: { x: '220', y: '1420' },
                trainPos: { x: '205', y: '1420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_H3',
                signalPos: { x: '320', y: '1380' },
                trainPos: { x: '335', y: '1380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_H1',
                signalPos: { x: '320', y: '1400' },
                trainPos: { x: '335', y: '1400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_H2',
                signalPos: { x: '320', y: '1420' },
                trainPos: { x: '335', y: '1420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_H4',
                signalPos: { x: '320', y: '1440' },
                trainPos: { x: '335', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_H6',
                signalPos: { x: '400', y: '1460' },
                trainPos: { x: '415', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_E3',
                signalPos: { x: '540', y: '1380' },
                trainPos: { x: '525', y: '1380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_E1',
                signalPos: { x: '540', y: '1400' },
                trainPos: { x: '525', y: '1400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_E2',
                signalPos: { x: '540', y: '1420' },
                trainPos: { x: '525', y: '1420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_E4',
                signalPos: { x: '540', y: '1440' },
                trainPos: { x: '525', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Sl_E6',
                signalPos: { x: '520', y: '1460' },
                trainPos: { x: '505', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO Add signal prediction ~6km peron 2.8km
            {
                signalName: 'Sl_C',
                signalPos: { x: '640', y: '1400' },
                trainPos: { x: '655', y: '1400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO Add signal prediction ~6km peron 2.8km
            {
                signalName: 'Sl_B',
                signalPos: { x: '640', y: '1420' },
                trainPos: { x: '655', y: '1420' },
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
                    pos: { x: 320, y: 1350 },
                    posFlipped: { x: 430, y: 1520 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 450, y: 1320 },
                    rotation: 180,
                },
                platforms: [
                    { label: 'Peron I', width: 80, height: 10, pos: { x: 410, y: 1345 } },
                    { label: 'Peron II', width: 100, height: 10, pos: { x: 390, y: 1405 } },
                ],
                trackLabels: [
                    { text: '5', pos: { x: 470, y: 1360 } },
                    { text: '3', pos: { x: 430, y: 1380 } },
                    { text: '1', pos: { x: 430, y: 1400 } },
                    { text: '2', pos: { x: 430, y: 1420 } },
                    { text: '4', pos: { x: 430, y: 1440 } },
                    { text: '6', pos: { x: 460, y: 1460 } },
                    { text: '8', pos: { x: 460, y: 1480 } },
                ]
            },
        ]
    },
    "SLAWKOW_BUKOWNO": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M650,1400 LR250',
                    'M650,1420 LR250',
                ]
            }
        ],
        "SIGNALS": [],
        "ANNOTATIONS": [
            {
                annotationType: 'poStop',
                poPlatforms: {
                    poName: 'Bukowno Przymiarki',
                    pos: { x: 770, y: 1370 },
                    posFlipped: { x: 770, y: 1370 },
                    platforms: [
                        { pos: { x: 750, y: 1390 }, width: 50, height: 5 },
                        { pos: { x: 750, y: 1425 }, width: 50, height: 5 }
                    ]
                }
            },
        ]
    },
    "Bo_BUKOWNO": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // T11
                    'M1050,1320 SWUP20 LR35 SPR10 LR140 SPR10 LR15 SWDN20',
                    // TOR 1S - T5 - TOR 1S
                    'M1050,1400 SWUP20 LR15 SWUP20 LR15 SPR10 LR120 SPR10 LR15 SWDN20 LR15 SWDN20',
                    // T3
                    'M1020,1380 LR70 SPR10 LR120 SPR10 LR90',
                    // TOR 2B - T6
                    'M950,1460 LR120 SPR10 LR100 SPR10 LR20',
                    // T201
                    'M805,1300 DOT5-5-10 SPR10 LR120 SWUP20 LR35 SPR10 LR140 SPR10 LR75 SWDN40 LR60',
                    // T203
                    'M1050,1280 SWUP20 LR15 SPR10 LR140 SPR10 LR15 SWDN20',
                    // T100 SW106ab/cd
                    'M1300,1360 LR25 SWUP20 LR15 SWUP60 LR15',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // TOR 1S - T1
                    'M910,1400 LR180 SPR10 LR120 SPR10 LR140',
                    // TOR 2S - T2
                    'M910,1420 LR160 SPR10 LR100 SPR10 LR180',
                    // TOR 1B - T4
                    'M910,1440 LR160 SPR10 LR100 SPR10 LR40',
                    // TOR 2B
                    'M910,1460 LR40',
                    // TOR 1B - T11 - TOR 2S
                    'M950,1460 SWUP20 LR15 SWUP20 LR15 SWUP20 LR15 SWUP20 LR15 SWUP60 LR15 SPR220 LR15 SWDN40 LR15 SWDN20 LR15 SWDN20 LR15 SWDN20',
                    // SW42/41 - T8 - SW7/4
                    'M930,1400 SWDN20 LR75 M1010,1420 SWDN20 LR15 SWDN20 LR15 SWDN20 LR15 SPR10 LR100 SPR10 LR15 SWUP20 LR15 SWUP20 LR15 SWUP20 LR35 SWUP20',
                    // T9
                    'M1040,1320 LR50 SPR10 LR140 SPR10 LR20',
                    // T7
                    'M1070,1320 SWDN20 LR15 SPR10 LR140 SPR10 LR15 SWDN20 LR20',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'Bo_T',
                signalPos: { x: '910', y: '1300' },
                trainPos: { x: '895', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO Add signal prediction ~6km peron 2.5km
            {
                signalName: 'Bo_K',
                signalPos: { x: '910', y: '1400' },
                trainPos: { x: '895', y: '1400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO Add signal prediction ~6km peron 2.5km
            {
                signalName: 'Bo_L',
                signalPos: { x: '910', y: '1420' },
                trainPos: { x: '895', y: '1420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO Add signal prediction ~9km
            {
                signalName: 'Bo_O',
                signalPos: { x: '910', y: '1440' },
                trainPos: { x: '895', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO Add signal prediction ~9km
            {
                signalName: 'Bo_P',
                signalPos: { x: '910', y: '1460' },
                trainPos: { x: '895', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_S',
                signalPos: { x: '1070', y: '1260' },
                trainPos: { x: '1085', y: '1260' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_R',
                signalPos: { x: '1070', y: '1280' },
                trainPos: { x: '1085', y: '1280' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F11',
                signalPos: { x: '1090', y: '1300' },
                trainPos: { x: '1105', y: '1300' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F9',
                signalPos: { x: '1090', y: '1320' },
                trainPos: { x: '1105', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F7',
                signalPos: { x: '1090', y: '1340' },
                trainPos: { x: '1105', y: '1340' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F5',
                signalPos: { x: '1090', y: '1360' },
                trainPos: { x: '1105', y: '1360' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F3',
                signalPos: { x: '1090', y: '1380' },
                trainPos: { x: '1105', y: '1380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F1',
                signalPos: { x: '1090', y: '1400' },
                trainPos: { x: '1105', y: '1400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F2',
                signalPos: { x: '1070', y: '1420' },
                trainPos: { x: '1085', y: '1420' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F4',
                signalPos: { x: '1070', y: '1440' },
                trainPos: { x: '1085', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F6',
                signalPos: { x: '1070', y: '1460' },
                trainPos: { x: '1085', y: '1460' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F8',
                signalPos: { x: '1070', y: '1480' },
                trainPos: { x: '1085', y: '1480' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_J',
                signalPos: { x: '1230', y: '1260' },
                trainPos: { x: '1215', y: '1260' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_H',
                signalPos: { x: '1230', y: '1280' },
                trainPos: { x: '1215', y: '1280' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D11',
                signalPos: { x: '1250', y: '1300' },
                trainPos: { x: '1235', y: '1300' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D9',
                signalPos: { x: '1250', y: '1320' },
                trainPos: { x: '1235', y: '1320' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D7',
                signalPos: { x: '1250', y: '1340' },
                trainPos: { x: '1235', y: '1340' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D5',
                signalPos: { x: '1230', y: '1360' },
                trainPos: { x: '1215', y: '1360' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D3',
                signalPos: { x: '1230', y: '1380' },
                trainPos: { x: '1215', y: '1380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D1',
                signalPos: { x: '1230', y: '1400' },
                trainPos: { x: '1215', y: '1400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D2',
                signalPos: { x: '1190', y: '1420' },
                trainPos: { x: '1175', y: '1420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D4',
                signalPos: { x: '1190', y: '1440' },
                trainPos: { x: '1175', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D6',
                signalPos: { x: '1190', y: '1460' },
                trainPos: { x: '1175', y: '1460' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D8',
                signalPos: { x: '1190', y: '1480' },
                trainPos: { x: '1175', y: '1480' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_G',
                signalPos: { x: '1370', y: '1320' },
                trainPos: { x: '1385', y: '1320' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO Add signal prediction ~6km
            {
                signalName: 'Bo_B',
                signalPos: { x: '1370', y: '1400' },
                trainPos: { x: '1385', y: '1400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO Add signal prediction ~6km
            {
                signalName: 'Bo_A',
                signalPos: { x: '1370', y: '1420' },
                trainPos: { x: '1385', y: '1420' },
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
                    pos: { x: 1150, y: 1230 },
                    posFlipped: { x: 1130, y: 1520 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 1015, y: 1470 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron I', width: 60, height: 10, pos: { x: 1110, y: 1405 } },
                    { label: 'Peron II', width: 60, height: 10, pos: { x: 1110, y: 1445 } },
                ],
                trackLabels: [
                    { text: '203', pos: { x: 1150, y: 1260 } },
                    { text: '201', pos: { x: 1150, y: 1280 } },
                    { text: '11', pos: { x: 1170, y: 1300 } },
                    { text: '9', pos: { x: 1170, y: 1320 } },
                    { text: '7', pos: { x: 1170, y: 1340 } },
                    { text: '5', pos: { x: 1160, y: 1360 } },
                    { text: '3', pos: { x: 1160, y: 1380 } },
                    { text: '1', pos: { x: 1160, y: 1400 } },
                    { text: '2', pos: { x: 1130, y: 1420 } },
                    { text: '4', pos: { x: 1130, y: 1440 } },
                    { text: '6', pos: { x: 1130, y: 1460 } },
                    { text: '8', pos: { x: 1130, y: 1480 } },
                ]
            },
        ]
    },
    "BUKOWNO_OLKUSZ": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    'M1380,1320 LR110 SWDN40 LR105',
                ]
            },
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1380,1400 LR220',
                    'M1380,1420 LR210',
                ]
            }
        ],
        "SIGNALS": [],
        "ANNOTATIONS": []
    },
    "O_OLKUSZ": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // T4
                    'M1600,1360 LR350 DOT5-5-11',
                    // T3
                    'M1640,1400 SWUP20 LR35 SPR10 LR100 SPR10 LR15 SWDN20',
                    // Bottom tracks
                    'M1660,1440 SWDN20 LR210 SWUP20',
                    'M1650,1460 LR280',
                    'M1750,1480 LR15 SWUP20 LR15 SWDN20 LR15 SWDN20 LR15',
                    'M1760,1480 LR65',
                    'M1910,1460 SWUP20 LR15',
                ]
            },
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M1970,1400 LR60 DOT5-5-4',
                    'M1970,1420 LR60 DOT5-5-4',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // T1
                    'M1600,1400 LR80 SPR10 LR160 SPR10 LR100',
                    // T2
                    'M1600,1420 LR250 SPR10 LR110',
                    // T2 bottom track
                    'M1620,1400 SWDN20 LR15 SWDN20 LR35 SPR10 LR160 SPR10 LR35 SWUP20',
                    // CROSS on Right
                    'M1920,1400 CROSS'
                ]
            }
        ],
        "SIGNALS": [
            // TODO Add signal prediction ~6km
            {
                signalName: 'O1_H',
                signalPos: { x: '1600', y: '1420' },
                trainPos: { x: '1585', y: '1420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'O1_G',
                signalPos: { x: '1680', y: '1380' },
                trainPos: { x: '1695', y: '1380' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'O1_F',
                signalPos: { x: '1680', y: '1400' },
                trainPos: { x: '1695', y: '1400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'O1_E',
                signalPos: { x: '1680', y: '1440' },
                trainPos: { x: '1695', y: '1440' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'O_B3',
                signalPos: { x: '1800', y: '1380' },
                trainPos: { x: '1785', y: '1380' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'O_B',
                signalPos: { x: '1860', y: '1400' },
                trainPos: { x: '1845', y: '1400' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'O_C',
                signalPos: { x: '1860', y: '1420' },
                trainPos: { x: '1845', y: '1420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'O_D',
                signalPos: { x: '1860', y: '1440' },
                trainPos: { x: '1845', y: '1440' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'O_A',
                signalPos: { x: '1960', y: '1400' },
                trainPos: { x: '1975', y: '1400' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO Add signal prediction
            {
                signalName: 'JO_H',
                invisibleSignal: true,
                signalPos: { x: '2075', y: '1420' },
                trainPos: { x: '2060', y: '1420' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Olkusz',
                    prefix: 'O',
                    pos: { x: 1790, y: 1330 },
                    posFlipped: { x: 1790, y: 1520 }
                },
                platforms: [
                    { label: 'Peron I', width: 80, height: 10, pos: { x: 1700, y: 1365 } },
                    { label: 'Peron II', width: 140, height: 10, pos: { x: 1700, y: 1405 } },
                ],
                trackLabels: [
                    { text: '4', pos: { x: 1790, y: 1360 } },
                    { text: '3', pos: { x: 1740, y: 1380 } },
                    { text: '1', pos: { x: 1770, y: 1400 } },
                    { text: '2', pos: { x: 1770, y: 1420 } },
                ]
            },
        ]
    },
    "285_BG_BOROWAGORKA": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // T1
                    'M210,1530 DOT5-5-11 LR45 SWDN40 LR15 SWDN20 LR15 SWUP20',
                    // T2
                    'M210,1550 DOT5-5-11 LR10 SWDN20 LR15 SWDN20',
                    // T3
                    'M210,1570 DOT5-5-11 LR110',
                    // T4
                    'M210,1590 DOT5-5-10 SPR10 LR110',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: '285_BG_C',
                signalPos: { x: '315', y: '1590' },
                trainPos: { x: '300', y: '1590' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            // TODO Add signal prediction ~9km
            {
                signalName: '285_BG_B',
                signalPos: { x: '425', y: '1570' },
                trainPos: { x: '440', y: '1570' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            // TODO Add signal prediction ~9km
            {
                signalName: '285_BG_A',
                signalPos: { x: '425', y: '1590' },
                trainPos: { x: '440', y: '1590' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
        ],
        "ANNOTATIONS": [
            {
                annotationType: 'station',
                stationLabel: {
                    name: 'Borowa Górka',
                    prefix: 'BG',
                    pos: { x: 350, y: 1510 },
                    posFlipped: { x: 350, y: 1620 }
                },
            },
        ]
    },
    "BOROWAGORKA_BUKOWNO": {
        "TRACKS": [
            {
                color: OUT_OF_STATION_TRACK_COLOR,
                commands: [
                    'M435,1570 LR220 SWUP130 LR240',
                    'M435,1590 LR240 SWUP130 LR220',
                ]
            },
        ],
        "SIGNALS": [],
        "ANNOTATIONS": []
    },
}