import { userData } from "./dummy_data";

export const filterUserData = (users) => {
	const userData = users.map(user => {
		const currentUser = {
			name: user.name.first+' '+user.name.last,
			picture: user.picture.medium,
			email: user.email
		}
		return currentUser;
	});
	return userData;
}
