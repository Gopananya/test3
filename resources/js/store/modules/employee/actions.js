import employeeService from '../../../services/employeeService'
import {router} from '../../../router'

export default {
	getEmployee(ctx, url) {
		return new Promise((resolve, reject) => {
			employeeService.getEmployee(url).then(res => {
				ctx.commit('SET_EMPLOYEE', res.data.data);
					// console.log(res.data)
				resolve(res.data);
			}).catch(err => reject(err))
		})
	},
	createEmployee(ctx, data) {
		return new Promise((resolve, reject) => {
			employeeService.createEmployee().then(res => {
				resolve(res);
			}).catch(err => {
				reject(err);
			})
		})
	},
	addEmployee(ctx, data) {
		return new Promise((resolve, reject) => {
			employeeService.addEmployee(data).then(res => {
				router.push('/employee');
				resolve(res)
			}).catch(err => {
				reject(err);
			})
		})
	},
	deleteEmployee(ctx, id) {
		return new Promise((resolve, reject) => {
			employeeService.deleteEmployee(id).then(res => {
				ctx.commit('DELETE_EMPLOYEE', res.data.id);
				resolve(res)
			}).catch(err => {
				reject(err);
			})
		})
	},
	editEmployee(ctx, id) {
		return employeeService.editEmployee(id);
	}
	
}