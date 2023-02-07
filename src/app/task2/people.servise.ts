export class PeopleServise{
    private data:string[]=["Том Хэнкс","Анджелина Джоли","Род Стюард"];

    GetData():string[] {
        return this.data;
    }

    AddData(data:string){
        if(!this.data.includes(data)){
            this.data.push(data);
        }
    }

    SetData(data:string[]){
        this.data = data;
    }
}