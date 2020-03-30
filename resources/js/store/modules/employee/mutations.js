export default {
	SET_EMPLOYEE(state, employee) {
		state.employeeList = employee;
	},
	DELETE_EMPLOYEE(state, id) {
		state.employeeList = state.employeeList.filter(el => el.id != id);
	}
}