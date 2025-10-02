const sidebarIsOpen = ref(false)

const toggleSidebar = () => (sidebarIsOpen.value = !sidebarIsOpen.value)

export function useSidebar() {
  return {
    sidebarIsOpen,
    toggleSidebar
  };
}