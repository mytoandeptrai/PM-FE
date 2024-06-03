import { FCC } from '@/types';

import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

interface Props {}

const Provider: FCC<Props> = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
      {children}
      <Toaster />
    </ThemeProvider>
  );
};

export default Provider;
