const MQTT_CONFIG = {
  MQTT_BROKER: "wss://8489829bb9624d2b82642b5272686b5c.s1.eu.hivemq.cloud:8884/mqtt",
  MQTT_USERNAME: "ULR",
  MQTT_PASSWORD: "unlirice",
  clientId: "WebDashboard_" + Math.random().toString(16).substring(2, 8)
};
// Check if MQTT_CONFIG from config.js exists, otherwise use safe fallback defaults
const brokerConfig = typeof MQTT_CONFIG !== 'undefined' ? MQTT_CONFIG : {
    MQTT_BROKER: "8489829bb9624d2b82642b5272686b5c.s1.eu.hivemq.cloud:8884/mqtt",
    MQTT_USERNAME: "ULR",
    MQTT_PASSWORD: "unlirice",
    clientId: "WebDashboard_" + Math.random().toString(16).substring(2, 8)
};