import BaseApi, { myApiRoute } from "./BaseApi";
import { merge } from 'lodash';

interface Session {
    username: string,
    database: string,
    token: string,
    basepath: string,

}

class SessionStore implements Session {
    constructor(init: Partial<Session>) {
        merge()
    }

    username: string = '';
    database: string = '';
    token: string  = '';
    basepath: string = '';

}

export default class SessionApi extends BaseApi<Session> {

    constructor() {
        super('session')
    }

    establishSession() {
        
    }

}