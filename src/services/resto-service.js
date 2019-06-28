export default class RestoService {
    _apiBase = 'http://localhost:4000';

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`${res.status}`)
        };

        return await res.json();
    }

    getMenuItems = async () => {
        return this.getResource(`/menu/`)
    }
}