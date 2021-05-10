import { ThemeProvider } from './features/theme/ThemeContext';
import { ThemeSelector } from './features/theme/ThemeSelector';
import { Todos } from './features/todos/Todos';

const style = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  flexFlow: 'column nowrap',
};

const App = () => {
  return (
    <div style={style}>
      <ThemeProvider>
        <ThemeSelector />
        <Todos />
      </ThemeProvider>
    </div>
  );
};

export default App;
