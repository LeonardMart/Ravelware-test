import mqtt from "mqtt";

const MQTT_BROKER =
  "wss://245d28c8a27a42569750f87c3eb044d2.s2.eu.hivemq.cloud:8884/mqtt";
const MQTT_USERNAME = "testravelware";
const MQTT_PASSWORD = "R12345678";
const MQTT_TOPICS = [
  "test/realtime",
  "test/top-5-car-usage",
  "test/fuel-usage",
];

const options = {
  username: MQTT_USERNAME,
  password: MQTT_PASSWORD,
  connectTimeout: 4000,
  keepalive: 60,
  clean: true,
};

const client = mqtt.connect(MQTT_BROKER, options);

client.on("connect", () => {
  //   console.log("MQTT Connected!");
  // Subscribe ke semua topik yang dibutuhkan
  MQTT_TOPICS.forEach((topic) => client.subscribe(topic, { qos: 1 }));
});

// client.on("message", (topic, message) => {
//   console.log(`Received message on topic ${topic}:`, message.toString());
// });

// client.on("error", (err) => {
//   console.error("MQTT Connection Error:", err);
// });

export default client;
