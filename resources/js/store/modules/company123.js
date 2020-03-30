import companiesService from '../../services/companiesService'
import {router} from '../../router'

export default {
	state: {
		companiesList: []
	},
	getters: {
		companies(state) {
			return state.companiesList;
		}
	},
	mutations: {
		setCompanies(state, companies) {
			state.companiesList = companies
		}
	},
	actions: {
		getCompanies(ctx) {
			companiesService.getCompanies().then(res => {
				ctx.commit('setCompanies', res.data);
				// console.log(res.data)
			}).catch(err => {
				console.log('error ',err);
			})
		}
	}
}