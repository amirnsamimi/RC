## Hyper Text Transfer Protocol

## Backend

1. Browser Loads HTML webpage render and inject Data then re-render
2. Browser Get entire webpage and render

## How Browser communicate with our Backend Server ?

- with HTTP or the secure model HTTPS on top of TCP
- we work less directly with TCP

## What is TCP ?

TCP (Transmission Control Protocol)

1. TCP is like a reliable phone call.
   It makes sure every message you send gets received, and in the right order.
2. When you send data over TCP:
   It breaks your data into small packets.
   Sends them one by one.
   Waits for the receiver to say “Got it!” (acknowledgment).
   If a packet gets lost, TCP resends it.
   The receiver puts packets back in the right order.
3. Use TCP when you need accuracy and reliability, like:
   - Loading web pages (HTTP/HTTPS)
   - Sending emails
   - File transfers

## What is UDP ?

UDP (User Datagram Protocol)

1. UDP is like sending postcards in the mail.
   You send your message, but you don’t check if it arrived or if it was received in order.
2. UDP just sends packets without waiting for confirmation or fixing mistakes.
   It’s much faster and uses less overhead than TCP, but less reliable.
3. Use UDP when speed is more important than perfect delivery, like:
   - Live video or audio streaming
   - Online games
   - Voice calls (VoIP)

## How TCP Works ?

How TCP Works — Step by Step

1. Connection Establishment (The Handshake)
   Before sending any data, TCP sets up a connection between the two computers using a three-way handshake:

Client → Server: Sends a SYN (synchronize) message to start the connection. via IP on specific PORT
Server → Client: Replies with SYN-ACK (synchronize-acknowledge).
Client → Server: Sends ACK (acknowledge) back.
Now the connection is open, and data can start flowing.

2. Data Transfer
   TCP breaks your data (like a webpage or file) into small pieces called packets.
   Each packet gets a sequence number so the receiver knows the order.
   The sender waits for the receiver to send an acknowledgment (ACK) for received packets.
   If packets get lost or corrupted, TCP retransmits them.
   The receiver reassembles packets in the right order using sequence numbers.

3. Flow Control
   TCP manages how fast data is sent so the receiver isn’t overwhelmed.
   It adjusts sending speed based on network conditions, which helps avoid congestion.

4. Connection Termination
   When data transfer is done, TCP closes the connection gracefully using a process where both sides send FIN (finish) and ACK messages to end the session.

## Why is TCP Important?

Reliable: Guarantees data arrives correctly and in order.
Error-checked: Detects and fixes errors during transmission.
Ordered: Keeps data packets in sequence.
Connection-oriented: Creates a stable, ongoing connection for communication.

## We focus on HTTP/HTTPS.

- Protocol Means how you send the format and the server knows how to wrap the packages up to be in the order sent.
- HyperText Transfer Protocol

```html
<div>
  <img src="https://something" alt="sthing-image" />
</div>
```

- on browsers network we have some requests
- curl http://localhost:3000
- curl http://localhost:3000 --verbose / - curl -v http://localhost:3000. explain what is it doing.
- nc -l -p 2222 ( create an empty server on 2222 )

request:
```bash
GET /todos HTTP/1.1
Host: example.com
User-Agent: MyClient/1.0
Accept: application/json
Connection: keep-alive
```

- GET /todos HTTP/1.1 Makes a read-only request for /todos
  ➡️ Server may log the request.
  ➡️ May trigger rate limiting, analytics tracking, or caching.
  ➡️ No body changes expected by HTTP spec — but some badly implemented servers might mutate data!
- Host: example.com Specifies the domain you're requesting
  ➡️ None directly. Required in HTTP/1.1, used by virtual hosting.
  ➡️ Could affect routing in multi-tenant servers.
- User-Agent: MyClient/1.0 Identifies the client
  ➡️ Server might tailor responses, log or fingerprint clients.
  ➡️ Could lead to user tracking or discrimination (e.g., by bot detection).
- Accept: application/json States desired response format
  ➡️ Influences content negotiation — server might serve different representations.
  ➡️ No data mutation, but could affect what gets returned.
- Connection: keep-alive Reuse TCP connection for more requests
  ➡️ Keeps socket open longer — can use more server resources.
  ➡️ May improve performance but risks resource leaks on both sides.

📌 Important Notes
GET requests should be side-effect free by spec. But some non-idempotent APIs (badly designed) might still mutate state — e.g., logging reads, updating timestamps, or triggering server-side workflows.
Headers themselves don’t mutate anything but can change behavior or result in tracking/fingerprinting.


response:
```bash
HTTP/1.1 200 OK
Content-Type: application/json
cache-control: max-age=3600
Content-Length: 103
Date: Mon, 21 Jul 2025 10:00:00 GMT
Connection: keep-alive

[
  { "id": 1, "title": "Finish Course Videos", "isDone": false },
  { "id": 2, "title": "Handle Add Side Effect", "isDone": true }
]
```

- HTTP/1.1 200 OK Successful request
- Content-Type: application/json Response body is JSON
- Cache-control: how long user can cache data and don't send requests to update
- Content-Length Size of response body
- Date Timestamp of response
- JSON body	List of todo objects with id, title, and isDone properties

- https default port is 443
- http default port is 80

```bash 

GET / HTTP/1.1
HOST: localhost:2222 
User-Agent: curl/8.0.1
Accept: */*

```
- host is beacuse we might have different apps on server


## Internet, Domain, DNS, url, Query Params, paths


![The Anatomy of Complex Url](https://mailchimp.com/ctf/images/yzco4xsimv0y/7yArd1lnzrkrKPq4BvYDTE/aafd59d3a650981e25496f4e0429f34d/MailChimp_Blog_Post_-17_graphic_-3-01.png?w=980&q=70)


## WireShark

- sudo apt-get install wireshark ( linux )
- download .dmg ( macos )


## Importants

- Method Terms ( POST , PATCH , PUT , GET , DELETE, HEAD, OPTION )

| Method   | Description                                                                 | Safe | Idempotent |
|----------|-----------------------------------------------------------------------------|------|------------|
| **GET**      | Retrieves data from the server.                                           | ✅   | ✅         |
| **POST**     | Sends data to create a new resource.                                      | ❌   | ❌         |
| **PUT**      | Replaces the entire resource.                                             | ❌   | ✅         |
| **PATCH**    | Partially updates a resource.                                             | ❌   | ❌         |
| **DELETE**   | Deletes the specified resource.                                           | ❌   | ✅         |
| **HEAD**     | Same as GET but returns only headers (no body).                          | ✅   | ✅         |
| **OPTIONS**  | Returns allowed HTTP methods and server capabilities.                    | ✅   | ✅         |

### 🔍 Notes
- **Safe**: Method does **not change** server state (no side effects).
- **Idempotent**: Repeating the request has the **same effect** as doing it once.

What Is Idempotent in HTTP?
In HTTP, a method is idempotent if making the same request multiple times results in the same server state as making it once.

Think of it like pressing a light switch to turn off the light:

First press → light turns off.
Second press → nothing changes (light is already off).
That's idempotent.

- Status Codes
    1. 200 Code ( success )
    2. 300 Code ( needs to change )
    3. 400 Code ( errors with the request - sanctions, auth, ... )
    4. 500 Code ( Server errors with appliction server )