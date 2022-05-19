'use strict';

/**
 * conference service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::conference.conference');
