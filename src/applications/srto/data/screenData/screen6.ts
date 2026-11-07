import { ScreenData } from "../../types/mapdata-types";

/* ========================================================================================================
    SCREEN 6 = KM STASZIC - STAWISKA - DANDOWKA - JULIUSZ - DABROWA GORNICZA WSCHODNIA - SLAWKOW - BUKONOW
   ======================================================================================================== */

const STATION_TRACK_COLOR = 'rgb(255, 255, 255)';
const OUT_OF_STATION_TRACK_COLOR = 'rgb(120, 120, 120)'
const NON_PLAYABLE_TRACKS_COLOR = 'rgb(60, 60, 60)'

export const SCREEN6_DATA: ScreenData.ScreenDataProps = {

    "Bo_BUKOWNO": {
        "TRACKS": [
            {
                color: NON_PLAYABLE_TRACKS_COLOR,
                commands: [
                    // JT11
                    'M270,620 SWUP20 LR35 SPR10 LR140 SPR10 LR15 SWDN20',
                    // LK62 tor1 - JT5 - LK62 tor1
                    'M270,700 SWUP20 LR15 SWUP20 LR15 SPR10 LR120 SPR10 LR15 SWDN20 LR15 SWDN20',
                    // JT3
                    'M240,680 LR70 SPR10 LR120 SPR10 LR90',
                    // LK156 tor2 - JT6
                    'M170,760 LR120 SPR10 LR100 SPR10 LR20',
                    // JT201
                    'M130,600 LR120 SWUP20 LR35 SPR10 LR140 SPR10 LR75 SWDN40 LR60',
                    // JT203
                    'M270,580 SWUP20 LR15 SPR10 LR140 SPR10 LR15 SWDN20'
                ]
            },
            {
                color: STATION_TRACK_COLOR,
                commands: [
                    // LK62 tor1 - JT1
                    'M130,700 LR180 SPR10 LR120 SPR10 LR140',
                    // LK62 tor2 - JT2
                    'M130,720 LR160 SPR10 LR100 SPR10 LR180',
                    // LK156 tor1 - JT4
                    'M130,740 LR160 SPR10 LR100 SPR10 LR40',
                    // LK156 tor2
                    'M130,760 LR40',
                    // LK156 tor2 - JT11 - LK62 tor2
                    'M170,760 SWUP20 LR15 SWUP20 LR15 SWUP20 LR15 SWUP20 LR15 SWUP60 LR15 SPR220 LR15 SWDN40 LR15 SWDN20 LR15 SWDN20 LR15 SWDN20',
                    // LK62 tor1 - JT8 - LK62 tor1
                    'M150,700 SWDN20 LR75 M230,720 SWDN20 LR15 SWDN20 LR15 SWDN20 LR15 SPR10 LR100 SPR10 LR15 SWUP20 LR15 SWUP20 LR15 SWUP20 LR35 SWUP20',
                    // JT9
                    'M260,620 LR50 SPR10 LR140 SPR10 LR20',
                    // JT7 - JT100
                    'M290,620 SWDN20 LR15 SPR10 LR140 SPR10 LR15 SWDN20 LR20', // LR30 SWUP20 LR15 SWUP40 LR25
                ]
            }
        ],
        "SIGNALS": [
            {
                signalName: 'Bo_T',
                signalPos: { x: '130', y: '600' },
                trainPos: { x: '115', y: '600' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_K',
                signalPos: { x: '130', y: '700' },
                trainPos: { x: '115', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_L',
                signalPos: { x: '130', y: '720' },
                trainPos: { x: '115', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_O',
                signalPos: { x: '130', y: '740' },
                trainPos: { x: '115', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_P',
                signalPos: { x: '130', y: '760' },
                trainPos: { x: '115', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_S',
                signalPos: { x: '290', y: '560' },
                trainPos: { x: '305', y: '560' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_R',
                signalPos: { x: '290', y: '580' },
                trainPos: { x: '305', y: '580' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F11',
                signalPos: { x: '310', y: '600' },
                trainPos: { x: '325', y: '600' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F9',
                signalPos: { x: '310', y: '620' },
                trainPos: { x: '325', y: '620' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F7',
                signalPos: { x: '310', y: '640' },
                trainPos: { x: '325', y: '640' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F5',
                signalPos: { x: '310', y: '660' },
                trainPos: { x: '325', y: '660' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F3',
                signalPos: { x: '310', y: '680' },
                trainPos: { x: '325', y: '680' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F1',
                signalPos: { x: '310', y: '700' },
                trainPos: { x: '325', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F2',
                signalPos: { x: '290', y: '720' },
                trainPos: { x: '305', y: '720' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F4',
                signalPos: { x: '290', y: '740' },
                trainPos: { x: '305', y: '740' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F6',
                signalPos: { x: '290', y: '760' },
                trainPos: { x: '305', y: '760' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_F8',
                signalPos: { x: '290', y: '780' },
                trainPos: { x: '305', y: '780' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_J',
                signalPos: { x: '450', y: '560' },
                trainPos: { x: '435', y: '560' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_H',
                signalPos: { x: '450', y: '580' },
                trainPos: { x: '435', y: '580' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D11',
                signalPos: { x: '470', y: '600' },
                trainPos: { x: '455', y: '600' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D9',
                signalPos: { x: '470', y: '620' },
                trainPos: { x: '455', y: '620' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D7',
                signalPos: { x: '470', y: '640' },
                trainPos: { x: '455', y: '640' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D5',
                signalPos: { x: '450', y: '660' },
                trainPos: { x: '435', y: '660' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D3',
                signalPos: { x: '450', y: '680' },
                trainPos: { x: '435', y: '680' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D1',
                signalPos: { x: '450', y: '700' },
                trainPos: { x: '435', y: '700' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D2',
                signalPos: { x: '410', y: '720' },
                trainPos: { x: '395', y: '720' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D4',
                signalPos: { x: '410', y: '740' },
                trainPos: { x: '395', y: '740' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D6',
                signalPos: { x: '410', y: '760' },
                trainPos: { x: '395', y: '760' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_D8',
                signalPos: { x: '410', y: '780' },
                trainPos: { x: '395', y: '780' },
                signalDirectionOnMap: 'right',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_G',
                signalPos: { x: '590', y: '620' },
                trainPos: { x: '605', y: '620' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_B',
                signalPos: { x: '590', y: '700' },
                trainPos: { x: '605', y: '700' },
                signalDirectionOnMap: 'left',
                signalType: 'station_standard',
            },
            {
                signalName: 'Bo_A',
                signalPos: { x: '590', y: '720' },
                trainPos: { x: '605', y: '720' },
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
                    pos: { x: 370, y: 530 },
                    posFlipped: { x: 350, y: 820 }
                },
                dispatchingPost: {
                    type: 'relay',
                    pos: { x: 235, y: 770 },
                    rotation: 0,
                },
                platforms: [
                    { label: 'Peron I', width: 60, height: 10, pos: { x: 330, y: 705 } },
                    { label: 'Peron II', width: 60, height: 10, pos: { x: 330, y: 745 } },
                ],
                trackLabels: [
                    { text: '203', pos: { x: 370, y: 560 } },
                    { text: '201', pos: { x: 370, y: 580 } },
                    { text: '11', pos: { x: 390, y: 600 } },
                    { text: '9', pos: { x: 390, y: 620 } },
                    { text: '7', pos: { x: 390, y: 640 } },
                    { text: '5', pos: { x: 380, y: 660 } },
                    { text: '3', pos: { x: 380, y: 680 } },
                    { text: '1', pos: { x: 380, y: 700 } },
                    { text: '2', pos: { x: 350, y: 720 } },
                    { text: '4', pos: { x: 350, y: 740 } },
                    { text: '6', pos: { x: 350, y: 760 } },
                    { text: '8', pos: { x: 350, y: 780 } },
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