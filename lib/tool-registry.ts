export const toolRegistry = {
  nmap: {
    label: 'Nmap',
    description: 'Network and service discovery',
  },
  burp: {
    label: 'Burp Suite',
    description: 'Manual HTTP testing workflow',
  },
  ffuf: {
    label: 'ffuf',
    description: 'Content discovery and fuzzing',
  },
} as const

export function getToolDefinition(tool: string) {
  return toolRegistry[tool as keyof typeof toolRegistry]
}
