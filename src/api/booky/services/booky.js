'use strict';

/**
 * booky service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::booky.booky');
