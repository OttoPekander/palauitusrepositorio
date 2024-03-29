# Exercise 0.4

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate server
    server->>server: Processing POST Data and saving the new note
    server->>browser: HTTP Redirect Response /exampleapp/notes
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    browser->>browser: Executing JavaScript code that fetches the JSON from the server   
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "", "date": "2023-09-21T15:40:58.922Z" }, ... ]
    deactivate server    

    Note right of browser: The browser executes the callback function that renders the notes 



```

# Exercise 0.5

```mermaid
sequenceDiagram
    participant browser
    participant server

    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the spa.js file
    deactivate server

    browser->>browser: Running the JavaScript file which will then get the data.json
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: json containing the notes returned by the server
    deactivate server

    browser->>browser: Executing JavaScript which creates the content for the page

    Note right of browser: The browser executes the callback function that renders the notes 

```


# Exercise 0.6

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server->>server: Processing POST Data and saving the new note
    server->>browser: text response {"message":"note created"}
    deactivate server

    Note right of browser: New note was stored in variable
    Note right of browser: No redirect needed like in non spa function thus page does not reload

    browser->>browser: Executing JavaScript which creates the content for the page

    Note right of browser: The browser executes the callback function that renders the notes. 
    

```