const WOD_API_URL = ''
const Movement_API_URL = '' 

export default {
    async getWODs() {
        const res = await fetch(WOD_API_URL);
        return res.json();
    },
    async getMovements() {
        const res = await fetch(Movement_API_URL);
        return res.json();
    },
};
