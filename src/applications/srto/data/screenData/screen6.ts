import { ScreenData } from "../../types/mapdata-types";

/* ========================================================================================================
    SCREEN 6 = KM STASZIC - STAWISKA - DANDOWKA - JULIUSZ - DABROWA GORNICZA WSCHODNIA - SLAWKOW - BUKONOW
   ======================================================================================================== */

const STATION_TRACK_COLOR = 'rgb(255, 255, 255)';
const OUT_OF_STATION_TRACK_COLOR = 'rgb(120, 120, 120)'
const NON_PLAYABLE_TRACKS_COLOR = 'rgb(60, 60, 60)'

export const SCREEN6_DATA: ScreenData.ScreenDataProps = {
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
                    'M930,1200 LR120 SPR10 LR100 SPR10 LR60',
                    // TOR 1M - T2
                    'M930,1280 LR80 SPR10 LR100 SPR10 LR55 SWUP80',
                    // T13
                    'M950,1200 SWDN20 LR15 SPR10 LR50 UTLD40 LL50',
                    'M950,1280 SWUP20 LR15',
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
                signalPos: { x: '930', y: '1200' },
                trainPos: { x: '915', y: '1200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_T',
                signalPos: { x: '930', y: '1280' },
                trainPos: { x: '915', y: '1280' },
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
                signalPos: { x: '970', y: '1220' },
                trainPos: { x: '985', y: '1220' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'SKz_M',
                signalPos: { x: '970', y: '1260' },
                trainPos: { x: '985', y: '1260' },
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
                    pos: { x: 1080, y: 1100 },
                    posFlipped: { x: 1080, y: 1390 }
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
                    'M690,220 SWDN20 LR50',
                    // SW3/4cd
                    'M650,260 LR40,SWUP20 LR15 SWUP20 LR15 SWUP20',
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // TOR 1W - T1
                    'M630,200 LR140',
                    // TOR 2W - T2
                    'M630,220 LR140',
                    // SW7/8 SW 1/2
                    'M650,200 SWDN20 LR95 SWUP20',
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'Ju_H',
                signalPos: { x: '630', y: '200' },
                trainPos: { x: '615', y: '200' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ju_G',
                signalPos: { x: '630', y: '220' },
                trainPos: { x: '615', y: '220' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ju_A',
                signalPos: { x: '770', y: '200' },
                trainPos: { x: '785', y: '200' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Ju_B',
                signalPos: { x: '770', y: '220' },
                trainPos: { x: '785', y: '220' },
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
                    pos: { x: 700, y: 170 },
                    posFlipped: { x: 700, y: 290 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 655, y: 230 },
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
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'DW_G',
                signalPos: { x: '210', y: '980' },
                trainPos: { x: '225', y: '980' },
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
                    pos: { x: 340, y: 910 },
                    posFlipped: { x: 340, y: 1200 }
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