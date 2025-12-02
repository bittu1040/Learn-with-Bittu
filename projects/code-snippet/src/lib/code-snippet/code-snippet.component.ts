import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-code-snippet',
  standalone: true,
  imports: [],
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss']
})
export class CodeSnippetComponent {
  @Input() codeSnippet: string = '';
  @Input() copyButton: boolean = true;
  @Input() language: string = 'typescript';
  @Input() theme: 'light' | 'dark' = 'light';
  @Input() showLineNumbers: boolean = false;

  private successMessage: string = 'Code snippet copied to clipboard!';
  private errorMessage: string = 'Failed to copy code snippet.';

  async copyToClipboard(codeSnippet: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(codeSnippet);
      // You can customize this notification method
      this.showNotification(this.successMessage);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      this.fallbackCopyTextToClipboard(codeSnippet);
    }
  }

  private fallbackCopyTextToClipboard(text: string): void {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand('copy');
      this.showNotification(this.successMessage);
    } catch (err) {
      console.error('Fallback: Could not copy text', err);
      this.showNotification(this.errorMessage);
    }

    document.body.removeChild(textArea);
  }

  private showNotification(message: string): void {
    // Simple alert - can be customized with toast notifications
    alert(message);
  }

  get codeLines(): string[] {
    return this.codeSnippet.split('\n');
  }
}
