import { Switch, Route } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/react';
import ReactGA from "react-ga4";
import Home from "@/pages/Home";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/not-found";

function Router() {
  // For analytics tracking
  useEffect(() => {
    const handleLocationChange = () => {
      if (import.meta.env.VITE_GA_TRACKING_ID) {
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  // For GitHub Pages compatibility, we'll use a simpler approach
  // Instead of complex routing, we'll just modify paths in components as needed
  
  return (
    <Switch>
      <Route path="/" component={Home}/>
      <Route path="/admin" component={Admin}/>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    if (import.meta.env.VITE_GA_TRACKING_ID) {
      ReactGA.initialize(import.meta.env.VITE_GA_TRACKING_ID);
      // Send initial pageview
      ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
      <Analytics />
    </QueryClientProvider>
  );
}

export default App;
