import { NextPageWithLayout } from 'types'

import RealtimeLogs from 'components/interfaces/Realtime/Inspector/Logs/LogsPreviewer'
import RealtimeLayout from 'components/layouts/RealtimeLayout/RealtimeLayout'

export const LogPage: NextPageWithLayout = () => {
  return <RealtimeLogs />
}

LogPage.getLayout = (page) => <RealtimeLayout title="Realtime">{page}</RealtimeLayout>

export default LogPage
