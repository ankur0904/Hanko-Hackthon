import { Hanko } from "@teamhanko/hanko-elements";

let userId = null;
const hankoApi = process.env.REACT_APP_KEY;
const hanko = new Hanko(hankoApi);

try {
    const { id } = await hanko.user.getCurrent();
    if (id) {
        userId = id;
    }
} catch (error) {
    console.error('Error occurred while fetching user data:', error);
}

export default userId;