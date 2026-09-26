// An array is an ordered list. Each item here is an incident object.
const incidents = [
  { number: "INC1001", caller: "Ava", priority: 2, active: true },
  { number: "INC1002", caller: "Noah", priority: 3, active: false },
  { number: "INC1003", caller: "Mia", priority: 1, active: true },
];

console.log("TOPIC 1: ARRAYS");
// Use square brackets to access an item. Array positions start at 0.
console.log("First incident:", incidents[0]);

// filter() checks each item and returns a NEW array with items that pass the test.
// The function receives one item at a time; here that item is named incident.
const activeIncidents = incidents.filter(function (incident) {
  return incident.active === true;
});
console.log("Active incidents:", activeIncidents);

// push() adds an item to the end of an array.
const incidentNumbers = ["INC1001", "INC1002"];
incidentNumbers.push("INC1003");
console.log("After push():", incidentNumbers);

console.log("\nTOPIC 2: OBJECTS");
// An object stores related information as key-value pairs.
const incident = incidents[0];
console.log("Caller:", incident.caller);
console.log("Priority:", incident.priority);

// Add or change a property with dot notation.
incident.state = "In Progress";
console.log("Incident with new state:", incident);

// Destructuring copies selected properties into variables.
const { number, caller } = incident;
console.log(number + " belongs to " + caller);

// The spread syntax makes a shallow copy. This adds state without changing
// the original object.
const copiedIncident = { ...incidents[1], state: "New" };
console.log("Copied incident:", copiedIncident);
console.log("Original is unchanged:", incidents[1]);

console.log("\nTOPIC 3: map()");
// map() runs a function once per item and returns a NEW array containing
// whatever the function returns. Use it when you want to transform a list.
const callerNames = incidents.map(function (incident) {
  return incident.caller;
});
console.log("Caller names:", callerNames);

// Here each object is transformed into a short text summary.
const summaries = incidents.map(function (incident) {
  return incident.number + ": " + incident.caller;
});
console.log("Incident summaries:", summaries);

console.log("\nTOPIC 4: forEach() - WORK WITH EVERY RECORD");
// forEach() takes each array item one at a time and runs the function for it.
// Use it to print, count, or add results somewhere. It does NOT return a new
// array like map(). The word incident is just the name for the current item.
incidents.forEach(function (incident) {
  console.log(incident.number + " was reported by " + incident.caller);
});

let activeCount = 0;
incidents.forEach(function (incident) {
  if (incident.active) {
    activeCount = activeCount + 1;
  }
});
console.log("Number of active incidents:", activeCount);

// To collect values with forEach(), make an empty array first, then push into it.
// This is different from map(), which creates and returns the new array for you.
const activeTicketNumbers = [];
incidents.forEach(function (incident) {
  if (incident.active) {
    activeTicketNumbers.push(incident.number);
  }
});
console.log("Active ticket numbers collected with forEach():", activeTicketNumbers);

// You can also build client-specific objects with forEach(). First make an
// empty output array, then push one newly shaped object for each input record.
// Only the requested properties are included in each output object.
const clientTicketsForEach = [];
incidents.forEach(function (record) {
  const clientTicket = {
    ticketId: record.number,
    requestedFor: record.caller,
    urgency: record.priority,
  };
  clientTicketsForEach.push(clientTicket);
});
console.log("Client records created with forEach():", clientTicketsForEach);

console.log("\nforEach() PRACTICE - TRY THESE YOURSELF");
// A. Create an empty array. Use forEach() to push only active incident numbers.
// B. Create an empty array. Use forEach() to make objects with ticketId and
//    urgency properties from each incident. Do not include caller or active.
// C. Use forEach() to print a message only for incidents with priority 1.
// D. Count inactive incidents using forEach() and an if statement.

console.log("\nPRACTICAL TASK: SHAPE FETCHED DATA FOR A CLIENT");
// Imagine these records came from a ServiceNow request. The client only wants
// ticketId, requestedFor, and urgency, so create new objects with those fields.
// map() is a good fit because one input record becomes one output record.
const clientTickets = incidents.map(function (record) {
  return {
    ticketId: record.number,
    requestedFor: record.caller,
    urgency: record.priority,
  };
});
console.log("Client-formatted records:", clientTickets);

// Sometimes a client wants one object indexed by ticket number instead of an
// array. Each [key, value] pair becomes one property in the resulting object.
const ticketsByNumber = Object.fromEntries(
  clientTickets.map(function (ticket) {
    return [ticket.ticketId, ticket];
  }),
);
console.log("Client records keyed by ticket number:", ticketsByNumber);

console.log("\nOBJECT AND ARRAY CONVERSIONS");
// Object.entries() converts object properties into [key, value] pairs.
const settings = { email: true, sms: false };
const settingsArray = Object.entries(settings);
console.log("Object to array:", settingsArray);

// Object.fromEntries() converts [key, value] pairs back into an object.
const settingsAgain = Object.fromEntries(settingsArray);
console.log("Array back to object:", settingsAgain);

// Spread syntax copies an object. Put changed properties after ...record so
// they replace the old value; add only fields the client is allowed to receive.
const clientView = { ...incidents[0], caller: "Ava Chen" };
delete clientView.active;
console.log("Modified client view:", clientView);

// YOUR TURN: Write code below each prompt. Try to solve these without copying
// the examples above, then run `node practice.js` to check your work.

// 1. Use forEach() to collect the numbers of inactive incidents into a new array.
// 2. Use map() to make records with only number and priority, renamed to
//    ticketId and urgency.
// 3. Convert your new array into an object keyed by ticketId.
// 4. Use Object.entries() to turn that object into an array of key-value pairs.
// 5. Make a copy of the first incident with a new caller, without changing the
//    original incident in the incidents array.