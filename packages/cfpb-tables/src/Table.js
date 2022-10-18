/* ==========================================================================
   Table Organism
   ========================================================================== */

import AtomicComponent from '@cfpb/cfpb-atomic-component/src/components/AtomicComponent.js';
import TableRowLinks from './TableRowLinks.js';
import TableSortable from './TableSortable.js';
import { DIRECTIONS } from '@cfpb/cfpb-atomic-component/src/utilities/standard-type.js';

const Table = AtomicComponent.extend({
  ui: {
    base: '.o-table',
  },

  modifiers: [TableSortable, TableRowLinks],
});

Table.constants.DIRECTIONS = DIRECTIONS;

export default Table;
