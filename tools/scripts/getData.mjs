import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import data from '../../apps/pla-dex/src/slices/rawMoves.json' assert { type: 'json' };

const results = data.results;

async function downloadInfo(info) {
  const moveData = await Promise.all(
    results
      .filter((x) => !info[x.name])
      .map((result) =>
        fetch(result.url)
          .then((response) =>
            response.json().then((data) => ({
              name: data.name,
              type: data.type.name,
            }))
          )
          .catch((err) => {
            console.log('Failed for ', result, err);
          })
      )
  );
  return moveData.filter((x) => !!x);
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = path.resolve(__dirname, '../../apps/pla-dex/src/data/moves.json');
const info = JSON.parse(fs.readFileSync(file));

downloadInfo(info).then((d) => {
  fs.writeFileSync(
    path.resolve(__dirname, '../../apps/pla-dex/src/data/moves.json'),
    JSON.stringify(
      d.reduce(
        (prev, current) => ({
          [current.name]: { type: current.type },
          ...prev,
        }),
        info
      ),
      null,
      2
    )
  );
});
