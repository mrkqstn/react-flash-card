const ThemeService = require("../services/Theme.service");
const formatResponce = require('../utils/formatResponse')

class ThemeController {
    static async getAll(req, res) {
        try {
            const result = await ThemeService.getAllThemes()
            return res.status(200).json(formatResponce(200, "Все темы", result))
            
        } catch (error) {
            res.status(500).json(formatResponce(500, "Ошибка сервера"))
        }
    }
}

module.exports = ThemeController