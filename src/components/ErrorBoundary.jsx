import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
          <h2 className="text-3xl font-bold uppercase text-white mb-4">
            Something went wrong
          </h2>
          <p className="text-gray-300 max-w-md mb-6">
            We encountered an unexpected issue. Please return to the homepage or refresh the page.
          </p>
          <button
            onClick={() => {
              this.setState({ hasError: false });
              window.location.href = "/";
            }}
            className="border-2 border-red bg-red px-6 py-3 font-bold uppercase text-white shadow-lg shadow-orange/30 transition-all duration-300 hover:bg-matte-black hover:border-red hover:text-white"
          >
            Back to Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
