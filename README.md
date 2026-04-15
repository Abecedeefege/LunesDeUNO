# LunesDeUNO — data backups branch

**Do not merge this branch into `main`.** GitHub Pages deploys `main`; anything
merged here would become publicly fetchable at
`https://abecedeefege.github.io/LunesDeUNO/backups/...`.

This orphan branch exists solely to preserve point-in-time snapshots of the
Firestore database used by the app (project `lunesdeuno`). Each file under
`backups/` is a JSON dump of the collections `games`, `seasons`, `players`,
`presets`, and `meta`, fetched via the Firestore REST API.

## Layout

```
backups/
  firestore-YYYY-MM-DD.json
```

Each file has the shape:

```json
{
  "_meta": { "project": "lunesdeuno", "fetchedAt": <ms>, "fetchedAtIso": "..." },
  "collections": {
    "games":   { "count": N, "documents": [ ... ] },
    "seasons": { "count": N, "documents": [ ... ] },
    "players": { "count": N, "documents": [ ... ] },
    "presets": { "count": 0, "documents": [] },
    "meta":    { "count": 0, "documents": [] }
  }
}
```

`documents` entries are Firestore REST-API shaped (i.e. fields wrapped as
`{ stringValue, integerValue, arrayValue, mapValue, ... }`).

## Creating a new snapshot

```bash
python3 - << 'PY'
import urllib.request, json, time
API = 'AIzaSyDgmh5HjjYdIwkFgeo7iBfcfQ_b73Xa3yM'
BASE = 'https://firestore.googleapis.com/v1/projects/lunesdeuno/databases/(default)/documents'
def fetch(col):
    req = urllib.request.Request(f'{BASE}/{col}?key={API}&pageSize=300',
                                 headers={'User-Agent': 'ldu-backup/1.0'})
    return json.loads(urllib.request.urlopen(req, timeout=30).read())
out = {'_meta': {'project': 'lunesdeuno',
                 'fetchedAt': int(time.time()*1000),
                 'fetchedAtIso': time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())},
       'collections': {}}
for c in ['games', 'seasons', 'players', 'presets', 'meta']:
    d = fetch(c)
    out['collections'][c] = {'count': len(d.get('documents', [])),
                             'documents': d.get('documents', [])}
date = time.strftime('%Y-%m-%d', time.gmtime())
open(f'backups/firestore-{date}.json', 'w').write(json.dumps(out, indent=2, ensure_ascii=False))
PY
```

## Restoring

Use `PATCH` against
`https://firestore.googleapis.com/v1/projects/lunesdeuno/databases/(default)/documents/<collection>/<docId>?key=<API_KEY>`
with an `updateMask.fieldPaths` for each field to restore, body shaped as
`{"fields": { ... }}`. Sensitive: the API key is public (client-side Firebase
config), so anyone with it could also PATCH — protect with Firestore Security
Rules if needed.
