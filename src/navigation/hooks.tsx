import { useNavigationState } from '@react-navigation/native';

/**
 * Hook to get the current active screen name, even in nested navigators.
 * Supports Drawer, Bottom Tabs, and Stack Navigators.
 */
export const useActiveScreenName = (): string => {
  return useNavigationState((state) => {
    if (!state || state.index === undefined || !state.routes) return 'Unknown';

    const currentRoute = state.routes[state.index];

    // Ensure `state` exists inside `currentRoute`
    if (!currentRoute || !currentRoute.state || !currentRoute.state.routes) {
      return currentRoute?.name || 'Unknown';
    }

    // Handle Nested Navigators (Bottom Tabs inside Drawer)
    const tabRoute = currentRoute.state.index
      ? currentRoute.state.routes[currentRoute.state.index]
      : undefined;

    if (!tabRoute || !tabRoute.state || !tabRoute.state.routes) {
      return tabRoute?.name || 'Unknown';
    }

    // Handle Nested Stack in Home Tab
    const stackRoute = tabRoute.state.index
      ? tabRoute.state.routes[tabRoute.state.index]
      : undefined;

    return stackRoute?.name || tabRoute.name || currentRoute.name;
  });
};
