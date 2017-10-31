export const userAction = (text: string, payload: any) => {
    return {
        type: text,
        payload: payload
    };
}