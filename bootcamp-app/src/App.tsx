import ErrorBoundary from './components/ErrorBoundary';
import { ThemeProvider, useTheme } from './features/theme/ThemeContext';
import { ThemeSelector } from './features/theme/ThemeSelector';
import { Todos } from './features/todos/Todos';

const style = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexFlow: 'column nowrap',
};

const errorOutput = <p>An error occured</p>;

const App = () => {
  return (
    <div style={style}>
      <ErrorBoundary errorOutput={errorOutput}>
        <ThemeProvider>
          <ThemeSelector />
          <Todos />
        </ThemeProvider>
      </ErrorBoundary>
    </div>
  );
};

export default App;
