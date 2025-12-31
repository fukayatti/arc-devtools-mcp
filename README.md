# Arc DevTools MCP Server

This is a modified version of the [Chrome DevTools MCP Server](https://github.com/ChromeDevTools/chrome-devtools-mcp) optimized for the **Arc Browser**.

## Why this fork?

The original Chrome DevTools MCP server uses `Target.createTarget` (equivalent to `browser.newPage()`) to open new tabs. This method causes the **Arc Browser** to crash immediately due to conflicts with its unique tab/space management system.

This fork modifies the `new_page` tool to:

1.  **Reuse an existing blank page** (`about:blank`) if available.
2.  **Reuse the last active page** if no blank page is found.
3.  Only fall back to `newPage()` as a last resort (though this may still crash Arc).

This allows AI assistants like Claude, Cursor, and Gemini to control Arc without causing stability issues.

## Usage

### Prerequisites

1.  **Arc Browser** installed on macOS.
2.  **Node.js** (v18 or higher) and **pnpm** installed.

### Installation

1.  Clone this repository:

    ```bash
    git clone https://github.com/your-username/arc-devtools-mcp.git
    cd arc-devtools-mcp
    ```

2.  Install dependencies:

    ```bash
    pnpm install
    ```

3.  Build the project:
    ```bash
    npm run build
    ```

### Configuration (Claude / Cursor / Gemini)

Add the following to your MCP configuration file (e.g., `~/Library/Application Support/Cursor/User/globalStorage/mcp-config.json` or equivalent):

```json
{
  "mcpServers": {
    "arc-devtools": {
      "command": "node",
      "args": [
        "/absolute/path/to/arc-devtools-mcp/build/src/index.js",
        "--browser-url=http://127.0.0.1:9222"
      ]
    }
  }
}
```

### Running Arc with Remote Debugging

You **must** start Arc with the remote debugging port enabled for this to work.
Run this command in your terminal:

```bash
/Applications/Arc.app/Contents/MacOS/Arc --remote-debugging-port=9222
```

(Note: Arc must be fully quit before running this command.)

## Verification

Once connected, you can use MCP tools like `list_pages`, `navigate_page`, `take_screenshot`, etc., safely within Arc.

## License

Apache-2.0 (Same as the original project)
