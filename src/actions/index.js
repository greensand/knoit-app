export const FETCH_KITCHEN_DETAILS = 'FETCH_KITCHEN_DETAILS';
export function fetchKitchenDetails(){
   
    const request = [{"id": 1, "title": "Gaurav_Kitchen","Block": "A", "Wing": "First","FlatNo":"243"},{"id": 2, "title": "Saurav_Kitchen","Block": "B", "Wing": "Second","FlatNo":"242"},{"id": 3, "title": "Garima_Kitchen","Block": "C", "Wing": "Third","FlatNo":"285"},{"id": 4, "title": "Singapore_Kitchen","Block": "D", "Wing": "Forth","FlatNo":"240"}];
    return {
        type:FETCH_KITCHEN_DETAILS,
        payload:request
    };

}

