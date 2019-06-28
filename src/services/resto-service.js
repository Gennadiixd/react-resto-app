export default class RestoService {
    getMenuItems = async () => {
        let res = fetch('http://localhost:4000/menu');
        let data = await res;
        return data
    }
}