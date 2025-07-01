# sfs-file-type

File type mappings for SFS (Simple File Server).

## Installation

```sh
npm install sfs-file-type
```

## Usage

```typescript
import {
  dotExtensionToCategotry,
  extensionToCategotry,
  fileExtensions,
} from "sfs-file-type";

console.log(dotExtensionToCategotry(".jpg")); // e.g., 'image'
console.log(extensionToCategotry("mp3")); // e.g., 'audio'
```

## API

- `dotExtensionToCategotry(extension: string): string` — Get category from extension with dot (e.g., ".jpg").
- `extensionToCategotry(extension: string): string` — Get category from extension without dot (e.g., "jpg").
- `fileExtensions` — Object mapping categories to extension arrays.
