const SERVER = "http://localhost:8080/goals";

export const loadGoals = () => {
    return fetch(SERVER)
        .then(goals => goals.json())
};

export const loadGoalFromId = (id) => {
    const path = `${SERVER}/${id}`;
    return fetch(path)
        .then(goal => goal.json())
};