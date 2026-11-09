---
name: Preview refresh verification
description: Avoid claiming an already-open preview refreshed based only on presenting the artifact.
---

Presenting an artifact does not establish that the user's already-open preview has reloaded.

**Why:** The user continued to see a removed Contact button after the artifact was presented again, even though a fresh screenshot showed the updated source.

**How to apply:** Check what the running preview serves, restart when needed, and verify a fresh screenshot. If the user's existing tab remains stale, provide a cache-busting preview URL rather than claiming its browser state was refreshed. Do not infer that a stale production bundle caused a development-preview issue without evidence.
