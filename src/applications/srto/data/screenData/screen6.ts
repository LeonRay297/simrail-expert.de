import { ScreenData } from "../../types/mapdata-types";

/* ========================================================================================================
    SCREEN 6 = KM STASZIC - STAWISKA - DANDOWKA - JULIUSZ - DABROWA GORNICZA WSCHODNIA - SLAWKOW - BUKONOW
   ======================================================================================================== */

const STATION_TRACK_COLOR = 'rgb(255, 255, 255)';
const OUT_OF_STATION_TRACK_COLOR = 'rgb(120, 120, 120)'
const NON_PLAYABLE_TRACKS_COLOR = 'rgb(60, 60, 60)'

export const SCREEN6_DATA: ScreenData.ScreenDataProps = {
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
                    pos: { x: 340, y: 1410 },
                    posFlipped: { x: 340, y: 1620 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 340, y: 1433 },
                    rotation: 180,
                },
                platforms: [
                    { label: 'Peron II', width: 80, height: 10, pos: { x: 300, y: 1505 } },
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
                    'M270,1780 SWUP20 LR15 SPR10 LR140 SPR10 LR15 SWDN20'
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
                    // T7 - T100
                    'M290,1820 SWDN20 LR15 SPR10 LR140 SPR10 LR15 SWDN20 LR20', // LR30 SWUP20 LR15 SWUP40 LR25
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