import {AuthUtils} from "../../utils/auth-utils";
import {ValidationUtils} from "../../utils/validation-utils";
import {AuthService} from "../../services/auth-service";
import {KeyboardUtils} from "../../utils/keyboardUtils";

export class Login {
   constructor(openNewRoute) {
      this.openNewRoute = openNewRoute;
      this.Loginbtn = document.getElementById('login-btn');
      if (AuthUtils.getAuthInfo(AuthUtils.accessTokenKey)) {
         return this.openNewRoute('/')
      }
      this.findElements();
      this.commonErrorElement.style.display = 'none';
      this.validations = [{
         element: this.emailElement,
         options: {pattern: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i}
      }, {element: this.passwordElement},]
      KeyboardUtils.setEnterHandler(() => {
         this.login().then();
      });
      this.Loginbtn.addEventListener('click', this.login.bind(this));

   }

   findElements() {
      this.emailElement = document.getElementById('emailInput');
      this.passwordElement = document.getElementById('passwordInput');
      this.rememberElement = document.getElementById('rememberInput');
      this.commonErrorElement = document.getElementById('input-error-common');
   }


   async login() {
      if (ValidationUtils.validateForm(this.validations)) {
         const result = await AuthService.login({
            email: this.emailElement.value,
            password: this.passwordElement.value,
            rememberMe: this.rememberElement.checked,
         })

         if (result.hasOwnProperty('message')) {
            this.commonErrorElement.style.display = 'block';
            return;
         }
         AuthUtils.setUserInfo(result);

         this.openNewRoute('/')
      }

   }

}
