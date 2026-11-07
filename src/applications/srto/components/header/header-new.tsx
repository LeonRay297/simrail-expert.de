import styles from './header-new.module.css'
import { SetStateAction, useEffect, useState } from 'react'
import { SimRailDataTypes } from '../../types/simrail-api'
import { DebugRenderOptions, UserOptions } from '../../types/types'
import { ScreenPanel } from './components/screen-panel/screen-panel'
import { ServerPanel } from './components/server-panel/server-panel'
import { SettingsPanel } from './components/settings-panel/settings-panel'
import { getAPIEndpoint } from '../../utilities/getAPIEndpoints'
import { serverTimeOffsetFallback } from '../../data/customData'

interface ISelfProps {
    userOptions: UserOptions
    setUserOptions: React.Dispatch<SetStateAction<UserOptions>>
    showChangelog: boolean
    setShowChangelog: React.Dispatch<SetStateAction<boolean>>
    serverData: SimRailDataTypes.ServerData[]
    playerCount: SimRailDataTypes.PlayerCount
    debugRenderOptions: DebugRenderOptions
    setDebugRenderOptions: React.Dispatch<React.SetStateAction<DebugRenderOptions>>
    isDebugEnabled: boolean
}

export type OpenPanel = 'screen' | 'server' | 'settings' | 'changelog'
export interface ServerTimeOffset {
    [k: string]: number
}

export default function Header({
    userOptions,
    setUserOptions,
    showChangelog,
    setShowChangelog,
    serverData,
    playerCount,
    debugRenderOptions,
    setDebugRenderOptions,
    isDebugEnabled
}: ISelfProps) {

    const [openPanel, setOpenPanel] = useState<OpenPanel | null>(null);
    const [timeString, setTimeString] = useState<string[]>([]);
    const [timezoneOffset, setTimezoneOffset] = useState<ServerTimeOffset>();

    useEffect(() => {
        let isFetching = false
        let cancelled = false;
        let activeController: AbortController | null = null;

        async function getServerTimeOffset() {
            if (isFetching) return;
            isFetching = true;

            const controller = new AbortController();
            activeController = controller;
            const FETCH_TIMEOUTID = window.setTimeout(() => controller.abort(), 4000)

            try {
                const DATA = await getAPIEndpoint('serverTimeOffset', controller.signal) as ServerTimeOffset;

                if (cancelled || controller.signal.aborted) return;

                setTimezoneOffset(DATA ?? serverTimeOffsetFallback);
            } catch (e) {
                if (cancelled) return;

                // Optional: ignore expected abort logs
                if (e instanceof DOMException && e.name === "AbortError") {
                    setTimezoneOffset(serverTimeOffsetFallback);
                    return;
                }

                console.error(e);
                setTimezoneOffset(serverTimeOffsetFallback);
            } finally {
                window.clearTimeout(FETCH_TIMEOUTID);
                if (activeController === controller) activeController = null;
                isFetching = false;
            }
        }

        getServerTimeOffset();

        return () => {
            cancelled = true;
            activeController?.abort();
        }
    }, []);

    useEffect(() => {
        const intervalID = setInterval(getCurrentTime, 5000);
        
        function getCurrentTime() {
            if(!timezoneOffset) return;
            const formatHHMM = (hours: number, minutes: number): string => {
                const paddedHours = String(hours).padStart(2, '0');
                const paddedMinutes = String(minutes).padStart(2, '0');
                return `${paddedHours}:${paddedMinutes}`;
            };

            const localTime = new Date();
            const localHHMM = formatHHMM(localTime.getHours(), localTime.getMinutes());

            const utcMs = localTime.getTime() + localTime.getTimezoneOffset() * 60 * 1000;
            const offsetHours = timezoneOffset[userOptions.selectedServer as keyof typeof timezoneOffset] ?? 0;
            const serverTime = new Date(utcMs + (offsetHours * 60 * 60 * 1000));
            const serverHHMM = formatHHMM(serverTime.getHours(), serverTime.getMinutes());

            setTimeString([localHHMM, serverHHMM]);
        }
        getCurrentTime();

        return () => clearInterval(intervalID)
    }, [userOptions.selectedServer, timezoneOffset])

    function togglePanel(panel: OpenPanel) {
        setOpenPanel(prev => (prev === panel ? null : panel));
    }

    const PanelObj = {
        userOptions,
        setUserOptions,
        serverData,
        playerCount,
        openPanel,
        togglePanel
    }

    const SettingsObj = {
        userOptions,
        setUserOptions,
        openPanel,
        togglePanel,
        debugRenderOptions,
        setDebugRenderOptions,
        isDebugEnabled
    }

    return (
        <>
            <header id={styles.headerRoot} className={styles.container}>

                <section className={styles.brand}>
                    <span className={styles.dot}></span>
                    SRTO
                </section>

                <section className={styles.screen}>
                    <div className={styles.badge}>
                        {userOptions.selectedScreen.screenTitle.slice(0, 2).trim()}
                    </div>
                    <div className={styles.screenName}>
                        {userOptions.selectedScreen.screenTitle.slice(5)}
                    </div>
                </section>

                <section className={styles.clockPanel}>
                    <div className={styles.clock}>
                        <span className={styles.clockLabel}>LOCAL</span>
                        <span className={styles.clockTime}>{timeString[0]}</span>
                    </div>
                    <div className={styles.clockseperator}></div>
                    <div className={`${styles.clock} ${styles.clockServer}`}>
                        <span className={styles.clockLabel}>{userOptions.selectedServer.toLocaleUpperCase()}</span>
                        <span className={styles.clockTime}>{timeString[1]}</span>
                    </div>
                </section>

                <section className={styles.buttonPanel}>
                    <button
                        className={`${styles.actionButton} ${openPanel === 'screen' && styles.active}`}
                        id='actionButton-screen'
                        onClick={() => { togglePanel('screen') }}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                            <rect x="3" y="4" width="18" height="12" rx="1.5"></rect>
                            <path d="M8 20h8M12 16v4"></path>
                        </svg>
                        Screen
                    </button>
                    <button
                        className={`${styles.actionButton} ${openPanel === 'server' && styles.active}`}
                        id='actionButton-server'
                        onClick={() => { togglePanel('server') }}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                            <rect x="4" y="4" width="16" height="6" rx="1"></rect>
                            <rect x="4" y="14" width="16" height="6" rx="1"></rect>
                            <circle cx="8" cy="7" r=".6" fill="currentColor" stroke="none"></circle>
                            <circle cx="8" cy="17" r=".6" fill="currentColor" stroke="none"></circle>
                        </svg>
                        Server
                    </button>
                    <button
                        className={`${styles.actionButton} ${openPanel === 'settings' && styles.active}`}
                        id='actionButton-settings'
                        onClick={() => { togglePanel('settings') }}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9c.26.42.7.7 1.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z"></path>
                        </svg>
                    </button>
                </section>
                <ScreenPanel {...PanelObj} />
                <ServerPanel {...PanelObj} />
                <SettingsPanel {...SettingsObj} />
            </header>
            <main
                className={`${styles.backdrop} ${(openPanel === 'screen' || openPanel === 'server') && styles.dimDown} ${openPanel != null && styles.enable}`}
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpenPanel(null);
                }}
            ></main>
        </>
    )
}