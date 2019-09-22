class commentObject {
    constructor(message) {
        this.message = message;
        this.likes = 0;
        return {
            increment: () => {
                this.likes += 1;
            },
            getLikes: () => {
                return this.likes;
            }
        };
    }
}