import axios from "axios"

import apiConf from "@/api/api.conf"

export default class ApiResolver {
    endpoint = "send-mail";

    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    request(url, method, data) {
        url = `${apiConf.mailer}/${this.endpoint}`;
        return (new Promise((resolve, reject) => axios({
            url,
            method,
            data
        }).then(res => {
            if (res.status < 400) {
                if (res.status < 204)
                    resolve(res.data.body);
                else
                    resolve(null);
            } else {
                reject(res.body)
            }
        }).catch(err => {
            reject(err);
        })));
    }
}

