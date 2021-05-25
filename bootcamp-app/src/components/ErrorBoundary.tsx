import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorProps {
  errorOutput: ReactNode;
}

interface ErrorState {
  hasError: boolean;
}

// But really, you could just install react-error-boundary from npm, and you won't need to bother with making class components ever again (I hope)
class ErrorBoundary extends Component<ErrorProps, ErrorState> {
  constructor(props: ErrorProps) {
    super(props); // This is mandatory when having a constructor
    this.state = { hasError: false }; // This is how you create state on a class component
  }

  static getDerivedStateFromError(): ErrorState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    return this.state.hasError ? this.props.errorOutput : this.props.children;
  }
}

export default ErrorBoundary;
