import companiesService from '../../../services/companiesService'
import {router} from '../../../router'

export default {
	getCompanies(ctx, url) {
		return new Promise((resolve, reject) => {
			companiesService.getCompanies(url).then(res => {
				ctx.commit('setCompanies', res.data.data);
					// console.log(res.data)
				resolve(res.data)
			}).catch(err => reject(err))
		})
	},
	addCompany(ctx, data) {
		return new Promise((resolve, reject) => {
			companiesService.addCompany(data).then(res => {
				router.push('/companies')
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	},
	deleteCompany(ctx, id) {
		return new Promise((resolve, reject) => {
			companiesService.deleteCompany(id).then(response => {
				ctx.commit('DELETE_COMPANY', response.data.id);
				resolve(response);
			}).catch(err => reject(err))
		})
	},
	editCompany(ctx, id) {
		return companiesService.editCompany(id);
	},
	updateCompany(ctx, data) {
		return companiesService.updateCompany(data);
	}
}