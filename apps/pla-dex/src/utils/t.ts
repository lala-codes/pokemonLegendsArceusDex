import { template } from 'lodash';

function getString(key: string) {
  switch (key) {
    case 'request':
      return '{request}';
    case 'use_move':
      return 'Times you’ve seen it use {move}';
    case 'receive_arceus':
      return 'Received a part of Arceus';
    case 'stun':
      return 'Times you’ve stunned it by using items';
    case 'scatter_bang':
      return 'Times you’ve scared it off with a Scatter Bang';
    case 'leap_ore':
      return 'Number you’ve seen leap out of ore deposits';
    case 'leap_trees':
      return 'Number you’ve seen leap out of trees';
    case 'feed':
      return 'Times you’ve given it food';
    case 'strong_move':
      return 'Times you’ve seen it use a strong style move';
    case 'agile_move':
      return 'Times you’ve seen it use an agile style move';
    case 'evolve':
      return 'Number you’ve evolved';
    case 'catch':
      return 'Number caught';
    case 'catch_night':
      return 'Number caught at night';
    case 'catch_evening':
      return 'Number caught in the evening';
    case 'catch_day':
      return 'Number caught during daylight hours';
    case 'catch_alpha':
      return 'Number of alpha specimens caught';
    case 'catch_air':
      return 'Number you’ve caught while they were in the air';
    case 'catch_unseen':
      return 'Number you’ve caught without being spotted';
    case 'catch_light':
      return 'Number of light specimens you’ve caught';
    case 'catch_asleep':
      return 'Number you’ve caught while they were sleeping';
    case 'catch_heavy':
      return 'Number of heavy specimens you’ve caught';
    case 'catch_large':
      return 'Number of large specimens you’ve caught';
    case 'catch_small':
      return 'Number of small specimens you’ve caught';
    case 'diff_forms':
      return 'Number of different forms you’ve obtained';
    case 'defeat_bug':
      return 'Number you’ve defeated with Bug-type moves';
    case 'defeat_fairy':
      return 'Number you’ve defeated with Fairy-type moves';
    case 'defeat_poison':
      return 'Number you’ve defeated with Poison-type moves';
    case 'defeat_ground':
      return 'Number you’ve defeated with Ground-type moves';
    case 'defeat_dragon':
      return 'Number you’ve defeated with Dragon-type moves';
    case 'defeat_fighting':
      return 'Number you’ve defeated with Fighting-type moves';
    case 'defeat_rock':
      return 'Number you’ve defeated with Rock-type moves';
    case 'defeat_flying':
      return 'Number you’ve defeated with Flying-type moves';
    case 'defeat_steel':
      return 'Number you’ve defeated with Steel-type moves';
    case 'defeat_grass':
      return 'Number you’ve defeated with Grass-type moves';
    case 'defeat_electric':
      return 'Number you’ve defeated with Electric-type moves';
    case 'defeat_dark':
      return 'Number you’ve defeated with Dark-type moves';
    case 'defeat_ghost':
      return 'Number you’ve defeated with Ghost-type moves';
    case 'defeat_ice':
      return 'Number you’ve defeated with Ice-type moves';
    case 'defeat_water':
      return 'Number you’ve defeated with Water-type moves';
    case 'defeat_psychic':
      return 'Number you’ve defeated with Psychic-type moves';
    case 'defeat_fire':
      return 'Number you’ve defeated with Fire-type moves';
    case 'defeat':
      return 'Number defeated';
    default:
      return '';
  }
}

export default function t(key: string, subs = {}) {
  return template(getString(key), { interpolate: /{([\s\S]+?)}/g })(subs);
}
