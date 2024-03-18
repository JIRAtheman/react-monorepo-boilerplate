export default abstract class BaseApi<T>{
    constructor(route:myApiRoute) {
        this.route = route;
    }

    route: myApiRoute;
}

export abstract class RecordApi<T> extends BaseApi<T> {
    constructor(route: myApiRoute) {
        super(route)
    }

    abstract get(): ApiResponse<T>

    abstract search(): ApiResponse<T>

    abstract update(): ApiResponse<boolean>

    abstract delete(): ApiResponse<boolean>
}

export const myApiRoutes = [
    'employees',
    'buildings',
    'session'
]

export type myApiRoute = typeof myApiRoutes[number];

export interface ApiRequest<T>  {
    record: T,
    count: number,
    query: string,

}

export interface ApiResponse<T>{
    count: number,
    data: Array<T>
}