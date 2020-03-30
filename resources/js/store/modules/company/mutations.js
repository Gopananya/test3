export default {
	setCompanies(state, companies) {
		state.companiesList = companies
	},
	DELETE_COMPANY(state, id) {
		state.companiesList = state.companiesList.filter(el => el.id != id);
	}
}