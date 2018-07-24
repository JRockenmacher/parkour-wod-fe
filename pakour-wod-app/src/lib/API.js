const WOD_API_URL = 'https://parkour-wod.herokuapp.com/workouts'
const Movement_API_URL = 'https://parkour-wod.herokuapp.com/movements' 

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
