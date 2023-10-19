import { PlayCircle, StopCircle } from 'lucide-react'
import { Dispatch, SetStateAction } from 'react'
import { Button } from 'ui'
import { ChooseChannelPopover } from './ChooseChannelPopover'

import { RealtimeFilterPopover } from './RealtimeFilterPopover'
import { RealtimeTokensPopover } from './RealtimeTokensPopover'
import { UseRealtimeLogsPreviewParams } from './useRealtimeLogsPreviewer'

interface HeaderProps {
  config: UseRealtimeLogsPreviewParams
  onSetConfig: Dispatch<SetStateAction<UseRealtimeLogsPreviewParams>>
}

export const Header = ({ config, onSetConfig }: HeaderProps) => {
  return (
    <div className="flex flex-row h-14 gap-2.5 items-center px-4">
      <div className="flex flex-row">
        <ChooseChannelPopover config={config} onSetConfig={onSetConfig} />
        <Button
          className="rounded-l-none border-l-0"
          type={config.enabled ? 'primary' : 'default'}
          size="tiny"
          icon={config.enabled ? <StopCircle size="16" /> : <PlayCircle size="16" />}
          onClick={() => onSetConfig({ ...config, enabled: !config.enabled })}
        >
          <span>{config.enabled ? `Stop listening` : `Start listening`}</span>
        </Button>
      </div>
      <RealtimeTokensPopover config={config} onSetConfig={onSetConfig} />
      <RealtimeFilterPopover config={config} onSetConfig={onSetConfig} />
    </div>
  )
}
