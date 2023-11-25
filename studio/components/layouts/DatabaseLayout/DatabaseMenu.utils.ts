import { Project } from 'types'
import { ProductMenuGroup } from 'components/ui/ProductMenu/ProductMenu.types'
import { IS_PLATFORM } from 'lib/constants'

export const generateDatabaseMenu = (
  project?: Project,
  flags?: {
    pgNetExtensionExists: boolean
    isNewAPIDocsEnabled: boolean
  }
): ProductMenuGroup[] => {
  const ref = project?.ref ?? 'default'
  const { pgNetExtensionExists, isNewAPIDocsEnabled } = flags || {}

  return [
    {
      title: 'Database',
      items: [
        // { name: 'Tables', key: 'tables', url: `/project/${ref}/database/tables`, items: [] },
        {
          name: 'Schema Visualizer',
          key: 'schemas',
          url: `/project/${ref}/database/schemas`,
          items: [],
        },
        // {
        //   name: 'Triggers',
        //   key: 'triggers',
        //   url: `/project/${ref}/database/triggers`,
        //   items: [],
        // },
        {
          name: 'Functions',
          key: 'functions',
          url: `/project/${ref}/database/functions`,
          items: [],
        },
        // {
        //   name: 'Extensions',
        //   key: 'extensions',
        //   url: `/project/${ref}/database/extensions`,
        //   items: [],
        // },
        // 1
        // {
        //   name: 'Indexes',
        //   key: 'indexes',
        //   url: `/project/${ref}/database/indexes`,
        //   items: [],
        // },
        {
          name: 'Enumerated Types',
          key: 'types',
          url: `/project/${ref}/database/types`,
          items: [],
        },
        // ...(isNewAPIDocsEnabled
        //   ? [
        //       {
        //         name: 'GraphiQL',
        //         key: 'graphiql',
        //         url: `/project/${ref}/database/graphiql`,
        //         items: [],
        //       },
        //     ]
        //   : []),
      ],
    },
  ]
}
