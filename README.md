# ClearGov shadcn/ui Theme

A professional blue theme for shadcn/ui components, perfect for government and enterprise applications. This theme provides a consistent, accessible, and modern design system built on top of shadcn/ui.

## Features

- 🎨 Professional blue color scheme
- 🏢 Enterprise-ready components
- 🌗 Dark mode support
- ♿ Accessibility-first design
- 🎯 Optimized for government and enterprise applications

## Installation

```bash
# Using npm
npm install @cleargov/shadcn-theme

# Using pnpm
pnpm add @cleargov/shadcn-theme

# Using yarn
yarn add @cleargov/shadcn-theme
```

## Setup

1. Add the theme to your `tailwind.config.ts`:

```typescript
import { tailwindConfig } from '@cleargov/shadcn-theme'

export default {
  ...tailwindConfig,
  // Your custom configuration here
}
```

2. Update your `components.json`:

```json
{
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "blue",
    "cssVariables": true
  }
}
```

3. Import and use the components:

```typescript
import { Button } from '@cleargov/shadcn-theme'

export default function MyComponent() {
  return (
    <Button variant="default">
      Click me
    </Button>
  )
}
```

## Available Components

All components from shadcn/ui are available with our custom theme applied:

- Button
- Card
- Dialog
- Input
- And many more...

## Contributing

We welcome contributions! Please see our contributing guide for details.

## License

MIT License - see the [LICENSE](LICENSE) file for details.
