import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Paul's Portfolio</span>,
  primaryHue: 200,
  project: {
    link: 'https://github.com/FocusedFidgeter/nextra-docs-portfolio',
  },
  chat: {
    link: 'https://discord.com/invite/377dJsmk',
  },
  docsRepositoryBase: 'https://github.com/FocusedFidgeter/nextra-docs-portfolio/blob/main',
  footer: {
    text: 'Paul Devey | © 2024',
  },
  sidebar: {
    defaultMenuCollapseLevel: 2,
    autoCollapse: false,
    toggleButton: true,
    titleComponent: ({ title, type }) => {
      if (type === 'separator') {
        return (
          <div style={{textAlign: 'center' }}>{title}</div>
        )
      }
      return <>{title}</>
    }
  },
  toc: {
    backToTop: true
  }
}

export default config
