import * as types from "./types";

const state = {
	token:'',
	address:'',
	user_address:{
		province:'',
		city:'',
		district:''				
	}
	
}

const mutations = {
	commit_address(state,data){
		state.user_address=data;
	},
	addressEvt(state,value) {
		state.address = value;
	}
	
}

const actions = {

}

const getters = {
	
}

export default {
	state,
	getters,
	actions,
	mutations
}
