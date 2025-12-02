# Angular Code Snippet Component

A modern, lightweight Angular standalone component for displaying and copying code snippets with syntax highlighting support.

## Features

✨ **Standalone Component** - No module imports required
🎨 **Theme Support** - Light and dark themes
📱 **Responsive Design** - Works on all screen sizes  
📋 **Copy to Clipboard** - One-click code copying
🔢 **Line Numbers** - Optional line number display
🚀 **Angular 19 Ready** - Built with latest Angular features
⚡ **Lightweight** - Minimal dependencies

## Installation

```bash
npm install angular-code-snippet
```

## Usage

### Basic Usage

```typescript
import { Component } from '@angular/core';
import { CodeSnippetComponent } from 'angular-code-snippet';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [CodeSnippetComponent],
  template: `
    <lib-code-snippet 
      [codeSnippet]="typescriptCode"
      [copyButton]="true">
    </lib-code-snippet>
  `
})
export class ExampleComponent {
  typescriptCode = `
function fibonacci(n: number): number {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
  `;
}
```

### Advanced Usage with All Features

```typescript
@Component({
  selector: 'app-advanced-example',
  standalone: true,
  imports: [CodeSnippetComponent],
  template: `
    <lib-code-snippet 
      [codeSnippet]="reactCode"
      [copyButton]="true"
      [showLineNumbers]="true"
      [theme]="'dark'"
      [language]="'javascript'">
    </lib-code-snippet>
  `
})
export class AdvancedExampleComponent {
  reactCode = `
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
  `;
}
```

## API Reference

### Inputs

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `codeSnippet` | `string` | `''` | The code content to display |
| `copyButton` | `boolean` | `true` | Show/hide the copy button |
| `language` | `string` | `'typescript'` | Programming language label |
| `theme` | `'light' \| 'dark'` | `'light'` | Visual theme |
| `showLineNumbers` | `boolean` | `false` | Display line numbers |

### Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `copyToClipboard(code: string)` | Copy code to clipboard | `Promise<void>` |

## Styling

The component comes with built-in themes, but you can customize the appearance:

### CSS Custom Properties

```css
lib-code-snippet {
  --code-bg: #f8f9fa;
  --code-color: #495057;
  --code-border: #e9ecef;
  --button-bg: #007bff;
  --button-color: #fff;
}
```

### Custom Themes

```scss
lib-code-snippet {
  &.custom-theme {
    .code-snippet-container {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }
  }
}
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](LICENSE) file for details.

## Changelog

### v1.0.0
- ✨ Initial release with Angular 19 support
- ✨ Standalone component architecture
- ✨ Theme support (light/dark)
- ✨ Line numbers support
- ✨ Modern control flow syntax
- ✨ Improved copy functionality with fallback
- ✨ Responsive design
- ✨ Accessibility improvements

## Support

If you find this package helpful, please consider:
- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting features
- 📖 Contributing to documentation

---

Built with ❤️ by [bittu-kumar-tfs](https://github.com/bittu-kumar-tfs)
