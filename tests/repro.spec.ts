import { test, expect } from "@playwright/test";

// Everything is mocked, so the test needs no server and no internet access.
// The fetch gives the trace an entry in its Network tab.
const html = `<!doctype html>
<title>Trace repro</title>
<button onclick="fetch('/api/hello').then((r) => r.json()).then((d) => (output.textContent = d.message))">Load</button>
<p id="output"></p>`;

test("produces a trace", async ({ page }) => {
  await page.route("https://repro.test/", (route) => route.fulfill({ contentType: "text/html", body: html }));
  await page.route("https://repro.test/api/hello", (route) => route.fulfill({ json: { message: "Hello" } }));

  await page.goto("https://repro.test/");
  await page.getByRole("button", { name: "Load" }).click();
  await expect(page.getByText("Hello")).toBeVisible();
});
