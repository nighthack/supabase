import { useState } from 'react'

import { Header } from './Header'
import LogTable from './LogTable'
import useRealtimeLogsPreview, { UseRealtimeLogsPreviewParams } from './useRealtimeLogsPreviewer'

/**
 * Acts as a container component for the entire log display
 */
export const RealtimeLogsPreviewer = () => {
  const [realtimeConfig, setRealtimeConfig] = useState<UseRealtimeLogsPreviewParams>({
    enabled: false,
    projectRef: '',
    channelName: 'room_a',
    logLevel: 'info',
    token: '',
    schema: 'public',
    table: '*',
    tableId: undefined,
    filter: undefined,
    bearer: null,
    enablePresence: true,
    enableDbChanges: true,
    enableBroadcast: true,
  })
  console.log(realtimeConfig)

  const { logData, sendEvent } = useRealtimeLogsPreview(realtimeConfig)

  return (
    <div className="flex flex-col flex-grow h-full">
      {/* <PreviewFilterPanel
        condensedLayout={condensedLayout}
        config={realtimeConfig}
        onSetConfig={setRealtimeConfig}
        sendEvent={sendEvent}
      /> */}
      <Header config={realtimeConfig} onSetConfig={setRealtimeConfig} />
      <div className="relative flex flex-col flex-grow h-full">
        <div className="flex h-full">
          <LogTable enabled={realtimeConfig.enabled} data={logData} />
        </div>
      </div>
    </div>
  )
}

export default RealtimeLogsPreviewer
