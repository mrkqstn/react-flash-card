const { Theme } = require('../../db/models');

class ThemeService {
  static async getAllThemes() {
    return await Theme.findAll();
  }
}
module.exports = ThemeService;