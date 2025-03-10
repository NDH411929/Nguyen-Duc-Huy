# Scoreboard API Module Specification

## Overview

This module handles real-time updates to a scoreboard by tracking user scores. Users increase their scores through actions, and the system ensures only authorized updates are allowed.

## Functional Requirements

1. Display the Top 10 Scores: The scoreboard should always show the top 10 highest scores.

2. Live Updates: The scoreboard updates in real time as users gain points.

3. Score Updates via API: When a user completes an action, an API call updates their score.

4. Authorization & Security:

   - Ensure only valid users can update their scores.

   - Prevent unauthorized or excessive score increments.

5. Data Persistence: Store user scores in a database and cache leaderboard in Redis.

## API Endpoints

### 1. Get Top 10 Scores

`GET /api/scores/?top=10`

Response:

```
[
  { "userId": "user1", "score": 200 },
  { "userId": "user2", "score": 180 },
  { "userId": "user3", "score": 170 },
  { "userId": "user4", "score": 160 },
  { "userId": "user5", "score": 150 },
  { "userId": "user6", "score": 140 },
  { "userId": "user7", "score": 130 },
  { "userId": "user8", "score": 120 },
  { "userId": "user9", "score": 110 },
  { "userId": "user10", "score": 100 }
]
```

### 2. Update User Score

`POST /api/score/update`

Request Body:

```
{
  "userId": "user1",
  "increment": 10
}
```

Response:

```
{
  "success": true,
  "newScore": 20
}
```


## Security Measures

- Authentication: Use JWT or OAuth2 for user authentication.

- Rate Limiting: Limit score updates to prevent spam.

- Anti-Tampering: Verify actions before increasing scores.

- Data Integrity: Store score changes in an audit log for tracking.

## Real-Time Updates with WebSockets

- Implement a WebSocket server to push live scoreboard updates to clients.

- Clients subscribe to the WebSocket channel to receive updates instantly.

- Reduces API polling and improves performance.

## Execution Flow Diagram

```
+------------------+       +------------------+       +------------------+       +------------------+
|      User        | ----> | Frontend Client  | ----> | Backend Server   | ----> | Database (MongoDB)|
+------------------+       +------------------+       +------------------+       +------------------+
         |                          |                          |                          |
         | 1. Perform Action        |                          |                          |
         |------------------------->|                          |                          |
         |                          | 2. API Call (/score/update)                         |
         |                          |------------------------->|                          |
         |                          |                          | 3. Validate & Authorize  |
         |                          |                          |------------------------->|
         |                          |                          | 4. Update Score          |
         |                          |                          |------------------------->|
         |                          |                          | 5. Return New Score      |
         |                          |<-------------------------|                          |
         |                          | 6. Update UI             |                          |
         |<-------------------------|                          |                          |
         |                          |                          |                          |
         |                          | 7. Fetch Top 10 Scores (/scores/?top=10)            |
         |                          |------------------------->|                          |
         |                          |                          | Retrieve & Return Data   |
         |                          |<-------------------------|                          |
         |                          | 8. Display Scoreboard    |                          |
         |<-------------------------|                          |                          |

```


## Improvements & Recommendations

- Use Redis for Leaderboard Caching: Store top 10 scores in Redis for faster lookups.

- Audit Logs: Maintain logs of score updates for security monitoring.

- WebSocket-Based Push Updates: Instead of polling, push updates to connected clients in real-time.