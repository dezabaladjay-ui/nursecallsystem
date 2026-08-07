// 1. Determine configuration safely
const activeConfig = typeof MQTT_CONFIG !== 'undefined' ? MQTT_CONFIG : {
    broker: "wss://test.mosquitto.org:8081/mqtt",
    username: "",
    password: "",
    clientId: "PublicDashboard_" + Math.random().toString(16).substring(2, 8)
};

// 2. Connect once (do not redeclare 'client' anywhere else)
const client = mqtt.connect(activeConfig.broker, {
    username: activeConfig.username,
    password: activeConfig.password,
    clientId: activeConfig.clientId
});
