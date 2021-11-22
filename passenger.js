let pas_amount=0;
let tickets_amount=0;
let trains_amount=0;
class ticket {
    constructor(start,destination,date,train){
        this.start = start;
        this.destination = destination;
        this.date=date;
        tickets_amount++;
        this.number  = tickets_amount;
        this.train = train;
    }
    Getamount(){
        return tickets_amount;
    }
    Changetrain(tr){
        this.train = tr
        return 0
    }
}
class sold_ticket{
    constructor(ticket,pas_num){
        this.start = ticket.start;
        this.destination = ticket.destination;
        this.date=ticket.date;
        this.pas_num=pas_num;
        this.number  = ticket.number;
        this.train = ticket.train;
    }
}
class passenger{
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
        pas_amount++;
        this.number=pas_amount;
        this.tickets=new Array();
    }
    AddTicket(ticket){
        let tick=new sold_ticket(ticket,this.number);
        this.tickets.push(tick);
        return tick
    }
    RemoveTicket(n){
        this.tickets.splice(n,1)
        return 0
    }
    Getamount(){
        return pas_amount;
    }
}
class train{
    constructor(){
        trains_amount++;
        this.number = trains_amount;
        this.stops = new Array();
        this.bought = 0
    }
    AddStop(stopsarr) {
        for (let s in stopsarr) {
            this.stops.push(stopsarr[s]);
        }
    }
    Getamount(){
        return trains_amount;
    }
}
function Destruct(arr,ind){
    delete arr.splice(ind,1);
}
function Findby(arr,id){
    for(let i = 0;i<arr.length;i++){
        if(arr[i].number==id){
            id = i
        }
    }
    if(typeof(arr[id])=="undefined") {
        console.log("такого обьекта нет")
    }
    return id;
}
let passengers = []
let tickets = []
let trains = []
let sold = []
passengers.push(new passenger("a","b"))
passengers.push(new passenger("d","c"))
passengers.push(new passenger("j","j"))
console.log(passengers)
Destruct(passengers,1)
console.log(passengers)
Findby(passengers,2)
passengers[Findby(passengers,3)].surname="g"
console.log(passengers)
trains.push(new train())
trains.push(new train())
trains[0].AddStop(["1","2","3","4","5"])
tickets.push(new ticket("1","5","10.10",1))
tickets.push(new ticket("2","4","10.11",2))
tickets[Findby(tickets,2)].Changetrain(1)
console.log(trains)
console.log(tickets)
console.log("покупка билета")
function buytick(ticknum,pasnum)
{
    passengers[Findby(passengers,pasnum)].AddTicket(tickets[Findby(tickets,ticknum)])
    sold.push(tickets[Findby(tickets,ticknum)])
    Destruct(tickets,Findby(tickets,ticknum))
    console.log(passengers[Findby(passengers,pasnum)])
}
function Canceltick(ticknum,pasnum)
{
    passengers[Findby(passengers,pasnum)].RemoveTicket(Findby(sold,ticknum))
    tickets.push(sold[Findby(sold,ticknum)])
    Destruct(sold,Findby(sold,ticknum))
    console.log(passengers[Findby(passengers,pasnum)])
}
function stats(){
    let maxtr=-1;
    let maxst=-1;
    let mintr=-1;
    let minst=100;
    for(j in trains){
        for(i in sold){
            if(sold[i].train==trains[j].number){
                trains[j].bought++
            }

        }

        if(trains[j].bought>maxst){
            maxst=trains[j].bought
            maxtr=j

        }
        if(trains[j].bought<minst){
            minst=trains[j].bought
            mintr=j

        }
    }
    console.log("Highest profit train:")
    console.log(trains[maxtr])
    console.log("lowest profit train:")
    console.log(trains[mintr])
}
buytick(1,3)
buytick(2,3)
Canceltick(1,3)
console.log(sold)
stats()

