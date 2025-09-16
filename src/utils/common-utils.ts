import config from "../config/config";

export class CommonUtils {

   static getLevelHtml(level) {
      let levelHtml = null
      switch (level) {
         case config.freelancerLevels.junior:
            levelHtml = `<span class="badge badge-info">Junior</span>`
            break;
         case config.freelancerLevels.middle:
            levelHtml = `<span class="badge badge-warning">Middle</span>`
            break;
         case config.freelancerLevels.senior:
            levelHtml = `<span class="badge badge-success">Senior</span>`
            break;
         default:
            levelHtml = `<span class="badge badge-secondary">Unknown</span>`
      }
      return levelHtml;
   }

   static translateMessage(msg) {
      const errorTranslations = {
         // Ошибки валидации
         'Validation error': 'Ошибка валидации',
         'User with given email already exist': 'Пользователь с таким email уже существует',
         'Invalid email or password': 'Неверный email или пароль',
         'Internal Server Error': 'Внутренняя ошибка сервера',

         // Ошибки полей (из validation array)
         'name is required': 'Имя обязательно для заполнения',
         'lastName is required': 'Фамилия обязательна для заполнения',
         'email is required': 'Email обязателен для заполнения',
         'password is required': 'Пароль обязателен для заполнения',
         'refreshToken is required': 'Refresh token обязателен',

         // Дополнительные возможные ошибки
         'Logged Out Successfully': 'Выход выполнен успешно'
      };

      return errorTranslations[msg] || msg;


   }

   static getsStatusHtml(status) {
      const info = {
         name: '',
         color: '',
         icon: ''
      };

      switch (status) {
         case config.orderStatuses.new:
            info.name = "Новый"
            info.color = "secondary"
            info.icon = "star"
            break;
         case config.orderStatuses.confirmed:
            info.name = "Подтвержден"
            info.color = "info"
            info.icon = "eye"
            break;
         case config.orderStatuses.success:
            info.name = "Выполнен"
            info.color = "success"
            info.icon = "check"
            break;
         case config.orderStatuses.canceled:
            info.name = "Отменен"
            info.color = "danger"
            info.icon = "times"
            break;
         default:
            info.name = "Неизвестно"
            info.color = "secondary"
            info.icon = "times"
      }
      return info;
   }

   static convertedDate(dateParam) {
      if (dateParam) {
         const date = new Date(dateParam);
         return date.toLocaleString('ru-RU');
      }
      return null;
   }

   static generateGridToolsColumn(entity, id) {
      return `<div class="${entity}-tools">
      <a href="/${entity}/view?id=${id}" class="fas fa-eye"></a>
      <a href="/${entity}/edit?id=${id}" class="fas fa-edit"></a>
      <a href="/${entity}/delete?id=${id}" class="fas fa-trash"></a></div>`
   }

}