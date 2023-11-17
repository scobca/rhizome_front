import ApiResolver from "@/API/apiResolver";

export class MailModel extends ApiResolver {
    constructor() {
        super('');
    }

    async sendMail(data) {
        return await this.request('', 'POST', data)
            .then(res => {
                console.log(res)
            })
    }
}