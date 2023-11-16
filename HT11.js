class AirplaneFactory {
  createAirplane(model, capacity, payload, range) {
    return new Airplane(model, capacity, payload, range);
  }
}

class Airplane {
  constructor(model, capacity, payload, range) {
    this.model = model;
    this.capacity = capacity;
    this.payload = payload;
    this.range = range;
  }
}

class AirlineCompany {
  constructor() {
    this.airplanes = [];
  }

  addAirplane(airplane) {
    this.airplanes.push(airplane);
  }

  calculateTotalCapacity() {
    return this.airplanes.reduce((total, airplane) => total + airplane.capacity, 0);
  }

  calculateTotalPayload() {
    return this.airplanes.reduce((total, airplane) => total + airplane.payload, 0);
  }

  sortByRange() {
    this.airplanes.sort((a, b) => a.range - b.range);
  }

  findAirplaneInParametersRange(minRange, maxRange) {
    return this.airplanes.filter(airplane => airplane.range >= minRange && airplane.range <= maxRange);
  }
}
class LuxuryAirplaneDecorator {
  constructor(airplane) {
    this.airplane = airplane;
    this.airplane.model = `Luxury ${this.airplane.model}`;
  }

  get model() {
    return this.airplane.model;
  }

  get capacity() {
    return this.airplane.capacity;
  }

  get payload() {
    return this.airplane.payload;
  }

  get range() {
    return this.airplane.range;
  }
}

const airplaneFactory = new AirplaneFactory();

const boeing747 = airplaneFactory.createAirplane("Boeing 747", 416, 100000, 7240);
const airbusA380 = airplaneFactory.createAirplane("Airbus A380", 853, 120000, 8500);

const luxuryPrivateJet = new LuxuryAirplaneDecorator(airplaneFactory.createAirplane("Private Jet", 8, 2000, 6000));

const airlineCompany = new AirlineCompany();
airlineCompany.addAirplane(boeing747);
airlineCompany.addAirplane(airbusA380);
airlineCompany.addAirplane(luxuryPrivateJet);

console.log("Авиакомпания:");
airlineCompany.airplanes.forEach(airplane => console.log(`- ${airplane.model}, Вместимость: ${airplane.capacity}, Грузоподъемность: ${airplane.payload}, Дальность полета: ${airplane.range}`));

const totalCapacity = airlineCompany.calculateTotalCapacity();
const totalPayload = airlineCompany.calculateTotalPayload();
console.log(`Общая вместимость авиакомпании: ${totalCapacity}, Общая грузоподъемность: ${totalPayload}`);

console.log("Авиакомпания после сортировки по дальности полета:");
airlineCompany.sortByRange();
airlineCompany.airplanes.forEach(airplane => console.log(`- ${airplane.model}, Вместимость: ${airplane.capacity}, Грузоподъемность: ${airplane.payload}, Дальность полета: ${airplane.range}`));

const minRange = 7000;
const maxRange = 8000;
const selectedAirplanes = airlineCompany.findAirplaneInParametersRange(minRange, maxRange);

console.log(`Самолеты в заданном диапазоне дальности полета (${minRange} - ${maxRange}):`);
selectedAirplanes.forEach(airplane => console.log(`- ${airplane.model}, Вместимость: ${airplane.capacity}, Грузоподъемность: ${airplane.payload}, Дальность полета: ${airplane.range}`));