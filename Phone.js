class Phone {
    constructor(name, status, battery, inbox, sent, otherPhone) {
        this.name = name;
        this.status = status;
        this.battery = battery;
        this.inbox = inbox;
        this.sent = sent;
        this.otherPhone = otherPhone;
    }
    getBattery() { return this.battery; }
    getName() { return this.name; }
    turnOn() {
        this.status = true;
        this.battery --;
    }
    turnOff() {
        this.status = false;
    }
    send(message) {
        if (this.status === true) {
            this.sent.push(message);
            alert(this.getName() + ' Đã gửi tin nhắn '+message);
            this.otherPhone.receive(message);
            this.battery--;
        } else {
            alert("Please turn On phone");
        }
    }
    receive(message) {
        if (this.status === true) {
            this.inbox.push(message);
            alert(this.getName() + ' Đã nhận tin nhắn ' + message);
            this.battery--;
        } else {
            alert("Please turn On phone");
        }
    }
    connect(phone) {
        this.otherPhone = phone;
        this.otherPhone.otherPhone = this;
    }
}
let ip = new Phone('iphone',false, 100, [], []);
let ss = new Phone('samsung', false, 57, [], []);
ip.connect(ss);
ss.connect(ip);
ip.turnOn();
ss.turnOn();
ip.send('hello samsung');
alert('Pin ip là: ' + ip.getBattery());
alert('Pin samsung: ' + ss.getBattery());