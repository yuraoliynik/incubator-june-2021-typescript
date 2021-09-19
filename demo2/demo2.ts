interface IClient<Type> {
    id: Type;
    login: string;
}

const clnt1: IClient<number> = {id: 1, login: 'client1'};
const clnt2: IClient<string> = {id: '2', login: 'client2'};
