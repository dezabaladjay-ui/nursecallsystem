// Safely check if MQTT_CONFIG exists and has a broker URL. Otherwise, use the secure public fallback.
const activeConfig = (typeof MQTT_CONFIG !== 'undefined' && MQTT_CONFIG.MQTT_BROKER) ? MQTT_CONFIG : {
    MQTT_BROKER: "wss://test.mosquitto.org:8081/mqtt",
    MQTT_USERNAME: "",
    MQTT_PASSWORD: "",
    clientId: "PublicNurseCall_" + Math.random().toString(16).substring(2, 8)
};

// Initialize client once
const client = mqtt.connect(activeConfig.MQTT_BROKER, {
    clientId: activeConfig.clientId || ('WebDashboard_' + Math.random().toString(16).substring(2, 8)),
    username: activeConfig.MQTT_USERNAME,
    password: activeConfig.MQTT_PASSWORD,
    clean: true
});
