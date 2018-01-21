export class Temperature {
    constructor(
        public location: string,
        public date: Date,
        public temperature: number
    ){}
}

export class TemperatureGroup {
    constructor(
        public location: string,
        public temperatureItems: Temperature[]
    ){}
}