import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'
import { PropsWithChildren, useEffect } from 'react'

import ProductMenu from 'components/ui/ProductMenu'
import { useSelectedProject, useStore, withAuth } from 'hooks'
import ProjectLayout from '../'
import { generateDatabaseMenu } from './RealtimeMenu.utils'

export interface DatabaseLayoutProps {
  title?: string
}

const RealtimeLayout = ({ children }: PropsWithChildren<DatabaseLayoutProps>) => {
  const { ui, meta } = useStore()
  const project = useSelectedProject()

  const router = useRouter()
  const page = router.pathname.split('/')[4]

  useEffect(() => {
    if (ui.selectedProjectRef) {
      meta.publications.load()
    }
  }, [ui.selectedProjectRef])

  return (
    <ProjectLayout
      isLoading={meta.publications.isLoading}
      product="Realtime"
      productMenu={<ProductMenu page={page} menu={generateDatabaseMenu(project)} />}
    >
      <main className="h-screen">{children}</main>
    </ProjectLayout>
  )
}

export default withAuth(observer(RealtimeLayout))
