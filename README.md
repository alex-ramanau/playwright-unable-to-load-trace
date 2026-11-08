# Trace Viewer is blank in Chrome after loading a trace

A valid `trace.zip` opens in Trace Viewer in Firefox, but the viewer shows an empty screen in Google Chrome, with no error in DevTools Console.

## Steps

1. Create the trace:

   ```bash
   npm ci
   npx playwright install chromium
   npx playwright test
   ```

   The trace is written to `test-results/<test-folder>/trace.zip`.

2. Open <https://trace.playwright.dev> in Google Chrome and drop `trace.zip` on the page.

3. Open the same page in Firefox and drop the same file on it.

## Expected

Chrome shows the trace: the action list, timeline and Network tab, as Firefox does.

## Actual

- **Chrome:** empty screen after the file is loaded, and nothing in DevTools Console.
- **Firefox:** the trace opens normally.

## Environment

| | |
|---|---|
| Chrome | 156.0.8078.79 (Official Build) (x86_64), Linux |
| Firefox | works |
| Trace Viewer (trace.playwright.dev) | 1.65.0 |
| `@playwright/test` that wrote the trace | 1.63.0 |
| Chrome incognito window | blank, the same behavior|
