export interface IUserList {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUserDetail[];
    support: {
        url: string;
        text: string;
    };
}

export interface IUserDetail {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}
