export class Customer {
    id: number;
    sex: string;
    name: string;
    surname: string;
    voivodeship: string;
    city: string;
    address: string;
    orderTotal: number;

    constructor(id, sex, name, surname, vs, city, address, ot){
        this.id = id;
        this.sex = sex;
        this.name = name;
        this.surname = surname;
        this.voivodeship = vs;
        this.city = city;
        this.address = address;
        this.orderTotal = ot;

    }
}
