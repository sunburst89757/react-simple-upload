import * as React from 'react';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    icon?: string;
    status?: 'success' | 'error' | 'uploading' | 'paused' | 'waiting';
  }
}
