import { AuthUtils } from '../../utils/auth-utils'
import { AuthService } from '../../services/auth-service'
import type { GetInfoLocalStorageType } from '../../types/utils/auth-utils/getInfoLocalStorage.type'

export class Logout {
	readonly openNewRoute: (arg: string) => void
	constructor(openNewRoute: (arg: string) => void) {
		this.openNewRoute = openNewRoute

		if (
			!AuthUtils.getAuthInfo(AuthUtils.accessTokenKey) ||
			!AuthUtils.getAuthInfo(AuthUtils.refreshTokenKey)
		) {
			this.openNewRoute('/login')
			return
		}
		this.logout().then()
	}

	async logout() {
      const data: {refreshToken:GetInfoLocalStorageType} = {
			refreshToken: AuthUtils.getAuthInfo(AuthUtils.refreshTokenKey),
		}
		await AuthService.logout(data)

		AuthUtils.removeAuthInfo()

		this.openNewRoute('/login')
	}
}
