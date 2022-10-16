export function validateInput(state, action) {
    const { value, type } = action;
    let isValid;

    if (type === 'email') {
        isValid = /(.+)@(.+){2,}\.(.+){2,}/.test(value);
        
    } else {
        isValid = value !== '';

    }

    if (!isValid) {
        return {
            ...state,
            [type]: true
        }
    } else {
        return {
            ...state,
            [type]: false
        }
    }
}