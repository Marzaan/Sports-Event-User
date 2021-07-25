class ApiURL {
    static baseURL = "http://127.0.0.1:8000/api/";

    static getCategories = this.baseURL + "categories";
    static eventsByCategory(category){
        return this.baseURL + "eventsByCategory/" + category;
    }

    static getEvents = this.baseURL + "events";
    static featuredEvents = this.baseURL + "featuredEvents";
    static searchEvent(query){
        return this.baseURL + "search/" + query;
    }
    static eventDetails(id){
        return this.baseURL + "eventDetails/" + id;
    }
}
export default ApiURL;