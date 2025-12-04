import { CssBaseline, ThemeProvider } from '@mui/material'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { MainTheme } from '@/theme'

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <ThemeProvider theme={MainTheme}>
        <CssBaseline />
        <Outlet />
      </ThemeProvider>
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </>
  ),
})
