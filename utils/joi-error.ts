class JoiError extends Error {
    isJoi: boolean;
    data: any;
    constructor(data: any) {

        super();

        this.isJoi = true;
        this.data = data;
    }
}

export { JoiError }
