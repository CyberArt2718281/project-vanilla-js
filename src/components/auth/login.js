import {AuthUtils} from "../../utils/auth-utils";
import {ValidationUtils} from "../../utils/validation-utils";
import {AuthService} from "../../services/auth-service";

export class Login {
   constructor(openNewRoute) {
      this.openNewRoute = openNewRoute;

      if (AuthUtils.getAuthInfo(AuthUtils.accessTokenKey)) {
         return this.openNewRoute('/')
      }

      this.findElements();
      this.validations = [{
         element: this.emailElement,
         options: {pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i}
      }, {element: this.passwordElement},]
      document.getElementById('process-button').addEventListener('click', this.login.bind(this));

   }

   findElements() {
      this.emailElement = document.getElementById('email');
      this.passwordElement = document.getElementById('password');
      this.rememberElement = document.getElementById('remember');
      this.commonErrorElement = document.getElementById('common-error');

   }


   async login() {
      this.commonErrorElement.style.display = 'none';
      if (ValidationUtils.validateForm(this.validations)) {
         const result = await AuthService.login({
            email: this.emailElement.value,
            password: this.passwordElement.value,
            rememberMe: this.rememberElement.checked,
         })

         if (result.hasOwnProperty('message')) {
            this.commonErrorElement.style.display = 'block';
            this.commonErrorElement.innerText = result.message;
            return;
         }
         AuthUtils.setAuthInfo(result.accessToken, result.refreshToken, {
            id: result.id, name: result.name,
         });

         this.openNewRoute('/')
      }

   }

}
