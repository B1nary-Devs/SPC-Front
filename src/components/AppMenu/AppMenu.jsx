import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PersonIcon from '@mui/icons-material/Person';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Visão Geral',
  },
  {
    segment: 'home',
    title: 'User',
    icon: <PersonIcon />,
  },
  {
    segment: 'home',
    title: 'Home',
    icon: <HomeIcon />,
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <BarChartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Análitico',
  },
  {
    segment: 'duplicatas',
    title: 'Duplicatas',
    icon: <InsertDriveFileIcon />,
    children: [
      {
        segment: 'duplicatesDue',
        title: 'A vencer',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'expiredDue',
        title: 'Vencidas',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'completedDue',
        title: 'Finalizadas',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: 'sacados',
    title: 'Sacados',
    icon: <GroupIcon />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function AppMenu(props) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
