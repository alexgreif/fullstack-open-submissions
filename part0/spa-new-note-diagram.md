```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/spa_new_note
    activate server
    server-->>browser: Confirmation that note was created
    deactivate server

    Note right of browser: The browser executes the callback function that renders updated list of notes
```