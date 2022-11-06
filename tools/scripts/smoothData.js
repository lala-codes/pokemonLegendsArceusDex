const fs = require('fs');
const path = require('path');
const data = require('../../apps/pla-dex/src/assets/data.json');
const kebabCase = require('lodash/kebabCase');

// const regions = data.regions;
// const regionMap = {};
// regions.forEach((region) => {
// regionMap[region.name] = {
//     name: region.displayName,
//     mons: region.monsters,
// }
// });
// fs.writeFileSync(path.resolve(__dirname, '../../apps/pla-dex/src/data/regions.json'), JSON.stringify(regionMap, null, 2));

const mons = data.monsters;
const monsMap = {};
const researchTaskMap = {};

mons.forEach((mon) => {
  monsMap[mon.dex] = {
    name: mon.name,
  };

  researchTaskMap[mon.dex] = mon.researchTasks.map((researchTask) => {
    const result = {
      isDoubled: researchTask.isDoubled,
      requirements: researchTask.requirements,
    };

    switch (researchTask.task) {
      case "times you've seen it use a strong style move":
        result.type = 'strong_move';
        break;
      case "times you've seen it use an agile style move":
        result.type = 'agile_move';
        break;
      case "number you've evolved":
        result.type = 'evolve';
        break;
      case 'number caught':
        result.type = 'catch';
        break;
      case "number you've caught at night":
      case 'number caught at night':
        result.type = 'catch_night';
        break;
      case 'number caught in the evening':
        result.type = 'catch_evening';
        break;
      case 'number caught during daylight hours':
        result.type = 'catch_day';
        break;
      case 'number of alpha specimens caught':
        result.type = 'catch_alpha';
        break;
      case 'number caught while they were in the air':
      case "number you've caught while they were in the air":
        result.type = 'catch_air';
        break;
      case "number you've caught without being spotted":
        result.type = 'catch_unseen';
        break;
      case 'number defeated':
        result.type = 'defeat';
        break;

      // elements
      case "number you've defeated with Fire-type moves":
        result.type = 'defeat_fire';
        break;
      case "number you've defeated with Psychic-type moves":
        result.type = 'defeat_psychic';
        break;
      case "number you've defeated with Water-type moves":
        result.type = 'defeat_water';
        break;
      case "number you've defeated with Ice-type moves":
        result.type = 'defeat_ice';
        break;
      case "number you've defeated with Ghost-type moves":
        result.type = 'defeat_ghost';
        break;
      case "number you've defeated with Dark-type moves":
      case "number you've defeated wtih Dark-type moves":
        result.type = 'defeat_dark';
        break;
      case "number you've defeated with electric-type moves":
      case "number you've defeated with Electric-type moves":
        result.type = 'defeat_electric';
        break;
      case "number you've defeated with Grass-type moves":
        result.type = 'defeat_grass';
        break;
      case "number you've defeated with Flying-type moves":
        result.type = 'defeat_flying';
        break;
      case "number you've defeated with Rock-type moves":
        result.type = 'defeat_rock';
        break;
      case "number you've defeated with Fighting-type moves":
      case "number you've defeated with Fighting-type mvoes":
        result.type = 'defeat_fighting';
        break;
      case "number you've defeated with Steel-type moves":
        result.type = 'defeat_steel';
        break;
      case "number you've defeated with Ground-type moves":
      case "number you've defeated with ground-type moves":
        result.type = 'defeat_ground';
        break;
      case "number you've defeated with Dragon-type moves":
        result.type = 'defeat_dragon';
        break;
      case "number you've defeated with Fairy-type moves":
        result.type = 'defeat_fairy';
        break;
      case "number you've defeated with Poison-type moves":
        result.type = 'defeat_poison';
        break;
      case "number you've defeated with Bug-type moves":
        result.type = 'defeat_bug';
        break;

      // others
      case "number of different forms you've obtained":
        result.type = 'diff_forms';
        break;
      case "number of small specimens you've caught":
      case "number of small specimens you've caught":
      case 'number of small specimens caught':
        result.type = 'catch_small';
        break;

      case "number of large specimens you've caught":
      case 'number of large specimens caught':
        result.type = 'catch_large';
        break;
      case 'number of heavy specimens caught':
      case "number of heavy specimens you've caught":
        result.type = 'catch_heavy';
        break;
      case "number you've caught while sleeping":
      case "number you've caught while they were sleeping":
        result.type = 'catch_asleep';
        break;
      case "number of light specimens you've caught":
      case 'number of light specimens caught':
        result.type = 'catch_light';
        break;

      case "times you've given it food":
        result.type = 'feed';
        break;
      case "number you've seen leap out of trees":
        result.type = 'leap_trees';
        break;
      case "number you've seen leap out of ore deposits":
        result.type = 'leap_ore';
        break;
      case "times you've scared it off with a Scatter Bang":
      case "times you've scared it off with a Scatter Bug":
        result.type = 'scatter_bang';
        break;
      case "times you've stunned it by using items":
        result.type = 'stun';
        break;
      case 'Received a part of Arceus':
        result.type = 'receive_arceus';
        break;

      default:
        // "times you've seen it use Absorb"
        const regResult = /times you've seen it use ([a-zA-Z\- ]+)/.exec(
          researchTask.task
        );
        if (regResult && regResult.length === 2) {
          result.type = 'use_move';
          result.move = kebabCase(regResult.pop());
        } else {
          result.type = 'request';
          result.request = researchTask.task;
        }
    }

    return result;
  });
});

fs.writeFileSync(
  path.resolve(__dirname, '../../apps/pla-dex/src/data/mons.json'),
  JSON.stringify(monsMap, null, 2)
);
fs.writeFileSync(
  path.resolve(__dirname, '../../apps/pla-dex/src/data/researchTasks.json'),
  JSON.stringify(researchTaskMap, null, 2)
);
