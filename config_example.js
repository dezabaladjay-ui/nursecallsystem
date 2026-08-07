const MQTT_CONFIG = {
  MQTT_BROKER: "wss://YOUR_CLUSTER_URL.s1.eu.hivemq.cloud:8884/mqtt",
  MQTT_USERNAME: "YOUR_MQTT_USERNAME",
  MQTT_PASSWORD: "YOUR_MQTT_PASSWORD",
  clientId: "WebDashboard_" + Math.random().toString(16).substring(2, 8)
};